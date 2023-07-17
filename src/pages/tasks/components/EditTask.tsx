import { Controller, useForm } from 'react-hook-form';
import DatePicker, { registerLocale } from 'react-datepicker';
import ja from 'date-fns/locale/ja';
// react-datepicker用CSS
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { useMutation } from '@apollo/client';
import { GET_TASKS, UPDATE_TASK } from '../../../ts/gql';
import { useSetRecoilState } from 'recoil';
import { isTaskEditableAtom } from '../../../recoil/atom';

type FormDataParam = {
  id: number;
  title: string;
  deadline: string;
};

const EditTask = (props: any) => {
  const { register, control, handleSubmit } = useForm();
  const [updateTask] = useMutation(UPDATE_TASK, {
    refetchQueries: [GET_TASKS, 'GetTasks'],
  });

  const setIsTaskEditableAtom = useSetRecoilState<boolean>(isTaskEditableAtom);

  // DatePicker用にロケーションをjaにセット
  registerLocale('ja', ja);

  // 更新ボタン押下で、タスク情報更新処理を実行
  const onSubmit = (data: any): void => {
    const param: FormDataParam = {
      id: props.taskId,
      title: data.title,
      deadline: format(data.deadline, 'yyyy/MM/dd'),
    };

    // 更新処理実行
    updateTask({ variables: param });

    // 編集モード閉じる
    setIsTaskEditableAtom(false);
  };

  return (
    <>
      <td>
        <input
          type='text'
          defaultValue={props.previousTitle}
          {...register('title')}
        />
      </td>
      <td>
        <Controller
          control={control}
          name='deadline'
          defaultValue={new Date(props.previousDeadline)}
          render={({ field: { onChange, value } }) => (
            <DatePicker
              locale='ja'
              selected={value ? value : new Date(props.previousDeadline)}
              onChange={(date) => {
                date && onChange(date);
              }}
            />
          )}
        />
      </td>
      <td>
        <button onClick={handleSubmit(onSubmit)}>更新</button>
      </td>
    </>
  );
};

export default EditTask;
