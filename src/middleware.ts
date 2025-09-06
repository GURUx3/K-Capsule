// middleware.ts
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  publicRoutes: ["/"], // only homepage is public
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)"],
  // protect everything except static files and Next.js internals
};
