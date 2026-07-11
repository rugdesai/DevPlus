import { defineManifest } from "@crxjs/vite-plugin";

export default defineManifest({
  manifest_version: 3,

  name: "DevPlus",
  version: "1.0.0",

  description: "AI-powered GitHub developer analytics",

  permissions: ["storage"],

  host_permissions: [
    "https://github.com/*",
    "https://api.github.com/*",
    "http://localhost:5050/*",
  ],

  action: {
    default_title: "DevPlus",
  },

  content_scripts: [
    {
      matches: ["https://github.com/*"],
      js: ["src/content/content.ts"],
    },
  ],
});