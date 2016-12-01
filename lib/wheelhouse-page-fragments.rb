require 'wheelhouse'

module PageFragments
  class Plugin < Wheelhouse::Plugin
    config.precompile << "page-fragments/resource.js" << "page-fragments/*.png"

    hook(:resource) do
      content_for(:javascript) { javascript_include_tag("page-fragments/resource") }
    end
  end
end
