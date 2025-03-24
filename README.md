# Portfolio Pessoal

Um portfólio web interativo com efeitos de paralaxe, transição dia-noite e apresentação profissional.

![Portfolio Screenshot](https://via.placeholder.com/800x400?text=Portfolio+Screenshot)

## Visão Geral

Este projeto é um portfólio pessoal desenvolvido com React, TypeScript e Vite. O design inclui:

- Efeito de paralaxe com montanhas e nuvens que se movem conforme o scroll
- Transição visual do dia para a noite
- Seções para Habilidades, Qualificações e Projetos
- Design responsivo e interativo

## Tecnologias Utilizadas

- React 19
- TypeScript
- Vite
- CSS puro para animações e layout
- Componentes reutilizáveis

## Estrutura do Projeto

```
portfolio/
├── src/
│   ├── assets/         # Imagens e SVGs
│   ├── components/     # Componentes React
│   │   ├── Habilidades.tsx
│   │   ├── Inicio.tsx
│   │   ├── Navbar.tsx
│   │   ├── Noite.tsx
│   │   ├── Paisagem.tsx
│   │   ├── Projetos.tsx
│   │   └── Qualificacoes.tsx
│   ├── index.css       # Estilos globais
│   └── main.tsx        # Ponto de entrada da aplicação
```

## Como Executar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/portfolio.git
   cd portfolio
   ```

2. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Abra [http://localhost:5173](http://localhost:5173) no navegador.

## Build para Produção

1. Gere a build:

   ```bash
   npm run build
   # ou
   yarn build
   ```

2. Visualize a build:
   ```bash
   npm run preview
   # ou
   yarn preview
   ```

## Personalização

- Edite os componentes em `src/components` para atualizar suas informações pessoais
- Modifique os estilos em `src/index.css`
- Substitua as imagens em `src/assets` conforme necessário
