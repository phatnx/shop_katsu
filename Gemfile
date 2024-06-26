# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.0.0'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails', branch: 'main'
gem 'rails', '~> 6.1.4', '>= 6.1.4.1'
# Use sqlite3 as the database for Active Record
# gem 'sqlite3', '~> 1.4'
# Use Puma as the app server
gem 'puma', '~> 4.3.9' #'~> 5.0'
# Use SCSS for stylesheets
gem 'sass-rails', '>= 6'
# Transpile app-like JavaScript. Read more: https://github.com/rails/webpacker
gem 'webpacker', '~> 5.0'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.7'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use Active Model has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Active Storage variant
# gem 'image_processing', '~> 1.2'

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.4.4', require: false
gem 'redis', '~> 3.0'
group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'web-console', '>= 4.1.0'
  # Display performance information such as SQL time and flame graphs for each request in your browser.
  # Can be configured to work on production as well see: https://github.com/MiniProfiler/rack-mini-profiler/blob/master/README.md
  gem 'listen', '~> 3.3'
  gem 'rack-mini-profiler', '~> 2.0'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
end

group :test do
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '>= 3.26'
  gem 'selenium-webdriver'
  # Easy installation and use of web drivers to run system tests with browsers
  gem 'webdrivers'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'active_model_serializers', '~> 0.10.12'
gem 'active_storage_validations', '0.8.2'
gem 'bcrypt', '3.1.16'
gem 'cancancan'
gem 'devise'
gem 'faker'
gem 'handlebars_assets'
gem 'image_processing', '~> 1.2'
gem 'json', '~> 2.6'
gem 'jwt'
gem 'kaminari'
gem 'mini_magick', '4.9.5'
gem 'mysql2', '~> 0.5.3'
gem 'omniauth'
gem 'omniauth-facebook'
gem 'omniauth-google-oauth2'
gem 'omniauth-rails_csrf_protection'
gem 'paperclip', '~> 6.0.0'
gem 'paypal-sdk-rest'
gem 'rails_admin', '~> 2.0'
gem 'rubocop-rails', require: false
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
group :production do
  gem 'pg'
  gem 'rails_12factor'
end
gem 'aws-sdk-s3', require: false
gem 'bootstrap4-kaminari-views'
gem 'carrierwave', '~> 0.11.2'
gem 'chartkick'
gem 'ckeditor'
gem 'geocoder'
gem 'groupdate'
gem 'rails-i18n'
gem 'rubocop'
gem 'sidekiq'
gem 'sidekiq-cron'
gem 'sitemap_generator'
gem 'uglifier', '>= 1.0.3', require: 'uglifier'
gem 'figaro'
group :development do
  gem 'capistrano', require: false
  gem 'capistrano3-puma', require: false
  gem 'capistrano-rails', require: false
  gem 'capistrano-bundler', require: false
  gem 'capistrano-rbenv', require: false
end