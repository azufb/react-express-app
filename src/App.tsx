import { gql, useQuery } from '@apollo/client';
import TasksIndex from './pages/tasks/TasksIndex';

const GET_GREETING = gql`
  query getGreeting {
    hello
    goodbye
  }
`;

const App = () => {
  const { loading, error, data } = useQuery(GET_GREETING);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <header>
        <p>{data.hello}</p>
        <p>{data.goodbye}</p>
      </header>
      <TasksIndex />
    </div>
  );
};

export default App;
