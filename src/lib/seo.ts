/**
 * SEO utility functions and configurations
 */

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterHandle?: string;
}

export const defaultSEO: SEOConfig = {
  title: "Sandun Induwara - Software Engineer | Portfolio",
  description:
    "Sandun Induwara - Software Engineer from University of Moratuwa, Sri Lanka. Explore my projects, technical skills, and professional experience in software development, web development, and system design.",
  keywords: [
    "Sandun Induwara",
    "Software Engineer",
    "Portfolio",
    "Web Developer",
    "University of Moratuwa",
    "Computer Science",
    "Software Development",
    "Full Stack Developer",
    "React Developer",
    "TypeScript",
    "Projects",
  ],
  canonicalUrl: "https://sanduninduwara.com/",
  ogImage: "https://sanduninduwara.com/portfolio-preview.png",
  ogType: "website",
  twitterHandle: "@sanduninduwara",
};

/**
 * Update document meta tags dynamically
 */
export const updateMetaTags = (config: Partial<SEOConfig>) => {
  const seoConfig = { ...defaultSEO, ...config };

  // Update title
  document.title = seoConfig.title;

  // Update or create meta tags
  const updateMeta = (name: string, content: string, isProperty?: boolean) => {
    const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
    let element = document.querySelector(selector);
    
    if (!element) {
      element = document.createElement("meta");
      if (isProperty) {
        element.setAttribute("property", name);
      } else {
        element.setAttribute("name", name);
      }
      document.head.appendChild(element);
    }
    element.setAttribute("content", content);
  };

  // Update description
  updateMeta("description", seoConfig.description);
  
  // Update keywords if provided
  if (seoConfig.keywords && seoConfig.keywords.length > 0) {
    updateMeta("keywords", seoConfig.keywords.join(", "));
  }

  // Update canonical URL
  if (seoConfig.canonicalUrl) {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", seoConfig.canonicalUrl);
  }

  // Update Open Graph tags
  updateMeta("og:title", seoConfig.title, true);
  updateMeta("og:description", seoConfig.description, true);
  if (seoConfig.ogImage) {
    updateMeta("og:image", seoConfig.ogImage, true);
  }
  if (seoConfig.ogType) {
    updateMeta("og:type", seoConfig.ogType, true);
  }
  if (seoConfig.canonicalUrl) {
    updateMeta("og:url", seoConfig.canonicalUrl, true);
  }

  // Update Twitter tags
  updateMeta("twitter:title", seoConfig.title);
  updateMeta("twitter:description", seoConfig.description);
  if (seoConfig.ogImage) {
    updateMeta("twitter:image", seoConfig.ogImage);
  }
  if (seoConfig.twitterHandle) {
    updateMeta("twitter:creator", seoConfig.twitterHandle);
  }
};

/**
 * Generate structured data (JSON-LD) for a person
 */
export const generatePersonSchema = (data: {
  name: string;
  url: string;
  image?: string;
  jobTitle?: string;
  alumniOf?: { name: string; location: string };
  sameAs?: string[];
  knowsAbout?: string[];
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: data.name,
    url: data.url,
    ...(data.image && { image: data.image }),
    ...(data.jobTitle && { jobTitle: data.jobTitle }),
    ...(data.alumniOf && {
      alumniOf: {
        "@type": "EducationalOrganization",
        name: data.alumniOf.name,
        location: data.alumniOf.location,
      },
    }),
    ...(data.sameAs && { sameAs: data.sameAs }),
    ...(data.knowsAbout && { knowsAbout: data.knowsAbout }),
  };
};

/**
 * Generate breadcrumb schema
 */
export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};
