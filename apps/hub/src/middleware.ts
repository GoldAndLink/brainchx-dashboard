import { fetchAuthSession } from 'aws-amplify/auth/server';
import { NextRequest, NextResponse } from 'next/server';
import { runWithAmplifyServerContext } from '@/utils/amplify-server-utils';
import { withAuth } from "next-auth/middleware";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
// import { runWithAmplifyServerContext } from "aws-amplify/adapter-core";
// import { fetchAuthSession } from "aws-amplify/auth";

const publicPages = [
  "/auth/sign-in-1",
  "/auth/sign-up-1",
  "/auth/otp-1",
  "/auth/forgot-password-1",
];

const intlMiddleware = createMiddleware({
  ...routing,
});

// const authMiddleware = withAuth(
//   function onSuccess(req) {
//     return intlMiddleware(req);
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => token !== null,
//     },
//     pages: {
//       signIn: "/auth/sign-in-1",
//     },
//   }
// );

export default async function middleware(req: NextRequest) {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Max-Age': '86400',
      },
    });
  }

  // Add CORS headers for API routes
  if (req.nextUrl.pathname.startsWith('/api/')) {
    const response = new Response(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
    return response;
  }

  const publicPathnameRegex = RegExp(
    `^(/(${routing.locales.join("|")}))?(${publicPages
      .flatMap((p) => (p === "/" ? ["", "/"] : p))
      .join("|")})/?$`,
    "i"
  );
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

  if (isPublicPage) {
    return intlMiddleware(req);
  } else {
    // return (authMiddleware as any)(req);
    const response = NextResponse.next();

    const authenticated = await runWithAmplifyServerContext({
      nextServerContext: { request: req, response },
      operation: async (contextSpec: any) => {
        try {
          const session = await fetchAuthSession(contextSpec);
          return (
            session.tokens?.accessToken !== undefined &&
            session.tokens?.idToken !== undefined
          );
        } catch (error) {
          console.log(error);
          return false;
        }
      }
    });

    if (authenticated) {
      // return response;
      return intlMiddleware(req);
    }

    return NextResponse.redirect(new URL('/auth/sign-in-1', req.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
