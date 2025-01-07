type imageProps = {
  src: string;
  alt: string;
};

type CarouselCardProps = {
  title: string;
  image: imageProps;
  overview: string;
  rating: number;
  view: number;
};

export const CarouselCard = (props: CarouselCardProps) => {
  return (
    <div className='flex relative flex-shrink-0 w-full'>
      <div className='from-black absolute left-0 top-0 w-full h-full z-50 bg-gradient-to-t' />
      <div className='w-full h-[60vh] md:h-[80vh] lg:h-screen overflow-hidden'>
        <img
          src={props.image.src}
          alt={props.image.alt}
          className='h-full w-full object-cover'
        />
      </div>
      <div className='absolute lg:max-w-[80%] xl:max-w-[60%] px-[20px] md:px-[60px] z-50 left-0 top-[50%] md:top-[60%] -translate-y-1/2 flex flex-col gap-y-[0.5rem] lg:gap-y-[0.75rem] '>
        <h2 className='text-[40px] md:text-[50px] xl:text-[80px]'>
          {props.title}
        </h2>
        <div className='text-[20px] lg:text-[30px]'>
          <p className='text-ellipsis line-clamp-3'>{props.overview}</p>
          <p>Rating: {props.rating}</p>
          <p>Popularity: {props.view}</p>
        </div>
      </div>
    </div>
  );
};
