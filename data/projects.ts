/**
 * Fonte única dos projetos.
 * Adicione um projeto aqui e ele aparece AUTOMATICAMENTE no terminal
 * (comando `projetos`) e na contagem do boot (`/projetos (N)`).
 *
 * Obs.: o card visual da seção "Projetos" continua sendo montado à mão em
 * components/Portfolio.tsx, porque cada um tem imagem e layout próprios.
 */
export type ProjectStatus = 'online' | 'dev' | 'next';

export type Project = {
  name: string;
  status: ProjectStatus;
  pt: string; // descrição curta (PT)
  en: string; // descrição curta (EN)
};

export const PROJECTS: Project[] = [
  {
    name: 'QuebraDica Sorocaba',
    status: 'online',
    pt: 'portal colaborativo da comunidade',
    en: 'collaborative community portal',
  },
  {
    name: 'Jéssica Cílios',
    status: 'online',
    pt: 'portfólio profissional',
    en: 'professional portfolio',
  },
  {
    name: 'DevLingo',
    status: 'online',
    pt: 'aprenda a programar jogando · Python + IA',
    en: 'learn to code by playing · Python + AI',
  },
  {
    name: 'Chatbot Educação Financeira',
    status: 'dev',
    pt: 'IA para educação financeira',
    en: 'AI for financial education',
  },
];
