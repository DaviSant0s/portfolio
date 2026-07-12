# Portfólio | Davi Santos

Portfólio pessoal desenvolvido com React e Vite para apresentar projetos, certificações, habilidades, experiência e formas de contato.

## Stack

- React 18
- Vite
- CSS modularizado por componente
- EmailJS para o formulário de contato

## Rodando localmente

```bash
npm install
npm run dev
```

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com:

```env
VITE_SERVICE_ID=
VITE_TEMPLATE_ID=
VITE_PUBLIC_KEY=
```

Sem essas variáveis o formulário de contato continua aparecendo, mas o envio fica desativado.

## Melhorias recentes

- Configuração de lint com ESLint
- Ajustes de semântica e acessibilidade
- Links externos com atributos de segurança
- Correções em hooks e efeitos
- Metadados melhores para apresentação do projeto
