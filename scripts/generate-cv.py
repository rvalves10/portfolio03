# -*- coding: utf-8 -*-
"""
Gera o currículo do Richard em PDF (public/cv-richard-victor.pdf).
Dados conferidos com a CTPS digital (10/06/2026):
  - Tauste: Assistente de Vendas 06/2023–11/2024 -> promovido a Líder de Setor 12/2024–atual
  - Hélio Felipe Machado (comércio): Serviços Gerais 06/2022–05/2023
Rode:  python scripts/generate-cv.py
"""
import os
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor

W, H = A4  # 595 x 842 pt

INK    = HexColor('#16202a')
MUTED  = HexColor('#5b6772')
FAINT  = HexColor('#8a949e')
ACCENT = HexColor('#0d9488')
DARK   = HexColor('#0e1419')
TEAL_L = HexColor('#5fe9d6')
LINE   = HexColor('#d7dde2')

OUT = os.path.join(os.path.dirname(__file__), '..', 'public', 'cv-richard-victor.pdf')

c = canvas.Canvas(OUT, pagesize=A4)
c.setTitle('Richard Victor de Almeida Alves — Currículo')
c.setAuthor('Richard Victor de Almeida Alves')


def wrap(text, font, size, maxw):
    words = text.split()
    lines, cur = [], ''
    for w_ in words:
        t = (cur + ' ' + w_).strip()
        if c.stringWidth(t, font, size) <= maxw:
            cur = t
        else:
            if cur: lines.append(cur)
            cur = w_
    if cur: lines.append(cur)
    return lines


def para(x, y, text, font='Helvetica', size=9, color=INK, maxw=320, leading=None):
    leading = leading or size * 1.38
    c.setFont(font, size); c.setFillColor(color)
    for ln in wrap(text, font, size, maxw):
        c.drawString(x, y, ln); y -= leading
    return y


def bullet(x, y, text, size=8.8, maxw=310, color=INK):
    leading = size * 1.38
    c.setFillColor(ACCENT); c.setFont('Helvetica-Bold', size)
    c.drawString(x, y, '·')
    c.setFillColor(color); c.setFont('Helvetica', size)
    first = True
    for ln in wrap(text, 'Helvetica', size, maxw - 10):
        c.drawString(x + 9, y, ln); y -= leading; first = False
    return y


def section(x, y, title, w):
    c.setFont('Helvetica-Bold', 10); c.setFillColor(ACCENT)
    c.drawString(x, y, title.upper())
    c.setStrokeColor(LINE); c.setLineWidth(0.8)
    tw = c.stringWidth(title.upper(), 'Helvetica-Bold', 10)
    c.line(x + tw + 8, y + 3, x + w, y + 3)
    return y - 16

# ---------------- HEADER ----------------
HEADER_H = 118
c.setFillColor(DARK)
c.rect(0, H - HEADER_H, W, HEADER_H, stroke=0, fill=1)
c.setFillColor(TEAL_L)
c.rect(0, H - HEADER_H - 3, W, 3, stroke=0, fill=1)

c.setFont('Helvetica-Bold', 23); c.setFillColor(HexColor('#ffffff'))
c.drawString(40, H - 44, 'RICHARD VICTOR DE ALMEIDA ALVES')
c.setFont('Helvetica', 11); c.setFillColor(TEAL_L)
c.drawString(40, H - 62, 'Desenvolvedor Backend (Jr.)  ·  Estudante de ADS  ·  Futuro Engenheiro de IA')

c.setFont('Helvetica', 8.6); c.setFillColor(HexColor('#c9d2d8'))
c.drawString(40, H - 82, 'Sorocaba – SP   ·   (15) 99830-6390   ·   richardvic12@gmail.com   ·   CNH AB')
c.setFillColor(HexColor('#9fb3ad'))
c.drawString(40, H - 96, 'github.com/rvalves10   ·   linkedin.com/in/richard-victor-3611a5303   ·   richardvictor.dev')

# ---------------- COLUNAS ----------------
LX, LW = 40, 330          # esquerda
RX, RW = 402, 153         # direita
yL = H - HEADER_H - 28
yR = H - HEADER_H - 28

# ===== ESQUERDA =====
yL = section(LX, yL, 'Resumo', LW)
yL = para(LX, yL,
    'Estudante de Análise e Desenvolvimento de Sistemas em transição de carreira para tecnologia, '
    'com foco em backend (Python, APIs REST) e inteligência artificial. No varejo, fui promovido a '
    'Líder de Setor — liderança de equipe, metas e atendimento que levo para a tecnologia em forma de '
    'disciplina, comunicação e resolução de problemas. Construo projetos reais de ponta a ponta: '
    'plataforma gamificada de ensino de programação com IA, portal colaborativo e sites para clientes.',
    size=9, maxw=LW)
yL -= 10

yL = section(LX, yL, 'Experiência', LW)

