import { createSlice } from '@reduxjs/toolkit';

type MovieProps = {
  backdrop_path: string;
  title?: string;
  original_name?: string;
  overview: string;
  vote_average: number;
  popularity: number;
};

export type MovieState = {
  bannerData: MovieProps[];
  imageURL: string;
};

const initialState: MovieState = {
  bannerData: [],
  imageURL: '',
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setBannerData: (state, action) => {
      state.bannerData = action.payload;
    },
    setImageURL: (state, action) => {
      state.imageURL = action.payload;
    },
  },
});

export const { setBannerData, setImageURL } = movieSlice.actions;
export default movieSlice.reducer;
