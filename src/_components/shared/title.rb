class Shared::Title < Bridgetown::Component
  def initialize(title:, styles: default_styles)
    @title, @styles = title, styles
  end

  def default_styles
    "text-4xl font-light leading-snug"
  end
end
