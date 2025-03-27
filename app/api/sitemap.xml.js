// /app/api/sitemap.xml.js
import { NextResponse } from 'next/server';

// Define your website URL
const BASE_URL = "https://tctsoftwares.com";

export async function GET() {
  // Fetch dynamic routes if needed (e.g., blog posts, projects)
  const dynamicRoutes = await getDynamicRoutes();

  // Define static routes (Home, About, Contact, etc.)
  const staticRoutes = [
    "",
    "about",
    "services",
    "contact",
    "en",
    "vi"
  ];

  // Combine static and dynamic routes
  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  // Generate XML sitemap
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allRoutes
        .map((route) => {
          return `
            <url>
              <loc>${BASE_URL}/${route}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>0.8</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

// Example function to simulate fetching dynamic routes
async function getDynamicRoutes() {
  // Simulate fetching from database or API
  return ["projects/project-1", "projects/project-2", "blog/post-1"];
}
