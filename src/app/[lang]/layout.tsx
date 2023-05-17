import React from 'react';
import { Manrope } from 'next/font/google';
import { Metadata } from 'next';

import 'styles/global.css';
import { Menu } from 'ui/menu/menu';
import { getTFunction } from 'i18n/get-t-function';
import { Locale, Page } from 'utils/types';
import { Box } from 'base/box';

const manrope = Manrope({
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  description: 'Generated by create next app',
  title: 'Create Next App',
  // TODO Remove viewport property from metadata.
  viewport: {
    initialScale: 0.7,
    maximumScale: 0.7,
    width: 'device-width',
  },
};

const RootLayout = async ({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { [key: string]: Locale };
}) => {
  const t = await getTFunction(lang);

  // --- HELPERS ---

  const menuOptions = [
    { translation: t('pages.home.menuOption'), page: Page.HOME },
    { translation: t('pages.settings.menuOption'), page: Page.SETTINGS },
    { translation: t('pages.history.menuOption'), page: Page.HISTORY },
    { translation: t('pages.statistics.menuOption'), page: Page.STATISTICS },
  ];

  // --- RENDER ---

  return (
    <html className={manrope.variable} lang={lang}>
      <body className="box-border h-screen bg-gradient-to-tl from-red-primary via-red-secondary to-red-tertiary tracking-wide text-white-full">
        <Box className="h-screen max-h-screen overflow-hidden">
          <Menu headline={t(`pages.home.headline`)} menuOptions={menuOptions} />
          {children}
        </Box>
      </body>
    </html>
  );
};

export default RootLayout;
