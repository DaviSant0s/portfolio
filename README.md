# Portfólio | Davi Santos

Portfólio pessoal desenvolvido com React, Vite e Tailwind CSS v4 para apresentar minha trajetória como desenvolvedor fullstack, minhas habilidades, projetos, experiências, certificações e formas de contato em uma interface moderna, responsiva e alinhada ao currículo atualizado.

## Visão geral

O projeto foi construído como uma landing page de portfólio em seção única, com navegação por scroll, dark/light mode, animações de entrada, fundo interativo na Home e blocos de conteúdo organizados para leitura rápida.

Seções atuais:

- Home
- Sobre
- Habilidades
- Projetos
- Experiências
- Certificações
- Contato

## Principais recursos

- Tema claro/escuro com persistência de preferência
- Navegação com destaque automático da seção ativa
- Fundo animado em Canvas na Home
- Animações de entrada baseadas em scroll
- Carrossel de projetos com `Embla` e filtros por projetos aplicados, acadêmicos, frontend e backend
- Projeto em destaque com preview real da aplicação
- Timeline visual de experiências
- Filtros para certificações
- Formulário com `react-hook-form` + `zod`
- Envio de mensagem com `EmailJS`
- Fallback para aplicativo de e-mail quando o `EmailJS` não estiver configurado
- Calendário de atividade do GitHub
- Layout responsivo para desktop, tablet e mobile

## Stack

### Frontend

- React 18
- Vite
- Tailwind CSS v4
- Motion

### UI e experiência

- `react-scroll`
- `react-intersection-observer`
- `@radix-ui/react-dialog`
- `embla-carousel-react`
- `react-toastify`

### Formulário e validação

- `react-hook-form`
- `zod`
- `@hookform/resolvers`
- `@emailjs/browser`

## Estrutura do projeto

```text
src/
  assets/        imagens, logos e arquivos visuais
  components/    componentes reutilizáveis da interface
  config/        leitura de variáveis de ambiente
  context/       providers e estados globais
  data/          dados de projetos, experiências e certificados
  hooks/         hooks utilitários e de comportamento
  pages/         seções principais do portfólio
  schemas/       schemas de validação
```

## Como rodar localmente

### 1. Instale as dependências

```bash
npm install
```

### 2. Configure as variáveis de ambiente

Copie o arquivo `.env.exemple` para `.env`:

```bash
cp .env.exemple .env
```

Preencha:

```env
VITE_SERVICE_ID=
VITE_TEMPLATE_ID=
VITE_PUBLIC_KEY=
```

Se essas variáveis ficarem vazias, o formulário de contato continua funcionando com fallback para o aplicativo de e-mail do usuário.

### 3. Inicie o projeto

```bash
npm run dev
```

Por padrão, o Vite exibirá uma URL local como `http://localhost:5173`.

## Scripts disponíveis

```bash
npm run dev
```

Inicia o ambiente de desenvolvimento.

```bash
npm run build
```

Gera a versão de produção em `dist/`.

```bash
npm run preview
```

Abre localmente a build de produção.

```bash
npm run lint
```

Executa o ESLint no projeto.

## Organização visual e técnica

Algumas decisões importantes da implementação:

- separação por seções em `src/pages`
- componentes de UI isolados em `src/components`
- dados desacoplados da interface em `src/data`
- configuração do formulário centralizada em `src/config`
- animações reutilizáveis via `ScrollReveal`
- otimização de build com `manualChunks` no Vite para calendário do GitHub, formulário e carrossel

## Contato e conteúdo

O projeto reúne conteúdo real do meu currículo, GitHub e LinkedIn, incluindo:

- residência tecnológica na BRISA/FURG com a Unimed Litoral Sul
- voluntariado em ClarIA Task no LEP/FURG
- pesquisa e formação na FURG e no iTec/FURG
- projetos pessoais, estudos de frontend/backend e pesquisa acadêmica
- certificações e links diretos para contato

Também existe um currículo em PDF disponível na raiz do projeto:

`curriculo_vitae_Davi_Santos.pdf`

## Objetivo do projeto

Este portfólio foi pensado para funcionar como vitrine profissional e também como espaço de experimentação de interface, animação, responsividade e organização de conteúdo técnico.

## Autor

Davi Santos

- LinkedIn: `https://www.linkedin.com/in/davisantoss/`
- GitHub: `https://github.com/DaviSant0s`
- Site: `https://davisantoss.vercel.app/`
