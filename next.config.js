/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_LOCAL_URI:
      "mongodb+srv://AliHabhab:KgJDN0jlNbOinYZi@cluster0.z0ux7fc.mongodb.net/?retryWrites=true&w=majority",
    CLOUDINARY_CLOUD_NAME: "bookit",
    CLOUDINARY_API_KEY: "561531929141456",
    CLOUDINARY_API_SECRET: "",
  },
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
