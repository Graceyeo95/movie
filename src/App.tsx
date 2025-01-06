import { Outlet } from 'react-router-dom';
import { Header, Footer } from './components';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setBannerData, setImageURL } from './store/movieSlice';

function App() {
  const dispatch = useDispatch();

  const fetchTrendingData = async () => {
    try {
      const response = await axios.get('/trending/all/week');
      console.log('response', response.data.results);
      dispatch(setBannerData(response.data.results));
    } catch (error) {
      console.log('error', error);
    }
  };

  const fetchConfiguration = async () => {
    try {
      const response = await axios.get('/configuration');
      console.log(response.data.images.secure_base_url + 'original');
      dispatch(setImageURL(response.data.images.secure_base_url + 'original'));
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    fetchTrendingData();
    fetchConfiguration();
  }, []);

  return (
    <main className='pb-14 lg:pb-0'>
      <Header />
      <div className='min-h-[90vh]'>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}

export default App;
