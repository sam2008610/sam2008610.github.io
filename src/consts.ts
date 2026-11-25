export const SITE = {
  title: 'Po-Hsiang Tseng',
  description: 'Po-Hsiang Tseng is an embedded software engineer building real-time OS kernels and low-level software for automotive ECUs.',
  lang: 'en',
  locale: 'en-US',
  ogLocale: 'en_US',
  timeZone: 'Asia/Taipei',
  author: 'Po-Hsiang Tseng',
};

export const NAV = [
  { href: '/#work', label: 'Work' },
  { href: '/#experience', label: 'Experience' },
  { href: '/posts/', label: 'Writing' },
  { href: '/about/', label: 'About' },
];

export const SOCIAL = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/po-hsiang-tseng-17365b23b/', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/sam2008610', icon: 'github' },
  { label: 'X', href: 'https://x.com/Liv3rM0r3', icon: 'x' },
  { label: 'RSS', href: '/rss.xml', icon: 'rss' },
] as const;
