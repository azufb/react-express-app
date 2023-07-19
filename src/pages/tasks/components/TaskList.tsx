/** @jsxImportSource @emotion/react */

import { useMutation, useQuery } from '@apollo/client';
import { DELETE_TASK, GET_TASKS } from '../../../ts/gql';
import { useRecoilState } from 'recoil';
import { isTaskEditableAtom } from '../../../recoil/atom';
import EditTask from './EditTask';
import {
  listWrapper,
  table,
  thead,
  idColumn,
  titleColumn,
  deadlineColumn,
  buttonColumn,
  tbody,
  id,
  title,
  deadline,
  buttons,
  button,
} from '../styles/taskList';

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
    <div css={listWrapper}>
      {loading && <p>Loading...</p>}
      {!loading &&
        (data.getTasks.length === 0 ? (
          <p>表示するタスクは現在0です。</p>
        ) : (
          <table css={table}>
            <thead css={thead}>
              <tr>
                <th css={idColumn}>id</th>
                <th css={titleColumn}>タイトル</th>
                <th css={deadlineColumn}>期限</th>
                <th css={buttonColumn}></th>
              </tr>
            </thead>
            <tbody css={tbody}>
              {/* ローディング終わるのを待たないと、undefinedが返ってくる */}
              {data.getTasks.map((task: any) => (
                <tr key={task.id}>
                  <td css={id}>{task.id}</td>
                  {isTaskEditable ? (
                    <EditTask
                      taskId={task.id}
                      previousTitle={task.title}
                      previousDeadline={task.deadline}
                    />
                  ) : (
                    <>
                      <td css={title}>{task.title}</td>
                      <td css={deadline}>{task.deadline}</td>
                      <td css={buttons}>
                        <button css={button} onClick={handleChangeEditable}>
                          編集
                        </button>
                        <button
                          css={button}
                          onClick={() => handleDeleteTask(task.id)}
                        >
                          削除
                        </button>
                      </td>
                    </>
                  )}
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
