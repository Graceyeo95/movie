import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import useEmblaCarousel from 'embla-carousel-react';
import { CarouselCard } from './base/CarouselCard';

export const BannerCarousel = () => {
  const bannerData = useSelector((state: RootState) => state.movie.bannerData);
  const imageURL = useSelector((state: RootState) => state.movie.imageURL);

  const [emblaRef] = useEmblaCarousel({
    loop: true,
    dragFree: false,
    align: 'center',
  });

  return (
    <section className='flex pt-[50px]'>
      <div ref={emblaRef} className='w-full overflow-x-hidden'>
        <div className='flex w-full relative'>
          {bannerData.map((item, index) => {
            return (
              <CarouselCard
                key={index}
                title={item?.original_name || item?.title || ''}
                rating={Number(item.vote_average.toFixed(1))}
                view={Number(item.popularity.toFixed(0))}
                image={{
                  src: imageURL + item.backdrop_path,
                  alt: item?.original_name || item?.title || '',
                }}
                overview={item.overview}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
