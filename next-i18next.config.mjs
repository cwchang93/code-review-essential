import path from 'path';

const nextI18NextConfig = {
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    localeDetection: true,
  },
  localePath: path.resolve('./public/locales'),
};

export default nextI18NextConfig;
