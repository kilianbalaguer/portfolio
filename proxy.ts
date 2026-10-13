import { NextResponse, type NextRequest } from "next/server";

// Password-protected stats dashboard.
// stats.kilianbalaguer.tech (or /stats) asks for a login, then shows the Umami share page.
// Credentials come from env vars so they never end up in git:
//   STATS_USER (default "kilian") and STATS_PASSWORD (required).

const unauthorized = () =>
  new NextResponse("Authentication required", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Kilian stats", charset="UTF-8"' },
  });

// Compare without leaking how many characters matched
function safeEqual(a: string, b: string) {
  let diff = a.length ^ b.length;
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    diff |= (a.charCodeAt(i) || 0) ^ (b.charCodeAt(i) || 0);
  }
  return diff === 0;
}

function isAuthorized(request: NextRequest) {
  const password = process.env.STATS_PASSWORD;
  if (!password) return false; // locked until a password is configured

  const header = request.headers.get("authorization");
  if (!header?.startsWith("Basic ")) return false;

  let decoded = "";
  try {
    decoded = atob(header.slice(6));
  } catch {
    return false;
  }
  const separator = decoded.indexOf(":");
  if (separator === -1) return false;

  const user = decoded.slice(0, separator);
  const pass = decoded.slice(separator + 1);
  return safeEqual(user, process.env.STATS_USER || "kilian") && safeEqual(pass, password);
}

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const { pathname } = request.nextUrl;
  const isStatsHost = host.startsWith("stats.");

  if (!isStatsHost && !pathname.startsWith("/stats")) return NextResponse.next();
  if (!isAuthorized(request)) return unauthorized();

  if (isStatsHost && pathname !== "/stats") {
    return NextResponse.rewrite(new URL("/stats", request.url));
  }
  return NextResponse.next();
}

export const config = {
  // Skip static assets so the main site isn't slowed down
  matcher: ["/((?!_next/|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|webp|avif|ico|txt|xml)$).*)"],
};
