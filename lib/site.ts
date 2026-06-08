/**
 * Base URL do site, usada por metadata, OG image, robots e sitemap.
 * - Em produção na Vercel usa o domínio do deploy automaticamente.
 * - Defina NEXT_PUBLIC_SITE_URL com seu domínio final (ex.: https://richardvictor.dev)
 *   quando tiver um — sobrepõe os dois fallbacks abaixo.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

export const SITE = {
  name: 'Richard Victor',
  title: 'Richard Victor — Backend Developer & Futuro Eng. de IA',
  description:
    'Estudante de tecnologia, desenvolvedor backend e futuro engenheiro de IA. Python, APIs e inteligência artificial. Sorocaba, Brasil.',
  role: 'Backend Developer',
  locality: 'Sorocaba',
  region: 'SP',
  country: 'BR',
  email: 'richardvic12@gmail.com',
  github: 'https://github.com/rvalves10',
  linkedin: 'https://www.linkedin.com/in/richard-victor-3611a5303/',
} as const;
