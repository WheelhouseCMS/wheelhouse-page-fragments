module PageFragments::FragmentsHelper
  def fragments(options={})
    root = fragments_root(options.delete(:root))
    safe_join(all_fragments(root).map { |f| fragment(f, options) }, "\n")
  end
  
  def fragment(fragment, options={})
    fragment = Wheelhouse::Page.get(fragment) if fragment.is_a?(String)
    content_tag(:div, render_fragment(fragment), { :id => fragment.dom_id }.merge(options))
  end

private
  def render_fragment(fragment)
    old_page, @page = @page, fragment
    render :template => @page._template, :prefixes => [@page._template_prefix]
  ensure
    @page = old_page
  end
  
  def all_fragments(root=site.navigation)
    result = []
    root.each do |k, v|
      result << k.reload if k.is_a?(Wheelhouse::Page) && k.fragment?
      result += all_fragments(v)
    end
    result
  end
  
  def fragments_root(root)
    root ? site.navigation.find { |n| [n, n.id, n.label[:en]].include?(root) } : site.navigation
  end
end
