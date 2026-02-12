import { NextRequest, NextResponse } from "next/server";
import { BASE_URL } from "./utils/Constants/apis";
import { authKeyword } from "./utils/Constants/auth";

// 인증이 필요한 보호된 라우트 목록
const protectedRoutes = ["/addepigram", "/epigrams", "/feed", "/search"];

// 인증이 없는 상태에서는 접근가능한 라우트 목록
const authRoutes = ["/login", "/signup"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get(authKeyword.ACCESS_TOKEN)?.value;
  const refreshToken = request.cookies.get(authKeyword.REFRESH_TOKEN)?.value;

  let response = NextResponse.next();

  if (!accessToken && refreshToken) {
    try {
      const refreshRes = await fetch(`${BASE_URL}/auth/refresh-token`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refreshToken }),
      });

      if (refreshRes.ok) {
        const data = await refreshRes.json();

        response.cookies.set(authKeyword.ACCESS_TOKEN, data.accessToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          maxAge: 60 * 60,
        });
      } else {
        response.cookies.delete(authKeyword.ACCESS_TOKEN);
        response.cookies.delete(authKeyword.REFRESH_TOKEN);
      }
    } catch (e) {
      console.error("Middleware refresh error", e);
    }
  }

  const isProtectedRoutes = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );

  if (isProtectedRoutes) {
    const currentAT =
      response.cookies.get(authKeyword.ACCESS_TOKEN)?.value || accessToken;
    const currentRT = refreshToken;
    if (!currentAT && !currentRT) {
      const loginPage = new URL("/login", request.url);

      return NextResponse.redirect(loginPage);
    }
  }

  if (authRoutes.includes(pathname)) {
    if (refreshToken) {
      const rootPage = new URL("/", request.url);

      return NextResponse.redirect(rootPage);
    }
  }

  return response;
}

export const config = {
  matcher: [
    "/login",
    "/signup",
    "/addepigram",
    "/epigrams/:path*",
    "/feed",
    "/search",
  ],
};
