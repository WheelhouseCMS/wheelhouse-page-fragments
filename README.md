Page Fragments Plugin for Wheelhouse CMS
========================================

This gem enables the development of single-page sites in Wheelhouse CMS. It allows pages to be defined as *page fragments*, which are then included within a containing page. The navigation is updated to link to the anchor div for each page fragment.


Installation & Usage
--------------------

**1. Add `wheelhouse-page-fragments` to your Gemfile:**

    gem "wheelhouse-page-fragments", :git => "git://github.com/WheelhouseCMS/wheelhouse-page-fragments.git"

Then run `bundle install`.

**2. Turn each child page into a page fragment by selecting 'This is a page fragment' from within the page's Navigation Options.**

**3. Create a new template or layout for the containing page (usually your home page), including the following:**
    
    <%= fragments %>
  
Then assign this template/layout to your containing page (which should not be a page fragment).
