Gem::Specification.new do |s|
  s.name        = "wheelhouse-page-fragments"
  s.platform    = Gem::Platform::RUBY
  s.version     = "1.0"

  s.required_ruby_version     = ">= 1.8.7"
  s.required_rubygems_version = ">= 1.3.6"
  
  s.summary     = "Page fragments plugin for Wheelhouse CMS."
  s.description = "Adds support for page fragments to Wheelhouse CMS, which can be used to create single-page sites."
  s.author      = "Sam Pohlenz"
  s.email       = "sam@wheelhousecms.com"
  s.homepage    = "https://www.wheelhousecms.com"
  
  s.files        = Dir["{app,config,lib}/**/*", "README", "LICENSE"]
  s.require_path = "lib"
  
  s.add_dependency("wheelhouse", "~> 1.0.13")
end
