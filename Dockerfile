# Use an official PHP runtime as a parent image
FROM php:8.3-fpm-alpine

# Set the working directory to /var/www/html
WORKDIR /var/www/html

# Install system dependencies and PHP extensions
RUN apk update && apk add --no-cache \
    git \
    zip \
    unzip \
    libzip-dev \
    oniguruma-dev \
    icu-dev \
    $PHPIZE_DEPS \
    && docker-php-ext-install pdo pdo_mysql mbstring tokenizer xml ctype json intl mongodb

# Install composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy application files
COPY . /var/www/html

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Copy environment file (Render will provide these as env vars)
# COPY .env .env # Remove this line for production.

# Generate application key
RUN php artisan key:generate

# Optimize Laravel application
RUN php artisan optimize:clear

# Copy entrypoint script
COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint
RUN chmod +x /usr/local/bin/docker-entrypoint

# Expose port 9000 and start php-fpm server
EXPOSE 9000
CMD ["/usr/local/bin/docker-entrypoint"]

# Install Node and NPM, build assets.
RUN apk add --no-cache nodejs npm
RUN npm install
RUN npm run build # Assuming you use vite, or npm run production for webpack