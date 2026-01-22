/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://clarkecarpentry.co.uk",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/studio", "/studio/*", "/api/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio", "/api/"],
      },
    ],
    additionalSitemaps: [],
  },
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    // Custom priority for different page types
    let priority = 0.7;
    let changefreq = "weekly";

    if (path === "/") {
      priority = 1.0;
      changefreq = "daily";
    } else if (path === "/services" || path === "/projects") {
      priority = 0.9;
    } else if (path.startsWith("/services/") || path.startsWith("/projects/")) {
      priority = 0.8;
    } else if (path === "/blog") {
      priority = 0.8;
      changefreq = "daily";
    } else if (path.startsWith("/blog/")) {
      priority = 0.7;
    } else if (path === "/contact" || path === "/about") {
      priority = 0.8;
    }

    return {
      loc: path,
      changefreq: changefreq,
      priority: priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
