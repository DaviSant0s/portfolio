import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import CarouselCard from '../CarouselCard';
import CarouselChange from '../CarouselChange/index.jsx';
import './styles.css';
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
    <div className='carousel-conteiner'>

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

      <div className='carousel-content'>

        {mobile_max_690px &&
          <>
            <div className='left_arrow_change'>
              <ArrowSlide
                direction='left'
                func_handle={handleClickScrollToLeft}
                disabled={!canScrollPrev}
              />
            </div>

            <div className='right_arrow_change'>
              <ArrowSlide
                direction='right'
                func_handle={handleClickScrollToRight}
                disabled={!canScrollNext}
              />
            </div>
          </>
        }

        <div className='embla'>
          <div ref={emblaRef} className='embla__viewport'>
            <div className='embla__container'>
              {toggleData.map((project) => (
                <div key={`${toggleCarousel}-${project.name}`} className='embla__slide'>
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
