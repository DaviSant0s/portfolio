import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import SectionIntro from '../../components/SectionIntro';
import { articles, formatArticleDate } from '../../content/articles';
import { createArticlesSeoMetadata } from '../../seo/metadata';

const articlesSeoMetadata = createArticlesSeoMetadata();

export default function Articles() {
  return (
    <>
      <SEO metadata={articlesSeoMetadata}/>
      <main className='min-h-[var(--heightBody)] bg-app pt-[var(--heightHeaderScroll)]'>
        <section className='relative overflow-hidden py-12 min-[790px]:py-20'>
          <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,var(--color-accent-surface),transparent_32%)] opacity-70'/>

          <div className='content-shell relative z-[1] flex flex-col items-center'>
            <SectionIntro
              eyebrow='Conteúdo técnico'
              title='Artigos'
              description='Anotações, aprendizados e experiências sobre desenvolvimento de software.'
            />

            <div className='mt-10 grid w-full max-w-[58rem] gap-5 min-[790px]:mt-14'>
              {articles.map((article) => (
                <article
                  key={article.slug}
                  className='rounded-[24px] border border-outline bg-panel p-5 shadow-[0_18px_38px_-30px_var(--color-shadow-lg)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-primary-soft min-[500px]:p-7'
                >
                  <div className='flex flex-wrap items-center gap-2 text-[0.82rem] text-copy-muted'>
                    <time dateTime={article.date}>{formatArticleDate(article.date)}</time>
                    <span aria-hidden='true'>•</span>
                    <span>{article.tags.join(' · ')}</span>
                  </div>

                  <h2 className='mt-3 text-[clamp(1.35rem,4vw,1.85rem)] font-semibold leading-tight tracking-[-0.035em] text-copy-strong'>
                    <Link
                      to={`/artigos/${article.slug}`}
                      className='transition-colors duration-200 hover:text-primary focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-primary-soft'
                    >
                      {article.title}
                    </Link>
                  </h2>

                  <p className='mt-3 max-w-[48rem] text-[0.95rem] leading-relaxed text-copy-muted min-[500px]:text-base'>
                    {article.description}
                  </p>

                  <Link
                    to={`/artigos/${article.slug}`}
                    className='mt-5 inline-flex items-center gap-1.5 text-[0.92rem] font-semibold text-primary transition-colors duration-200 hover:text-primary-strong focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-primary-soft'
                  >
                    Ler artigo
                    <span className='material-symbols-outlined text-[1rem]' aria-hidden='true'>arrow_forward</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
