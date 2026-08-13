import { defineConfig } from 'vite'
import mdx from '@mdx-js/rollup'
import rehypeShiki from '@shikijs/rehype'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

const codeLanguageLabels = {
  bash: 'Bash',
  css: 'CSS',
  html: 'HTML',
  javascript: 'JavaScript',
  js: 'JavaScript',
  json: 'JSON',
  jsx: 'JSX',
  python: 'Python',
  sql: 'SQL',
  ts: 'TypeScript',
  tsx: 'TSX',
  typescript: 'TypeScript',
};

const codeLanguageLabelTransformer = {
  name: 'article-code-language-label',
  pre(node) {
    const language = this.options.lang;
    node.properties['data-language'] = codeLanguageLabels[language] ?? language;
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      enforce: 'pre',
      ...mdx({
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
        rehypePlugins: [
          [
            rehypeShiki,
            {
              themes: {
                light: 'github-light',
                dark: 'github-dark',
              },
              transformers: [codeLanguageLabelTransformer],
            },
          ],
        ],
      }),
    },
    react({ include: /\.(js|jsx|md|mdx)$/ }),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) {
            return;
          }

          if (id.includes('@emailjs/browser')) {
            return 'contact-vendor';
          }

          if (
            id.includes('react-hook-form') ||
            id.includes('@hookform/resolvers') ||
            id.includes('zod') ||
            id.includes('react-toastify')
          ) {
            return 'form-vendor';
          }

          if (id.includes('embla-carousel-react')) {
            return 'carousel-vendor';
          }
        },
      },
    },
  },
})
