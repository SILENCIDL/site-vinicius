# Plano de Implementação — Depoimentos + Preços na Home

## O que será criado

### 1. Seção de Preços na Página Inicial (`#valores`)
Adicionar os cards de preço diretamente no scroll da home, entre "Experiência" e "Contato".
O usuário não precisa mais clicar em "Valores" no nav para ver os preços — eles aparecem
naturalmente enquanto rola a página.

- Mantém o `prices-view` separado (acesso via nav continua funcionando)
- Versão inline na home terá o mesmo conteúdo dos 3 cards (Retrato, Pre Wedding, Casamento)
- Nav "Valores" passa a rolar até a seção `#valores` da home em vez de abrir view separada

---

### 2. Seção Preview de Depoimentos na Página Inicial (`#depoimentos`)
Uma vitrine com 3 depoimentos destacados, visível no scroll da home,
logo antes do formulário de contato (depois de Valores).

- Exibe 3 cards compactos com citação, nome e tipo de serviço
- Botão "Ver todos os depoimentos" abre a view completa

---

### 3. Página Completa de Depoimentos (`testimonials-view`)
Nova view (já referenciada no `main.js`) com 6 depoimentos de exemplo,
focados em casamentos e retratos. Todo o conteúdo é editável.

**Depoimentos de Casamento (3):**
| Nome | Serviço | Destaque |
|---|---|---|
| Ana & Rafael Moreira | Casamento na Serra | Álbum que virou memória viva |
| Bianca & Donizete Fernandes | Casamento em São Bento | Já existem fotos reais no portfólio |
| Pamela & Juliano Costa | Pre Wedding na Pedra do Baú | Trilha + romance + fotografia |

**Depoimentos de Retratos / Ensaio (3):**
| Nome | Serviço | Destaque |
|---|---|---|
| Mariana Oliveira | Retrato Individual | Nunca se sentiu bem na frente de câmera |
| Camila & Fernando Souza | Ensaio de Casal | Luz natural da Serra |
| Luciana Prado | Retrato | Olhar artístico raro |

---

### 4. Atualização do Menu de Navegação
- Desktop e Mobile: adicionar link **"Depoimentos"** (abre `testimonials-view`)
- "Valores" no nav passa a rolar até `#valores` da home

---

## Arquivos que serão modificados

| Arquivo | O que muda |
|---|---|
| `index.html` | +seção `#valores` na home, +seção `#depoimentos` na home, +`testimonials-view` div, +links no nav |
| `assets/js/main.js` | Nav "Valores" → `scrollToSection('valores')` em vez de `openPrices()` |

---

## Layout Visual

```
Home (scroll)
├── Hero
├── Sobre
├── Portfólio
├── Experiência
├── [NOVO] Valores ← preços inline
├── [NOVO] Depoimentos Preview ← 3 cards + botão "Ver todos"
└── Contato

Nav
├── Sobre
├── Portfólio
├── Experiência
├── [NOVO] Depoimentos → abre testimonials-view
├── Valores → scroll para #valores na home
└── Contato

testimonials-view (página separada)
├── Header com voltar
├── Filtro: Todos | Casamentos | Retratos
└── Grid com 6 depoimentos de exemplo
```
