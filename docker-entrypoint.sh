#!/bin/sh

# Migrate the database (use --force for production)
php artisan migrate --force

# Start PHP-FPM server
php-fpm