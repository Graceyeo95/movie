import { Outlet } from 'react-router-dom';

function App() {
  return (
    <main className='text-3xl text-white'>
      <Outlet />
    </main>
  );
}

export default App;
