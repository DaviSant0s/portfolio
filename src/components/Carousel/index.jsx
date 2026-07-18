import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import CarouselCard from '../CarouselCard';
import CarouselChange from '../CarouselChange/index.jsx';
import { useMediaQuery } from 'react-responsive';
import CarouselChangeMobile from '../CarouselChangeMobile/index.jsx';
import ArrowSlide from '../ArrowSlide/index.jsx';
import CountCardsCarousel from '../CountCardsCarousel/index.jsx';
import { carouselFilters, carouselProjects } from '../../data/carouselProjects.js';

export default function Carousel() {
  const mobile_max_690px = useMediaQuery({query: '(max-width: 690px)'});
  const availableFilters = carouselFilters.filter(({ key }) => {
    return (carouselProjects[key] ?? []).length > 0;
  });
  const fallbackFilter = availableFilters[0]?.key ?? 'frontend';
  const [ toggleCarousel, setToggleCarousel ] = useState(fallbackFilter);
  const [ emblaRef, emblaApi ] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    slidesToScroll: 'auto',
    dragFree: false,
    loop: false,
  });
  const toggleData = carouselProjects[toggleCarousel] ?? [];
  const hasSelectedFilter = availableFilters.some(({ key }) => key === toggleCarousel);
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

  useEffect(() => {
    if (hasSelectedFilter) return;

    setToggleCarousel(fallbackFilter);
  }, [fallbackFilter, hasSelectedFilter, toggleCarousel]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.reInit();
    emblaApi.scrollTo(0, true);
    updateCarouselState(emblaApi);
  }, [emblaApi, toggleCarousel, toggleData.length, updateCarouselState]);

  const handleSelectFilter = (filterKey) => {
    setToggleCarousel(filterKey);
  };

  const handleClickScrollToLeft = () => {
    emblaApi?.scrollPrev();
  };
  
  const handleClickScrollToRight = () => {
    emblaApi?.scrollNext();
  };

  const views = totalSnaps ? selectedSnap + 1 : 1;
  const totalViews = totalSnaps || 1;

  
  return (
    <div className='relative w-full max-w-[950px]'>

      {mobile_max_690px && 
        <CarouselChangeMobile 
          filters={availableFilters}
          selectedFilter={toggleCarousel}
          onSelectFilter={handleSelectFilter}
        />
      }

      {!mobile_max_690px &&
        <CarouselChange 
          filters={availableFilters}
          selectedFilter={toggleCarousel}
          onSelectFilter={handleSelectFilter}
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
          <div ref={emblaRef} className='overflow-hidden rounded-[26px] shadow-[0_24px_40px_-28px_var(--color-shadow-lg)]'>
            <div className='-ml-[var(--slide-spacing)] flex [touch-action:pan-y_pinch-zoom]'>
              {toggleData.map((project) => (
                <div
                  key={`${toggleCarousel}-${project.name}`}
                  className='flex min-w-0 shrink-0 grow-0 basis-full justify-center pl-[var(--slide-spacing)] min-[691px]:block min-[691px]:basis-1/2 min-[1021px]:basis-1/3 min-[1340px]:basis-1/4'
                >
                  <CarouselCard
                    img={project.img}
                    stacks={project.stacks}
                    link={project.link}
                    github={project.github}
                    name={project.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {mobile_max_690px &&
        <CountCardsCarousel views={views} totalViews={totalViews}/>
      }
    </div>
  )
}
