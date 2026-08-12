import { useCallback, useEffect, useMemo, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import CarouselCard from '../CarouselCard';
import CarouselChange from '../CarouselChange/index.jsx';
import { useMediaQuery } from 'react-responsive';
import ArrowSlide from '../ArrowSlide/index.jsx';
import CountCardsCarousel from '../CountCardsCarousel/index.jsx';
import ScrollReveal from '../ScrollReveal';
import { carouselProjects } from '../../data/carouselProjects.js';
import ProjectDetailsModal from '../ProjectDetailsModal';

export default function Carousel() {
  const mobile_max_690px = useMediaQuery({query: '(max-width: 690px)'});
  const [ selectedProjectId, setSelectedProjectId ] = useState(null);
  const [ emblaRef, emblaApi ] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    slidesToScroll: 'auto',
    dragFree: false,
    loop: false,
  });
  const [ selectedSnap, setSelectedSnap ] = useState(0);
  const [ totalSnaps, setTotalSnaps ] = useState(1);
  const [ canScrollPrev, setCanScrollPrev ] = useState(false);
  const [ canScrollNext, setCanScrollNext ] = useState(false);

  const updateCarouselState = useCallback((api) => {
    setSelectedSnap(api.selectedScrollSnap());
    setTotalSnaps(api.scrollSnapList().length || 1);
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    updateCarouselState(emblaApi);

    const onSelect = () => updateCarouselState(emblaApi);

    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, updateCarouselState]);

  const handleClickScrollToLeft = () => {
    emblaApi?.scrollPrev();
  };
  
  const handleClickScrollToRight = () => {
    emblaApi?.scrollNext();
  };

  const views = totalSnaps ? selectedSnap + 1 : 1;
  const totalViews = totalSnaps || 1;
  const selectedProject = useMemo(
    () => carouselProjects.find((project) => project.id === selectedProjectId) || null,
    [selectedProjectId]
  );

  
  return (
    <div className='relative w-full max-w-[1020px] rounded-[32px] border border-outline/60 bg-panel/60 p-4 shadow-[0_18px_38px_-30px_var(--color-shadow-md)] backdrop-blur-sm min-[500px]:p-5 min-[790px]:p-6'>
      {!mobile_max_690px &&
        <CarouselChange 
          views={views} 
          totalViews={totalViews} 
          handleClickScrollToLeft={handleClickScrollToLeft}
          handleClickScrollToRight={handleClickScrollToRight}
          canScrollPrev={canScrollPrev}
          canScrollNext={canScrollNext}
        />
      }

      <div className='relative w-full px-5 min-[480px]:px-6 min-[691px]:px-0'>

        {mobile_max_690px &&
          <>
            <div className='absolute top-1/2 left-7 z-[9] -translate-y-1/2 min-[480px]:left-8'>
              <ArrowSlide
                direction='left'
                func_handle={handleClickScrollToLeft}
                disabled={!canScrollPrev}
              />
            </div>

            <div className='absolute top-1/2 right-7 z-[9] -translate-y-1/2 min-[480px]:right-8'>
              <ArrowSlide
                direction='right'
                func_handle={handleClickScrollToRight}
                disabled={!canScrollNext}
              />
            </div>
          </>
        }

        <div className='[--slide-spacing:10px] min-[500px]:[--slide-spacing:12px]'>
          <div ref={emblaRef} className='overflow-hidden rounded-[28px]'>
            <div className='-ml-[var(--slide-spacing)] flex py-1 pr-[var(--slide-spacing)] [touch-action:pan-y_pinch-zoom]'>
              {carouselProjects.map((project) => (
                <div
                  key={project.name}
                  className='flex min-w-0 shrink-0 grow-0 basis-full items-stretch pl-[var(--slide-spacing)] min-[691px]:basis-1/2 min-[1021px]:basis-1/4'
                >
                  <ScrollReveal
                    className='flex h-full w-full'
                    amount={0.18}
                    delay={0.04}
                  >
                    <CarouselCard
                      img={project.img}
                      imageClassName={project.imageClassName}
                      badge={project.badge}
                      stacks={project.stacks}
                      name={project.name}
                      summary={project.summary}
                      onViewDetails={() => setSelectedProjectId(project.id)}
                    />
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {mobile_max_690px &&
        <CountCardsCarousel views={views} totalViews={totalViews}/>
      }

      <ProjectDetailsModal
        isOpen={Boolean(selectedProject)}
        setIsOpen={(open) => {
          if (!open) setSelectedProjectId(null);
        }}
        project={selectedProject}
      />
    </div>
  )
}
