import { type SiteConfig } from './types/site-config-types';

const siteConfig: SiteConfig = {
  siteName: 'Site Boilerplate',
  darkMode: true,
  theme: {
    color: {
      primary: {
        light: '#DA3E52',
        dark: '#3446eb',
      },
    },
  },
  layout: {
    container: 'xl',
  }
};

export default siteConfig;
