import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Root from '@/pages/Root';
import Home from '@/pages/Home';
import Boards from '@/pages/Boards';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" Component={Root}>
      <Route path="/" Component={Home} />
      <Route path="/boards/:boardId" Component={Boards} />
    </Route>
  )
);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
