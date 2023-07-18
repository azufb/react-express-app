import PageTitle from '../../components/PageTitle';
import InputForm from './components/InputForm';
import TaskList from './components/TaskList';

const TasksIndex = () => {
  return (
    <div>
      <PageTitle pageTitle='タスク管理' />
      <InputForm />
      <TaskList />
    </div>
  );
};

export default TasksIndex;
