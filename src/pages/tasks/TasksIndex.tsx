import Layout from '../../components/Layout';
import PageTitle from '../../components/PageTitle';
import InputForm from './components/InputForm';
import TaskList from './components/TaskList';

const TasksIndex = () => {
  return (
    <Layout>
      <PageTitle pageTitle='タスク管理' />
      <InputForm />
      <TaskList />
    </Layout>
  );
};

export default TasksIndex;
