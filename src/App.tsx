import { Outlet } from 'react-router-dom';
import { Header, Footer } from './components';

function App() {
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
