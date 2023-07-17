import { useMutation, useQuery } from '@apollo/client';
import { DELETE_TASK, GET_TASKS } from '../../../ts/gql';
import { useRecoilState } from 'recoil';
import { isTaskEditableAtom } from '../../../recoil/atom';
import EditTask from './EditTask';

type DeleteParam = {
  id: number;
};

const TaskList = () => {
  const { loading, error, data } = useQuery(GET_TASKS);
  const [deleteTask] = useMutation(DELETE_TASK, {
    // 削除が実行されたら、再度タスク一覧を取得する
    refetchQueries: [GET_TASKS, 'GetTasks'],
  });

  const [isTaskEditable, setIsTaskEditableAtom] =
    useRecoilState<boolean>(isTaskEditableAtom);

  // 編集モードにする
  const handleChangeEditable = (): void => {
    setIsTaskEditableAtom(true);
  };

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
      {!loading &&
        (data.getTasks.length === 0 ? (
          <p>表示するタスクは現在0です。</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>タイトル</th>
                <th>期限</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* ローディング終わるのを待たないと、undefinedが返ってくる */}
              {data.getTasks.map((task: any) => (
                <tr key={task.id}>
                  <td>{task.id}</td>
                  {isTaskEditable ? (
                    <EditTask
                      taskId={task.id}
                      previousTitle={task.title}
                      previousDeadline={task.deadline}
                    />
                  ) : (
                    <>
                      <td>{task.title}</td>
                      <td>{task.deadline}</td>
                      <td>
                        <button onClick={handleChangeEditable}>編集</button>
                      </td>
                    </>
                  )}
                  <td>
                    <button onClick={() => handleDeleteTask(task.id)}>
                      削除
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
      {error && <p>Ooops!Error is occured!</p>}
    </div>
  );
};

export default TaskList;
