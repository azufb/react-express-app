import { Routes, Route, Link, Outlet, BrowserRouter } from 'react-router-dom';
import Signup from './pages/Auth/Signup';
import Signin from './pages/Auth/Signin';
import TasksIndex from './pages/tasks/TasksIndex';
import GreetingIndex from './pages/greeting/GreetingIndex';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './apolloClient';

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

      <Outlet />
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ApolloProvider client={apolloClient}>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='/Signup' element={<Signup />} />
              <Route path='/Signin' element={<Signin />} />
              <Route path='/Tasks' element={<TasksIndex />} />
              <Route path='/Greeting' element={<GreetingIndex />} />
            </Route>
          </Routes>
        </ApolloProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
