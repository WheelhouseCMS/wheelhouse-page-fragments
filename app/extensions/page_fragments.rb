module PageFragments::PageMethods
  def path
    fragment? ? "##{dom_id}" : super
  end
  
  def path_before_type_cast
    path
  end
  
  def icon
    fragment? ? "page-fragments/fragment.png" : super
  end
  
  def dom_id
    label.parameterize
  end
end

Wheelhouse::Page.class_eval do
  property :fragment, Boolean, :default => false
  include PageFragments::PageMethods
end

Wheelhouse::Resource.class_eval do
  scope :bare, bare.select(:fragment)
  scope :fragments, where(:fragment => true)
end
