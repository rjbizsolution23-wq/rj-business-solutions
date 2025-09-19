# WORDPRESS CONNECTION METHODS

## Method 1: WP-CLI (Recommended)
Install WP-CLI on your system, then I can run commands like:
```bash
wp plugin install [plugin-name]
wp theme activate [theme]
wp post create --post_title="New Post"
```

## Method 2: REST API Access
Provide:
- WordPress URL: https://yoursite.com
- Application Password (create in Users > Profile > Application Passwords)
- Then I can use:
```bash
curl -X POST https://yoursite.com/wp-json/wp/v2/posts \
  -H "Authorization: Basic [base64_encoded_credentials]"
```

## Method 3: Direct File Access
If WordPress is hosted locally or on a server you control:
- Provide the WordPress installation path (e.g., /var/www/html/wordpress)
- I can directly edit theme files, plugins, wp-config.php

## Method 4: FTP/SFTP Credentials
Provide:
- Host: ftp.yoursite.com
- Username: your_username
- Password: your_password
- Path to WordPress: /public_html

## Method 5: Database Access
For advanced changes:
- MySQL host, username, password, database name
- Or phpMyAdmin URL with credentials

## What I Can Do Once Connected:
- Install/configure plugins
- Customize themes
- Create pages/posts
- Set up WooCommerce
- Configure SEO settings
- Optimize performance
- Set up forms
- Configure security
- Database optimization
- Custom code additions

Which method do you want to use?