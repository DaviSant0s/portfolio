import { Link, useParams } from 'react-router-dom';
import SEO from '../../components/SEO';
import { formatArticleDate, getArticleBySlug } from '../../content/articles';
import { mdxComponents } from '../../content/articles/mdxComponents';
import {
  createArticleNotFoundSeoMetadata,
  createArticleSeoMetadata,
} from '../../seo/metadata';

const articleNotFoundSeoMetadata = createArticleNotFoundSeoMetadata();

function ArticleNotFound() {
  return (
    <>
      <SEO metadata={articleNotFoundSeoMetadata}/>
      <main className='flex min-h-[var(--heightBody)] items-center bg-app px-4 pt-[var(--heightHeaderScroll)]'>
        <div className='mx-auto flex max-w-xl flex-col items-center py-16 text-center'>
          <span className='text-sm font-semibold uppercase tracking-[0.16em] text-primary'>Erro 404</span>
          <h1 className='mt-3 text-3xl font-semibold tracking-[-0.04em] text-copy-strong'>Artigo não encontrado</h1>
          <p className='mt-3 leading-relaxed text-copy-muted'>O artigo solicitado não existe ou teve seu endereço alterado.</p>
          <Link
            to='/artigos'
            className='mt-6 inline-flex h-11 items-center justify-center rounded-full bg-[#15181d] px-5 font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 dark:bg-white dark:text-[#12161d]'
          >
            Ver todos os artigos
          </Link>
        </div>
      </main>
    </>
  );
}

export default function Article() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) {
    return <ArticleNotFound/>;
  }

  const { Content } = article;
  const seoMetadata = createArticleSeoMetadata(article);

  return (
    <>
      <SEO metadata={seoMetadata}/>
      <main className='min-h-[var(--heightBody)] bg-app pt-[var(--heightHeaderScroll)]'>
        <article className='content-shell py-10 min-[790px]:py-16'>
          <div className='mx-auto max-w-[48rem]'>
            <Link
              to='/artigos'
              className='inline-flex items-center gap-1.5 text-sm font-semibold text-copy-muted transition-colors duration-200 hover:text-primary focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-primary-soft'
            >
              <span className='material-symbols-outlined text-[1rem]' aria-hidden='true'>arrow_back</span>
              Todos os artigos
            </Link>

            <header className='mt-8 border-b border-outline pb-8 min-[790px]:pb-10'>
              <div className='flex flex-wrap items-center gap-2 text-sm text-copy-muted'>
                <time dateTime={article.date}>{formatArticleDate(article.date)}</time>
                <span aria-hidden='true'>•</span>
                <span>{article.tags.join(' · ')}</span>
              </div>

              <h1 className='mt-4 text-balance text-[clamp(2.15rem,7vw,4rem)] font-semibold leading-[1.02] tracking-[-0.055em] text-copy-strong'>
                {article.title}
              </h1>
              <p className='mt-5 max-w-[43rem] text-[1rem] leading-relaxed text-copy-muted min-[790px]:text-[1.12rem]'>
                {article.description}
              </p>
            </header>

            <div className='article-content pt-8 min-[790px]:pt-10'>
              <Content components={mdxComponents}/>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
