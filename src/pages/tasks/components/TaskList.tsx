import { useMutation, useQuery } from '@apollo/client';
import { DELETE_TASK, GET_TASKS } from '../../../ts/gql';

type DeleteParam = {
  id: number;
};

const TaskList = () => {
  const { loading, error, data } = useQuery(GET_TASKS);
  const [deleteTask] = useMutation(DELETE_TASK, {
    // 削除が実行されたら、再度タスク一覧を取得する
    refetchQueries: [GET_TASKS, 'GetTasks'],
  });

  // 削除ボタン押下で、タスク削除処理を実行
  const handleDeleteTask = (id: number): void => {
    const param: DeleteParam = {
      id: id,
    };

    // タスク削除実行
    deleteTask({ variables: param });
  };

  return (
    <div>
      <p>一覧</p>
      {loading && <p>Loading...</p>}
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>タイトル</th>
            <th>期限</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* ローディング終わるのを待たないと、undefinedが返ってくる */}
          {!loading &&
            data.getTasks.map((task: any) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{task.deadline}</td>
                <td>
                  <button onClick={() => handleDeleteTask(task.id)}>
                    削除
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {error && <p>Ooops!Error is occured!</p>}
    </div>
  );
};

export default TaskList;
