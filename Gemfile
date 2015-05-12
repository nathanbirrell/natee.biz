source 'https://rubygems.org'

# gem 'jekyll'
# gem 'jekyll-sitemap'
gem 'octopress', '~> 3.0.0.rc.12'

require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

gem 'github-pages', versions['github-pages']