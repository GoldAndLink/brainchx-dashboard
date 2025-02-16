import { Metadata } from 'next';
import logoImg from '@public/logo.png';
import { LAYOUT_OPTIONS } from '@/config/enums';
import logoIconImg from '@public/logo-short.png';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

enum MODE {
  DARK = 'dark',
  LIGHT = 'light',
}

export const siteConfig = {
  title: 'Medotrax - BrainchX Dashboard',
  description: `Medotrax - BrainchX Dashboard`,
  logo: logoImg,
  icon: logoIconImg,
  mode: MODE.LIGHT,
  layout: LAYOUT_OPTIONS.HELIUM,
  // TODO: favicon
};

export const metaObject = (
  title?: string,
  openGraph?: OpenGraph,
  description: string = siteConfig.description
): Metadata => {
  return {
    title: title ? `${title} - Medotrax - BrainchX Dashboard` : siteConfig.title,
    description,
    openGraph: openGraph ?? {
      title: title ? `${title} - Medotrax - BrainchX Dashboard` : title,
      description,
      url: 'https://brainchx-dashboard.vercel.app',
      siteName: 'Medotrax - BrainchX Dashboard', // https://developers.google.com/search/docs/appearance/site-names
      images: {
        url: 'https://neurosciencenews.com/files/2024/10/alzheimers-phases-neurosicence.jpg',
        width: 1200,
        height: 630,
      },
      locale: 'en_US',
      type: 'website',
    },
  };
};
