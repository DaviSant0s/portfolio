import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import Button from '../../components/Button';
import CardCertification from '../../components/CardCertification';
import FilterCertificationsBtn from '../../components/FilterCertificationsBtn';
import ScrollReveal from '../../components/ScrollReveal';
import SectionBackdrop from '../../components/SectionBackdrop';
import SectionIntro from '../../components/SectionIntro';
import { useCertification } from '../../context/CertificationsContext';
import useTrackActiveSection from '../../hooks/header/useTrackActiveSection';

export default function Certifications() {
  const { certificationFilters, filterCards, filteredData, setFilterCards } = useCertification();
  const { ref } = useTrackActiveSection('certifications');
  const [moreCardsBool, setMoreCardsBool] = useState(false);

  const certificationsCount = filteredData.length;
  const hasOverflowCards = certificationsCount > 6;
  const visibleCertifications = moreCardsBool ? filteredData : filteredData.slice(0, 6);
  const gridColumnsClassName = certificationsCount === 1
    ? 'grid-cols-1'
    : certificationsCount === 2
      ? 'grid-cols-1 min-[790px]:grid-cols-2'
      : 'grid-cols-1 min-[790px]:grid-cols-2 min-[1190px]:grid-cols-3';
  const gridWidthClassName = certificationsCount === 1
    ? 'max-w-[350px]'
    : certificationsCount === 2
      ? 'max-w-[720px]'
      : 'max-w-[1090px]';
  const gridClassName = [
    'grid w-full gap-5',
    gridColumnsClassName,
    gridWidthClassName,
  ].join(' ');

  const handleClickBtnMoreCardsBool = () => {
    setMoreCardsBool(true);
  };

  const handleClickBtnLessCardsBool = () => {
    setTimeout(() => {
      setMoreCardsBool(false);
    }, 100);
  };

  useEffect(() => {
    setMoreCardsBool(false);
  }, [filterCards]);

  return (
    <section
      ref={ref}
      id='id_certifications'
      className='page-section relative flex scroll-mt-[calc(var(--heightHeaderScroll)+var(--noticeHeight)+18px)] justify-center overflow-hidden bg-app-alt'
    >
      <SectionBackdrop
        glowClassName='top-8 h-[22rem] bg-[radial-gradient(circle_at_center,rgba(251,84,78,0.12),transparent_68%)]'
        dotsClassName='opacity-30'
      />

      <div className='content-shell relative z-[1] flex flex-col items-center gap-8 py-4 min-[790px]:gap-10 min-[790px]:py-6'>
        <SectionIntro
          eyebrow='Aprendizado contínuo'
          title='Certificações que sustentam minha evolução'
          titleId='id_title_certifications'
          description='Cursos, trilhas e estudos que reforçam minha base em frontend, backend, banco de dados e fundamentos que acompanham minha prática.'
          titleClassName='max-w-[13ch] min-[790px]:max-w-[12ch]'
        />

        <ScrollReveal
          amount={0.28}
          delay={0.08}
          className='flex w-full max-w-[920px] flex-wrap items-center justify-center gap-2 px-2 min-[500px]:gap-2.5 min-[500px]:px-2.5'
        >
          {certificationFilters.map((filter) => (
            <FilterCertificationsBtn
              key={filter.key}
              name={filter.label}
              type={filter.key}
              handleClick={setFilterCards}
            />
          ))}
        </ScrollReveal>

        {certificationsCount > 0 && (
          <div className='relative flex w-full justify-center'>
            <div className={gridClassName}>
              {visibleCertifications.map((data, index) => (
                <ScrollReveal
                  key={data.id}
                  className='h-full'
                  amount={0.18}
                  delay={Math.min(index, 5) * 0.05}
                >
                  <CardCertification
                    icon={data.icon}
                    img={data.img}
                    name={data.name}
                    description={data.description}
                    institution={data.institution}
                    conclusion={data.conclusion}
                    duration={data.duration}
                    link_institution={data.link_institution}
                    mediaClassName={data.mediaClassName}
                    status={data.status}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

        {certificationsCount === 0 && (
          <ScrollReveal className='flex min-h-[220px] w-full max-w-[720px] items-center justify-center rounded-[28px] border border-outline/70 bg-panel/80 px-5 py-5 text-center text-[0.95rem] leading-[1.6] text-copy-muted shadow-[0_18px_36px_-28px_var(--color-shadow-md)] backdrop-blur-sm min-[500px]:px-6 min-[500px]:py-6'>
            Nenhuma certificação encontrada nesta categoria ainda.
          </ScrollReveal>
        )}

        {hasOverflowCards && (
          <ScrollReveal className='flex w-full justify-center pt-1' amount={0.3}>
            {!moreCardsBool && (
              <Button
                handleClick={handleClickBtnMoreCardsBool}
                name='Ver mais'
                icon='expand_more'
                iconClassName='mb-[-2px] text-[1.5em] font-normal'
                className='border-outline-strong px-[30px] pr-10 hover:border-copy-muted'
              />
            )}

            {moreCardsBool && (
              <Link
                to='id_certifications'
                smooth={true}
                offset={-79}
                duration={300}
                className='inline-flex transition-transform duration-200 ease-out hover:scale-[1.03]'
              >
                <Button
                  as='span'
                  handleClick={handleClickBtnLessCardsBool}
                  name='Ver menos'
                  icon='expand_less'
                  className='border-outline-strong px-[30px] pr-10 hover:border-copy-muted'
                  iconClassName='mb-[-2px] text-[1.5em] font-normal'
                />
              </Link>
            )}
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
