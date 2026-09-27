/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Sekgabe's logo and website were merged into one client project.
      {
        source: "/portfolio/sekgabe-turnkey-website",
        destination: "/portfolio/sekgabe-turnkey",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
