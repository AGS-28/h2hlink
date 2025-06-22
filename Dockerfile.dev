FROM php:7.4-fpm

# Install dependencies
RUN apt-get update && apt-get install -y \
    curl gnupg2 ca-certificates lsb-release apt-transport-https && \
    echo "deb http://nginx.org/packages/debian `lsb_release -cs` nginx" \
      > /etc/apt/sources.list.d/nginx.list && \
    curl -fsSL https://nginx.org/keys/nginx_signing.key | apt-key add - && \
    apt-get update && \
    apt-get install -y \
    nginx \
    libzip-dev libpq-dev unzip vim curl supervisor \
    && docker-php-ext-install zip pgsql \
    && apt-get clean
    
# Set working directory
WORKDIR /var/www/html
    
# Copy project
COPY . /var/www/html
    
# Install composer
RUN php composer.phar install --no-interaction --prefer-dist --optimize-autoloader --no-dev

# Set permissions
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html \
    && mkdir -p application/cache/sessions \
    && chmod -R 777 application/cache/sessions

# Copy nginx config
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy Supervisord config
COPY supervisord.conf /etc/supervisord.conf

# Expose port
EXPOSE 80

# Start both PHP-FPM and Nginx
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
