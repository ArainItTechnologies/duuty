import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import plugin from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";
import { env } from "process";
import selfsigned from "selfsigned";

const certificateName = "duutyapp.client";
const baseFolder = path.resolve(__dirname, "certificates");
const certFilePath = path.join(baseFolder, `${certificateName}.pem`);
const keyFilePath = path.join(baseFolder, `${certificateName}.key`);

// Ensure the certificates folder exists
if (!fs.existsSync(baseFolder)) {
  fs.mkdirSync(baseFolder, { recursive: true });
}

// Generate certificate if it doesn't exist
if (!fs.existsSync(certFilePath) || !fs.existsSync(keyFilePath)) {
  const pems = selfsigned.generate(null, { days: 365 });
  fs.writeFileSync(certFilePath, pems.cert);
  fs.writeFileSync(keyFilePath, pems.private);
  console.log("Certificates generated!");
} else {
  console.log("Certificates already exist.");
}
const target = env.ASPNETCORE_HTTPS_PORT
  ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}`
  : env.ASPNETCORE_URLS
  ? env.ASPNETCORE_URLS.split(";")[0]
  : "https://localhost:7296";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [plugin()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: `${target}`,
        changeOrigin: true,
        secure: false
      }
    },
    port: 5173,
    https: {
      key: fs.readFileSync(keyFilePath),
      cert: fs.readFileSync(certFilePath),
    },
  },
});
