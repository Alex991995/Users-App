import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from '../pages/Layout';
import HomePage from '../pages/HomePage';
import CreatePage from '../pages/CreatePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/create',
        element: <CreatePage />,
      },
      {
        path: '*',
        element: <Navigate to="/notfound" />,
      },
    ],
  },
]);

export default router;
