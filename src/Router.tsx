import { Routes, Route, Link, Outlet, BrowserRouter } from 'react-router-dom';
import TasksIndex from './pages/Tasks/TasksIndex';
import GreetingIndex from './pages/Greeting/GreetingIndex';
import HomeIndex from './pages/Home/HomeIndex';

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
