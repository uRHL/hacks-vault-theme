# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-hacks-vault"
  spec.version       = "1.0.0"
  spec.authors       = ["Ramon Hernandez Leon"]
  spec.email         = ["100383351@alumnos.uc3m.es"]

  spec.summary       = "A minimal, responsive, and feature-rich Jekyll theme for technical writing and CLI lovers. Forked from Chirpy theme."
  spec.homepage      = "https://github.com/uRHL/hacks-vault-theme"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f|
    f.match(%r!^((_(includes|layouts|sass|(data\/(locales|origin)))|assets)\/|README|LICENSE)!i)
  }

  spec.metadata = {
    "bug_tracker_uri"   => "https://github.com/uRHL/hacks-vault-theme/issues",
    "documentation_uri" => "https://github.com/uRHL/hacks-vault-theme/#readme",
    "homepage_uri"      => "https://urhl.github.io/hacks-vault-theme/",
    "source_code_uri"   => "https://github.com/uRHL/hacks-vault-theme",
    "wiki_uri"          => "https://github.com/cotes2020/jekyll-theme-chirpy/wiki",
    "plugin_type"       => "theme"
  }

  spec.required_ruby_version = "~> 3.1"

  spec.add_runtime_dependency "jekyll", "~> 4.3"
  spec.add_runtime_dependency "jekyll-paginate", "~> 1.1"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.8"
  spec.add_runtime_dependency "jekyll-archives", "~> 2.2"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.4"
  spec.add_runtime_dependency "jekyll-include-cache", "~> 0.2"

end
