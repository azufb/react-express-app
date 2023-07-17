import {
  Routes,
  Route,
  Link,
  Outlet,
  BrowserRouter,
  Navigate,
} from 'react-router-dom';
import Signup from './pages/Auth/Signup';
import Signin from './pages/Auth/Signin';
import TasksIndex from './pages/tasks/TasksIndex';
import GreetingIndex from './pages/greeting/GreetingIndex';
import HomeIndex from './pages/Home/HomeIndex';
import { useRecoilValue } from 'recoil';
import { isSignedinAtom } from './recoil/atom';

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/Tasks'>タスク</Link>
          </li>
          <li>
            <Link to='/Greeting'>Greeting</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
};

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const isSignedin = useRecoilValue<boolean>(isSignedinAtom);
  if (isSignedin) {
    return children;
  } else {
    return <Navigate to='/' replace />;
  }
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomeIndex />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Signin' element={<Signin />} />
          <Route
            path='/Tasks'
            element={
              <RequireAuth>
                <TasksIndex />
              </RequireAuth>
            }
          />
          <Route
            path='/Greeting'
            element={
              <RequireAuth>
                <GreetingIndex />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
