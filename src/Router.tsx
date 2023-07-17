import { Routes, Route, Link, Outlet, BrowserRouter } from 'react-router-dom';
import Signup from './pages/Auth/Signup';
import Signin from './pages/Auth/Signin';
import TasksIndex from './pages/tasks/TasksIndex';
import GreetingIndex from './pages/greeting/GreetingIndex';

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/Signup'>サインアップ</Link>
          </li>
          <li>
            <Link to='/Signin'>サインイン</Link>
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
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Signin' element={<Signin />} />
          <Route path='/Tasks' element={<TasksIndex />} />
          <Route path='/Greeting' element={<GreetingIndex />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
