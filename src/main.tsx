import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.css';
import App from './App.tsx';
import ExperiencePage from './pages/ProjectPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/experience',
    element: <ExperiencePage />,
  },
  // {
  //   path: '/admin',
  //   element: < />,
  // },
  // {
  //   path: '/login',
  //   element: < />,
  // },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
