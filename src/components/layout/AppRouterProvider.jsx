import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dices from '../Games/Dices';
import Ranking from '../Rankings/Ranking'
import RouterError from '../layout/RouterError'
import RankingWinners from '../Rankings/RankingWinners'
import RankingLosers from '../Rankings/RankingLosers'
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
  {
    path: '/rankingWinners',
    errorElement: <RouterError/>,
    element: <RankingWinners />,
  },
  {
    path: '/rankingLosers',
    errorElement: <RouterError/>,
    element: <RankingLosers />,
  },
]);

export default function AppRouterProvider() {
  return <RouterProvider router={router} />;
}

