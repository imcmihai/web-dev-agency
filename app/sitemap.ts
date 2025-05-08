import { MetadataRoute } from 'next'

// Replace with your actual domain when deploying
const baseUrl = 'https://web-dev-agency-seven.vercel.app/'; 

export default function sitemap(): MetadataRoute.Sitemap {
  // Add other static routes here
  const staticRoutes = [
    '/', 
    '/services', 
    '/prices', 
    '/contact'
  ];

  const staticSitemapEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(), // Use current date for now
    changeFrequency: 'monthly' as const, // Or 'weekly', 'daily' depending on update frequency
    priority: route === '/' ? 1 : 0.8, // Give homepage higher priority
  }));

  // If you had dynamic routes (e.g., blog posts), you would fetch them 
  // and generate entries for them here, then combine with static entries.
  // Example:
  // const dynamicPosts = await fetchPosts();
  // const dynamicEntries = dynamicPosts.map(post => ({ ... }));

  return [
    ...staticSitemapEntries,
    // ...dynamicEntries, // Add dynamic entries if any
  ];
} 