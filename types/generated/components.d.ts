import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsAboutBlock extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_blocks';
  info: {
    description: 'Two-column layout with image and text content';
    displayName: 'About Block';
  };
  attributes: {
    content_blocks: Schema.Attribute.JSON;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    heading_accent: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    image_position: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
  };
}

export interface SectionsClients extends Struct.ComponentSchema {
  collectionName: 'components_sections_clients';
  info: {
    description: 'Trusted clients marquee section';
    displayName: 'Clients';
  };
  attributes: {
    heading: Schema.Attribute.String;
    show_logos: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface SectionsContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_infos';
  info: {
    description: 'Contact information display section';
    displayName: 'Contact Info';
  };
  attributes: {
    address: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    email: Schema.Attribute.Email;
    heading: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    show_form: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface SectionsCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_ctas';
  info: {
    description: 'Call-to-action banner section';
    displayName: 'CTA';
  };
  attributes: {
    button_link: Schema.Attribute.String;
    button_text: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    style: Schema.Attribute.Enumeration<['default', 'gradient', 'dark']> &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface SectionsFaq extends Struct.ComponentSchema {
  collectionName: 'components_sections_faqs';
  info: {
    description: 'Frequently asked questions accordion section';
    displayName: 'FAQ';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    questions: Schema.Attribute.JSON;
  };
}

export interface SectionsFeaturesGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_features_grids';
  info: {
    description: 'Grid of feature cards with icons';
    displayName: 'Features Grid';
  };
  attributes: {
    columns: Schema.Attribute.Enumeration<['2', '3', '4']> &
      Schema.Attribute.DefaultTo<'3'>;
    description: Schema.Attribute.Text;
    features: Schema.Attribute.JSON;
    heading: Schema.Attribute.String;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    description: 'Full-screen hero section with headline and CTAs';
    displayName: 'Hero';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images'>;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
    headline_accent: Schema.Attribute.String;
    primary_button_link: Schema.Attribute.String;
    primary_button_text: Schema.Attribute.String;
    secondary_button_link: Schema.Attribute.String;
    secondary_button_text: Schema.Attribute.String;
    subheading: Schema.Attribute.Text;
    tagline: Schema.Attribute.String;
  };
}

export interface SectionsImageGallery extends Struct.ComponentSchema {
  collectionName: 'components_sections_image_galleries';
  info: {
    description: 'Grid of images with optional captions';
    displayName: 'Image Gallery';
  };
  attributes: {
    columns: Schema.Attribute.Enumeration<['2', '3', '4']> &
      Schema.Attribute.DefaultTo<'3'>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    images: Schema.Attribute.Media<'images', true>;
    style: Schema.Attribute.Enumeration<['grid', 'masonry']> &
      Schema.Attribute.DefaultTo<'grid'>;
  };
}

export interface SectionsPortfolioGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_portfolio_grids';
  info: {
    description: 'Display projects/case studies';
    displayName: 'Portfolio Grid';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    limit: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<3>;
    show_all: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    subheading: Schema.Attribute.String;
  };
}

export interface SectionsServicesGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_services_grids';
  info: {
    description: 'Display services from collection';
    displayName: 'Services Grid';
  };
  attributes: {
    heading: Schema.Attribute.String;
    limit: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<6>;
    show_all: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    subheading: Schema.Attribute.Text;
  };
}

export interface SectionsSpacer extends Struct.ComponentSchema {
  collectionName: 'components_sections_spacers';
  info: {
    description: 'Empty space between sections';
    displayName: 'Spacer';
  };
  attributes: {
    height: Schema.Attribute.Enumeration<
      ['small', 'medium', 'large', 'xlarge']
    > &
      Schema.Attribute.DefaultTo<'medium'>;
  };
}

export interface SectionsStats extends Struct.ComponentSchema {
  collectionName: 'components_sections_stats';
  info: {
    description: 'Statistics/metrics display section';
    displayName: 'Stats';
  };
  attributes: {
    heading: Schema.Attribute.String;
    stats: Schema.Attribute.JSON;
    subheading: Schema.Attribute.String;
  };
}

export interface SectionsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials';
  info: {
    description: 'Testimonials carousel section';
    displayName: 'Testimonials';
  };
  attributes: {
    heading: Schema.Attribute.String;
    limit: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<6>;
    show_all: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    subheading: Schema.Attribute.String;
  };
}

export interface SectionsTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_sections_text_blocks';
  info: {
    description: 'Rich text content section';
    displayName: 'Text Block';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    image_position: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'right'>;
    layout: Schema.Attribute.Enumeration<['left', 'center', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.about-block': SectionsAboutBlock;
      'sections.clients': SectionsClients;
      'sections.contact-info': SectionsContactInfo;
      'sections.cta': SectionsCta;
      'sections.faq': SectionsFaq;
      'sections.features-grid': SectionsFeaturesGrid;
      'sections.hero': SectionsHero;
      'sections.image-gallery': SectionsImageGallery;
      'sections.portfolio-grid': SectionsPortfolioGrid;
      'sections.services-grid': SectionsServicesGrid;
      'sections.spacer': SectionsSpacer;
      'sections.stats': SectionsStats;
      'sections.testimonials': SectionsTestimonials;
      'sections.text-block': SectionsTextBlock;
    }
  }
}