c.setFont('Helvetica-Bold', 10); c.setFillColor(INK)
c.drawString(LX, yL, 'Tauste Supermercados');
c.setFont('Helvetica', 9); c.setFillColor(MUTED)
c.drawString(LX + c.stringWidth('Tauste Supermercados', 'Helvetica-Bold', 10) + 6, yL, '— Sorocaba, SP')
yL -= 14
c.setFont('Helvetica-Bold', 9.2); c.setFillColor(ACCENT)
c.drawString(LX, yL, 'Líder de Setor')
c.setFont('Helvetica', 8.6); c.setFillColor(MUTED)
c.drawString(LX + c.stringWidth('Líder de Setor', 'Helvetica-Bold', 9.2) + 8, yL, 'dez/2024 – atual   ·   promovido internamente')
yL -= 13
yL = bullet(LX, yL, 'Gestão, treinamento e supervisão da equipe do setor', maxw=LW)
yL = bullet(LX, yL, 'Organização, precificação e apoio no controle de estoque', maxw=LW)
yL = bullet(LX, yL, 'Atendimento ao cliente e resolução de demandas operacionais', maxw=LW)
yL = bullet(LX, yL, 'Acompanhamento e alcance de metas do setor', maxw=LW)
yL -= 5
c.setFont('Helvetica-Bold', 9.2); c.setFillColor(INK)
c.drawString(LX, yL, 'Assistente de Vendas')
c.setFont('Helvetica', 8.6); c.setFillColor(MUTED)
c.drawString(LX + c.stringWidth('Assistente de Vendas', 'Helvetica-Bold', 9.2) + 8, yL, 'jun/2023 – nov/2024')
yL -= 13
yL = bullet(LX, yL, 'Atendimento ao cliente e apoio em campanhas promocionais', maxw=LW)
yL = bullet(LX, yL, 'Reposição, organização de loja e disponibilidade de produtos', maxw=LW)
yL -= 8

c.setFont('Helvetica-Bold', 10); c.setFillColor(INK)
c.drawString(LX, yL, 'Comércio Hélio Felipe Machado')
c.setFont('Helvetica', 9); c.setFillColor(MUTED)
c.drawString(LX + c.stringWidth('Comércio Hélio Felipe Machado', 'Helvetica-Bold', 10) + 6, yL, '— Capão Bonito, SP')
yL -= 14
c.setFont('Helvetica-Bold', 9.2); c.setFillColor(INK)
c.drawString(LX, yL, 'Serviços Gerais')
c.setFont('Helvetica', 8.6); c.setFillColor(MUTED)
c.drawString(LX + c.stringWidth('Serviços Gerais', 'Helvetica-Bold', 9.2) + 8, yL, 'jun/2022 – mai/2023')
yL -= 13
yL = bullet(LX, yL, 'Primeira experiência formal — rotina, responsabilidade e trabalho em equipe', maxw=LW)
yL -= 10

yL = section(LX, yL, 'Projetos', LW)

def proj(y, nome, meta, desc):
    c.setFont('Helvetica-Bold', 9.4); c.setFillColor(INK)
    c.drawString(LX, y, nome)
    c.setFont('Helvetica', 8.2); c.setFillColor(ACCENT)
    c.drawString(LX + c.stringWidth(nome, 'Helvetica-Bold', 9.4) + 8, y, meta)
    y -= 12
    y = para(LX, y, desc, size=8.6, color=MUTED, maxw=LW)
    return y - 4

yL = proj(yL, 'DevLingo', 'dev-lingo-gray.vercel.app',
          'Plataforma gamificada para aprender lógica de programação: Python real no navegador, '
          'tutor com IA, XP e conquistas. React 19 · Firebase · Python · Gemini AI.')
yL = proj(yL, 'QuebraDica Sorocaba', 'online',
          'Portal colaborativo de dicas da cidade para a comunidade de Sorocaba.')
yL = proj(yL, 'Jéssica Cílios', 'online · freelance',
          'Site profissional desenvolvido para cliente real.')
yL = proj(yL, 'Chatbot de Educação Financeira', 'em desenvolvimento',
          'Chatbot com IA para ensinar educação financeira de forma acessível.')

# ===== DIREITA =====
yR = section(RX, yR, 'Habilidades', RW)
for s in ['Python · APIs REST', 'FastAPI (em estudo)', 'SQL · Bancos de dados', 'Git · GitHub',
          'Lógica de programação', 'HTML · CSS · JavaScript']:
    c.setFont('Helvetica', 8.8); c.setFillColor(INK)
    c.drawString(RX, yR, s); yR -= 13
yR -= 10

yR = section(RX, yR, 'Formação', RW)
c.setFont('Helvetica-Bold', 9); c.setFillColor(INK)
yR = para(RX, yR, 'Tecnólogo em Análise e Desenvolvimento de Sistemas', font='Helvetica-Bold', size=9, maxw=RW)
yR = para(RX, yR, 'FACES — Sorocaba, SP', size=8.6, color=MUTED, maxw=RW)
yR = para(RX, yR, 'Em curso · conclusão 2027', size=8.4, color=ACCENT, maxw=RW)
yR -= 6
yR = para(RX, yR, 'Ensino Médio completo', font='Helvetica-Bold', size=9, maxw=RW)
yR = para(RX, yR, 'E.E. Dr. Raul Venturelli — Capão Bonito, SP · 2022', size=8.6, color=MUTED, maxw=RW)
yR -= 10

yR = section(RX, yR, 'Certificações', RW)
yR = para(RX, yR, 'Alura · 121 horas', font='Helvetica-Bold', size=8.8, color=INK, maxw=RW)
yR -= 2
for s in ['Iniciante em programação — 31h', 'Praticando Python — 31h', 'Python: Orientação a Objetos — 25h',
          'Python: persistência de dados, BDs e APIs REST — 14h', 'Redes e Protocolos: fundamentos da web — 20h']:
    yR = bullet(RX, yR, s, size=8.2, maxw=RW)
yR -= 10

yR = section(RX, yR, 'Competências', RW)
for s in ['Liderança e treinamento de equipe', 'Comunicação verbal e escrita', 'Foco em metas e resultados',
          'Resolução de problemas', 'Proatividade e iniciativa']:
    yR = bullet(RX, yR, s, size=8.4, maxw=RW)

# rodapé
c.setFont('Helvetica', 7); c.setFillColor(FAINT)
c.drawCentredString(W / 2, 24, 'Portfólio: richardvictor.dev   ·   Atualizado em junho/2026')

c.save()
print('OK ->', os.path.abspath(OUT))
