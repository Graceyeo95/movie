import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { DetailsPage, ExplorePage, Home, SearchPage } from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: ':explore',
        element: <ExplorePage />,
      },
      {
        path: ':explore/:id',
        element: <DetailsPage />,
      },
      {
        path: '/search',
        element: <SearchPage />,
      },
    ],
  },
]);

export default router;
