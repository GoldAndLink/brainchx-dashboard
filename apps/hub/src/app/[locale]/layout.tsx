import dynamic from "next/dynamic";
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
import { dir } from "@/i18n/direction";
import ConfigureAmplifyClientSide from "../amplify-cognito-config";

const NextProgress = dynamic(() => import("@core/components/next-progress"), {
  ssr: false,
});

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

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
