/** @jsxImportSource @emotion/react */

import Layout from '../../components/Layout';
import PageTitle from '../../components/PageTitle';
import InputForm from './components/InputForm';
import TaskList from './components/TaskList';
import { contentsWrapper } from './styles/taskIndex';

const TasksIndex = () => {
  return (
    <Layout>
      <PageTitle pageTitle='Tasks' />
      <div css={contentsWrapper}>
        <InputForm />
        <TaskList />
      </div>
    </Layout>
  );
};

export default TasksIndex;
