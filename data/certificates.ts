export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  skills: string[];
  category: 'programming' | 'data' | 'soft-skills' | 'other';
}

const repo = 'https://github.com/rvalves10/certificados';

export const CERTIFICATES: Certificate[] = [
  { title: 'Formação: A partir do zero — Iniciante em Programação', issuer: 'Alura', date: '2025', credentialUrl: repo, skills: ['Lógica', 'JavaScript', 'Fundamentos'], category: 'programming' },
  { title: 'Formação: Aprenda a programar em Python com OO', issuer: 'Alura', date: '2025', credentialUrl: repo, skills: ['Python', 'POO', 'Classes'], category: 'programming' },
  { title: 'Formação: Praticando Python', issuer: 'Alura', date: '2025', credentialUrl: repo, skills: ['Python', 'Projetos', 'Prática'], category: 'programming' },
  { title: 'Python: Crie a sua primeira aplicação', issuer: 'Alura', date: '2025', credentialUrl: repo, skills: ['Python', 'Fundamentos'], category: 'programming' },
  { title: 'Python: Aplicando a Orientação a Objetos', issuer: 'Alura', date: '2025', credentialUrl: repo, skills: ['Python', 'POO'], category: 'programming' },
  { title: 'Python: Avance na OO e consuma API', issuer: 'Alura', date: '2025', credentialUrl: repo, skills: ['Python', 'API', 'POO'], category: 'programming' },
  { title: 'Python Collections pt.1: Listas e Tuplas', issuer: 'Alura', date: '2025', credentialUrl: repo, skills: ['Python', 'Listas', 'Tuplas'], category: 'data' },
  { title: 'Python Collections pt.2: Conjuntos e Dicionários', issuer: 'Alura', date: '2025', credentialUrl: repo, skills: ['Python', 'Dicionários', 'Sets'], category: 'data' },
  { title: 'Praticando Python: Condicionais if/elif/else', issuer: 'Alura', date: '2025', credentialUrl: repo, skills: ['Python', 'Condicionais'], category: 'programming' },
  { title: 'Praticando Python: Laços for e while', issuer: 'Alura', date: '2025', credentialUrl: repo, skills: ['Python', 'Loops'], category: 'programming' },
  { title: 'Praticando Python: Funções', issuer: 'Alura', date: '2025', credentialUrl: repo, skills: ['Python', 'Funções'], category: 'programming' },
  { title: 'Praticando Python: Estruturas de Dados', issuer: 'Alura', date: '2025', credentialUrl: repo, skills: ['Python', 'Estruturas'], category: 'data' },
  { title: 'Praticando Python: Strings e Regex', issuer: 'Alura', date: '2025', credentialUrl: repo, skills: ['Python', 'Regex'], category: 'programming' },
  { title: 'Praticando Python: Programação Assíncrona', issuer: 'Alura', date: '2025', credentialUrl: repo, skills: ['Python', 'Async'], category: 'programming' },
  { title: 'Lógica de Programação: Mergulhe com JavaScript', issuer: 'Alura', date: '2025', credentialUrl: repo, skills: ['JavaScript', 'Lógica'], category: 'programming' },
  { title: 'Lógica de Programação: Funções e Listas', issuer: 'Alura', date: '2025', credentialUrl: repo, skills: ['JavaScript', 'Arrays'], category: 'programming' },
  { title: 'Começando em Programação: Carreira', issuer: 'Alura', date: '2025', credentialUrl: repo, skills: ['Carreira', 'Introdução'], category: 'soft-skills' },
  { title: 'Git e GitHub: Compartilhando e Colaborando', issuer: 'Alura', date: '2025', credentialUrl: repo, skills: ['Git', 'GitHub'], category: 'programming' },
  { title: 'Certificado de Inteligência Artificial', issuer: 'Externo', date: '2025', credentialUrl: repo, skills: ['IA', 'Machine Learning'], category: 'data' },
  { title: 'Certificado de Conclusão', issuer: 'Externo', date: '2025', credentialUrl: repo, skills: ['Programação', 'Desenvolvimento'], category: 'other' },
];
