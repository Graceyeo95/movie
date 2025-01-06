import { Outlet } from 'react-router-dom';
import { Header, Footer } from './components';
import { useEffect } from 'react';
import { fetchTrendingData } from './utils/api';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTrendingData();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className='text-3xl text-white'>
      <Header />
      <div className='pt-32'>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}

export default App;
