import InputForm from './components/InputForm';
import TaskList from './components/TaskList';

const TasksIndex = () => {
  return (
    <div>
      <p>タスク管理</p>
      <InputForm />
      <TaskList />
    </div>
  );
};

export default TasksIndex;
