// dev-server.ts
import { join } from "path";

Bun.serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);

    // 1. Serve index.html at the root route
    if (url.pathname === "/") {
      return new Response(Bun.file("./index.html"), {
        headers: { "Content-Type": "text/html" },
      });
    }

    // 2. Intercept browser requests looking for "/assets" 
    // and route them to your true custom directory (e.g., "./my-custom-folder")
    if (url.pathname.startsWith("/assets/")) {
      const assetFileName = url.pathname.replace("/assets/", "assets/");
      const customPath = join(import.meta.dir, "./", assetFileName);
      
      return new Response(Bun.file(customPath));
    }

    return new Response("Not Found", { status: 404 });
  },
});

console.log("Dev server running at http://localhost:3000");
