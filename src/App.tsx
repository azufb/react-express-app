import { gql, useQuery } from '@apollo/client';
import TasksIndex from './pages/tasks/TasksIndex';

const GET_HELLO = gql`
  query getHello {
    hello
  }
`;

const App = () => {
  const { loading, error, data } = useQuery(GET_HELLO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <header>
        <p>{data.hello}</p>
      </header>
      <TasksIndex />
    </div>
  );
};

export default App;
