import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import Button from '../../components/Button';
import CardCertification from '../../components/CardCertification';
import FilterCertificationsBtn from '../../components/FilterCertificationsBtn';
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
      className='page-section relative flex scroll-mt-[calc(var(--heightHeaderScroll)+var(--noticeHeight)+18px)] justify-center bg-app-alt'
    >
      <div className='content-shell relative flex flex-col items-center gap-8 py-4 min-[790px]:py-6'>
        <div className='flex max-w-[780px] flex-col items-center gap-4 text-center'>
          <h1
            id='id_title_certifications'
            className='w-fit text-section-title font-medium tracking-[-0.03em] text-copy-strong'
          >
            Certificações
          </h1>
          <p className='text-balance text-[0.98rem] leading-relaxed text-copy-muted min-[790px]:text-[1.05rem]'>
            Cursos, trilhas e capacitações que reforçam minha base técnica e mostram continuidade no aprendizado.
          </p>
        </div>

        <div className='flex w-full max-w-[860px] flex-wrap items-center justify-center gap-2.5 px-2.5'>
          {certificationFilters.map((filter) => (
            <FilterCertificationsBtn
              key={filter.key}
              name={filter.label}
              type={filter.key}
              handleClick={setFilterCards}
            />
          ))}
        </div>

        {certificationsCount > 0 && (
          <div className='relative flex w-full justify-center'>
            <div className={gridClassName}>
              {visibleCertifications.map((data) => (
                <CardCertification
                  key={data.id}
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
              ))}
            </div>
          </div>
        )}

        {certificationsCount === 0 && (
          <div className='flex min-h-[220px] w-full max-w-[720px] items-center justify-center rounded-[18px] border border-outline bg-panel px-6 py-6 text-center text-copy-muted shadow-[0_8px_18px_var(--color-shadow-soft)]'>
            Nenhuma certificação encontrada nesta categoria ainda.
          </div>
        )}

        {hasOverflowCards && (
          <div className='flex w-full justify-center pt-1'>
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
          </div>
        )}
      </div>
    </section>
  );
}
