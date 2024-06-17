import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dices from '../Games/Dice';
import Ranking from '../Rankings/Ranking'
import RouterError from '../layout/RouterError'
const router = createBrowserRouter([

  {

    path: '/',
    errorElement: <RouterError/>,
    element: <Dices />,

  },

  {

    path: '/ranking',
    errorElement: <RouterError/>,
    element: <Ranking />,

  },

]);


export default function AppRouterProvider() {

  return <RouterProvider router={router} />;

}

