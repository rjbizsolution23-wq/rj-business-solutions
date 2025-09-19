'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { detectUserCity } from '@/lib/geolocation';
import type { CityData } from '@/lib/top-100-markets-data';

interface LocationRedirectProps {
  children: React.ReactNode;
}

export default function LocationRedirect({ children }: LocationRedirectProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isChecking, setIsChecking] = useState(false);
  const [detectedCity, setDetectedCity] = useState<CityData | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Only run on homepage or main locations page
    if (pathname !== '/' && pathname !== '/locations') {
      return;
    }

    // Check if user has already been redirected this session
    const hasRedirected = sessionStorage.getItem('location-redirected');
    if (hasRedirected) {
      return;
    }

    // Check if user has opted out of location detection
    const optedOut = localStorage.getItem('location-opted-out');
    if (optedOut) {
      return;
    }

    const checkLocation = async () => {
      setIsChecking(true);
      try {
        const city = await detectUserCity();
        if (city) {
          setDetectedCity(city);
          setShowPrompt(true);
        }
      } catch (error) {
        console.error('Location detection failed:', error);
      } finally {
        setIsChecking(false);
      }
    };

    // Delay location check to avoid immediate popup
    const timer = setTimeout(checkLocation, 2000);
    return () => clearTimeout(timer);
  }, [pathname]);

  const handleAcceptRedirect = () => {
    if (detectedCity) {
      sessionStorage.setItem('location-redirected', 'true');
      sessionStorage.setItem('user-location', JSON.stringify(detectedCity));
      router.push(`/locations/${detectedCity.slug}`);
    }
    setShowPrompt(false);
  };

  const handleDeclineRedirect = () => {
    sessionStorage.setItem('location-redirected', 'true');
    setShowPrompt(false);
  };

  const handleOptOut = () => {
    localStorage.setItem('location-opted-out', 'true');
    setShowPrompt(false);
  };

  return (
    <>
      {children}

      {showPrompt && detectedCity && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 animate-fadeIn">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                We Serve {detectedCity.name}, {detectedCity.stateAbbr}!
              </h3>
              <p className="text-gray-600">
                We've detected you're in {detectedCity.name}. Would you like to see
                AI automation services and solutions specifically for your area?
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={handleAcceptRedirect}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                Yes, Show {detectedCity.name} Services
              </button>

              <button
                onClick={handleDeclineRedirect}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                No, Continue Browsing
              </button>

              <button
                onClick={handleOptOut}
                className="text-sm text-gray-500 hover:text-gray-700 underline"
              >
                Don't ask again
              </button>
            </div>
          </div>
        </div>
      )}

      {isChecking && (
        <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 flex items-center gap-3 z-40">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600"></div>
          <span className="text-sm text-gray-600">Detecting your location...</span>
        </div>
      )}
    </>
  );
}