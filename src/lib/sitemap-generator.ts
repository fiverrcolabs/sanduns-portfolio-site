/**
 * Sitemap Generator Utility
 * 
 * This utility helps generate sitemap.xml content for your portfolio.
 * Update the routes array when you add new pages.
 */

interface SitemapRoute {
  path: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number; // 0.0 to 1.0
  lastmod?: string; // ISO date string (YYYY-MM-DD)
}

/**
 * Configuration
 */
const SITE_URL = 'https://sanduninduwara.com'; // Update this with your actual domain

/**
 * Define your routes here
 */
const routes: SitemapRoute[] = [
  {
    path: '/',
    changefreq: 'weekly',
    priority: 1.0,
    lastmod: new Date().toISOString().split('T')[0], // Today's date
  },
  // Add more routes as you create new pages
  // Example:
  // {
  //   path: '/projects',
  //   changefreq: 'weekly',
  //   priority: 0.8,
  //   lastmod: '2026-01-17',
  // },
];

/**
 * Generate sitemap XML
 */
export function generateSitemap(): string {
  const urlEntries = routes
    .map((route) => {
      const url = `${SITE_URL}${route.path}`;
      const lastmod = route.lastmod || new Date().toISOString().split('T')[0];
      
      return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

/**
 * Log sitemap to console (for manual copy/paste)
 */
export function logSitemap() {
  console.log('Generated Sitemap:');
  console.log('='.repeat(80));
  console.log(generateSitemap());
  console.log('='.repeat(80));
  console.log('\nCopy the above content to public/sitemap.xml');
}

// If running directly in Node.js (for testing)
if (typeof window === 'undefined' && typeof process !== 'undefined') {
  logSitemap();
}
