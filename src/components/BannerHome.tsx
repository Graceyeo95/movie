import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';

export const BannerHome = () => {
  const bannerData = useSelector((state: RootState) => state.movie.bannerData);
  const imageURL = useSelector((state: RootState) => state.movie.imageURL);

  return (
    <div>
      <div>
        {bannerData.map((item) => {
          return (
            <div>
              <img
                src={imageURL + item.backdrop_path}
                alt={item.backdrop_path}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
