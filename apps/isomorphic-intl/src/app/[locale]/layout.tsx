import dynamic from "next/dynamic";
import { Amplify } from 'aws-amplify';
import { Toaster } from "react-hot-toast";
import GlobalDrawer from "@/app/shared/drawer-views/container";
import GlobalModal from "@/app/shared/modal-views/container";
import { JotaiProvider, ThemeProvider } from "@/app/shared/theme-provider";
import { Providers } from '@/app/providers';
import { siteConfig } from "@/config/site.config";
import { inter, lexendDeca } from "@/app/fonts";
import cn from "@core/utils/class-names";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import AuthProvider from "../shared/auth-provider";
import { getServerSession } from "next-auth";
import auth from "@/auth.ts";
import { dir } from "@/i18n/direction";
import { env } from "@/env.mjs";
import ConfigureAmplifyClientSide from "../amplify-cognito-config";

const NextProgress = dynamic(() => import("@core/components/next-progress"), {
  ssr: false,
});

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

// Amplify.configure({
//   Auth: {
//     Cognito: {
//       //  Amazon Cognito User Pool ID
//       userPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
//       // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
//       userPoolClientId: process.env.AWS_COGNITO_USER_POOL_CLIENT_ID,
//       // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
//       identityPoolId: process.env.AWS_COGNITO_IDENTITY_POOL_ID,
//       // OPTIONAL - Set to true to use your identity pool's unauthenticated role when user is not logged in
//       allowGuestAccess: false,
//       // OPTIONAL - This is used when autoSignIn is enabled for Auth.signUp
//       // 'code' is used for Auth.confirmSignUp, 'link' is used for email link verification
//       signUpVerificationMethod: 'code', // 'code' | 'link'
//       // loginWith: {
//       //   // OPTIONAL - Hosted UI configuration
//       //   oauth: {
//       //     domain: 'your_cognito_domain',
//       //     scopes: [
//       //       'phone',
//       //       'email',
//       //       'profile',
//       //       'openid',
//       //       'aws.cognito.signin.user.admin'
//       //     ],
//       //     redirectSignIn: ['http://localhost:3000/'],
//       //     redirectSignOut: ['http://localhost:3000/'],
//       //     responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
//       //   }
//       // }
//       loginWith: {
//         email: true,
//       },
//       userAttributes: {
//         email: {
//           required: true,
//         },
//       },
//       passwordFormat: {
//         minLength: 8,
//         requireLowercase: true,
//         requireUppercase: true,
//         requireNumbers: true,
//         requireSpecialCharacters: true,
//       },
//     }
//   }
// });

// You can get the current config object
// const currentConfig = Amplify.getConfig();

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // const session = await getServerSession(auth);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={dir(locale)}
      suppressHydrationWarning
    >
      <body
        suppressHydrationWarning
        className={cn(inter.variable, lexendDeca.variable, "font-inter")}
      >
        <ConfigureAmplifyClientSide />
        {/* <AuthProvider session={session}> */}
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
        >
          <ThemeProvider>
            <NextProgress />
            <JotaiProvider>
              <Providers>
                {children}
                <Toaster />
                <GlobalDrawer />
                <GlobalModal />
              </Providers>
            </JotaiProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
        {/* </AuthProvider> */}
      </body>
    </html>
  );
}
