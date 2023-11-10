/** @type {import("next").NextConfig} */
module.exports = {
    reactStrictMode: true,
    experimental: {
      serverActions: {
        allowedOrigins: ["nextjs-14-0-2-bug-report-4ea064a57303.herokuapp.com"]
      }
    }
  }
  