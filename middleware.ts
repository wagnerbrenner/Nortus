import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  const isLogin = req.nextUrl.pathname === "/login";

  const protectedRoutes = ["/", "/tickets", "/chat", "/simulator"];
  const isProtected = protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route));

  if (isProtected && !token && !isLogin) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (isLogin && token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/tickets/:path*", "/chat/:path*", "/simulator/:path*", "/login"],
};
