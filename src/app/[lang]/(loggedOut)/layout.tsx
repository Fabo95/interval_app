import React from 'react';
import { Manrope } from 'next/font/google';
import { Metadata } from 'next';

import 'styles/global.css';
import { Locale } from 'utils/types';

const manrope = Manrope({
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  description: 'Interval timer for your workout.',
  title: 'Interval Timer',
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
}) => (
  <html className={manrope.className} lang={lang}>
    <body>{children}</body>
  </html>
);
export default RootLayout;
