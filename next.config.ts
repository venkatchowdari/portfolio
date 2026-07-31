import type { NextConfig } from "next";
 
// Vercel builds normally (SSR-capable, served from the domain root).
// GitHub Pages can only serve static files from a /portfolio subpath
// (venkatchowdari.github.io/portfolio), so that build needs a static
// export with a basePath. The GH Actions workflow sets GITHUB_PAGES=true
// to opt into that mode; Vercel never sets it, so it's unaffected.
const isGithubPages = process.env.GITHUB_PAGES === "true";
 
const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  ...(isGithubPages && {
    output: "export",
    basePath: "/portfolio",
    trailingSlash: true,
    images: { unoptimized: true },
  }),
  ...(isGithubPages
    ? {}
    : {
        async headers() {
          return [
            {
              source: "/(.*)",
              headers: [
                { key: "X-Content-Type-Options", value: "nosniff" },
                { key: "X-Frame-Options", value: "DENY" },
                { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
                { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
              ],
            },
          ];
        },
      }),
};
 
export default nextConfig;
 