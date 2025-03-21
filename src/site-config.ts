import { type SiteConfig } from './types/site-config-types';

const siteConfig: SiteConfig = {
  siteName: 'Site Boilerplate',
  darkMode: true,
  theme: {
    color: {
      primary: {
        light: '#D8D8D8',
        dark: '#3446eb',
      },
    },
  },
  layout: {
    container: 'xl',
  }
};

export default siteConfig;
