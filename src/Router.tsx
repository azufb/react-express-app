/** @jsxImportSource @emotion/react */

import { Routes, Route, Link, Outlet, BrowserRouter } from 'react-router-dom';
import TasksIndex from './pages/Tasks/TasksIndex';
import GreetingIndex from './pages/Greeting/GreetingIndex';
import HomeIndex from './pages/Home/HomeIndex';
import { navigationWrapper, navigation } from './styles/navigation';

const Layout = () => {
  return (
    <div>
      <div css={navigationWrapper}>
        <div css={navigation}>
          <span>
            <Link to='/'>Home</Link>
          </span>
        </div>
        <div css={navigation}>
          <span>
            <Link to='/Tasks'>タスク</Link>
          </span>
        </div>
        <div css={navigation}>
          <span>
            <Link to='/Greeting'>Greeting</Link>
          </span>
        </div>
      </div>

      <hr />

      <Outlet />
    </div>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomeIndex />} />
          <Route path='/Tasks' element={<TasksIndex />} />
          <Route path='/Greeting' element={<GreetingIndex />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
