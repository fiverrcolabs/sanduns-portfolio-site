import { useEffect } from "react";
import { updateMetaTags, SEOConfig } from "@/lib/seo";

interface SEOHeadProps {
  config?: Partial<SEOConfig>;
}

/**
 * Component to dynamically update SEO meta tags
 * Usage: <SEOHead config={{ title: "Custom Title", description: "Custom description" }} />
 */
export const SEOHead = ({ config }: SEOHeadProps) => {
  useEffect(() => {
    if (config) {
      updateMetaTags(config);
    }
  }, [config]);

  return null;
};
