// This file contains all the configuration for your app.
import { ConfigProps } from "./types/config";

const config = {
  // REQUIRED
  appName: "Lazy Consultants",
  // REQUIRED: a short description of your app for SEO tags (can be overwritten)
  appDescription:
    "Lazy Consultants is a platform that helps you automate the writing and translating of your work emails.",
  // REQUIRED (no https://, not trialing slash at the end, just the naked domain)
  domainName: "lazyconsultants.com",
  aws: {
    // If you use AWS S3/Cloudfront, put values in here
    bucket: "lazyconsultantsdemo",
    bucketUrl: `https://lazyconsultantsdemo.s3.amazonaws.com/`,
    cdn: "https://cdn-id.cloudfront.net/",
  },

} as ConfigProps;

export default config;
