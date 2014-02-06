module PageFragments::FragmentsHelper
  def fragments(options={})
    root = fragment_root(options.delete(:root))
    fragments = Wheelhouse::Page.where(:parent_id => root.id).ordered.fragments

    safe_join(fragments.map { |f| fragment(f, options) }, "\n")
  end
  
  def fragment(fragment, options={})
    fragment = Wheelhouse::Page.get(fragment) if fragment.is_a?(String)
    content_tag(:div, render_fragment(fragment), { :id => fragment.dom_id }.merge(options))
  end
  
  def title(new_title=nil)
    # Prevent title from being set if rendering a fragment
    is_page_fragment?(@page) ? super() : super
  end

private
  def render_fragment(fragment)
    old_page, @page = @page, fragment
    render :template => @page._template, :prefixes => [@page._template_prefix]
  ensure
    @page = old_page
  end

  def fragment_root(root)
    case root
    when Wheelhouse::Resource::Node
      root
    when String
      site.nodes.where("label.en" => root).first
    else
      node
    end
  end
  
  def is_page_fragment?(page)
    page && page.respond_to?(:fragment?) && page.fragment?
  end
end
