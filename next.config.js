/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.pixabay.com"],
  },
};

module.exports = nextConfig;
//cdn.pixabay.com
// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "res.cloudinary.com",
//         port: "",
//         pathname: "/account123/**",
//       },
//     ],
//   },
// };
