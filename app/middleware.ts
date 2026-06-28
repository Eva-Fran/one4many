import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.get("auth"); // your auth cookie

  if (!isLoggedIn && request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/auth", request.url));
  }
}

export const config = {
  matcher: ["/"],
};