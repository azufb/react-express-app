import { Controller, useForm } from 'react-hook-form';
import DatePicker, { registerLocale } from 'react-datepicker';
import ja from 'date-fns/locale/ja';
// react-datepicker用CSS
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { useMutation } from '@apollo/client';
import { ADD_TASK, GET_TASKS } from '../../../ts/gql';

type InputDataType = {
  title: string;
  deadline: Date;
};

type FormDataParam = {
  title: string;
  deadline: string;
};

const InputForm = () => {
  const { register, control, handleSubmit, reset } = useForm<InputDataType>();
  const [addTask, { loading, error }] = useMutation(ADD_TASK, {
    // 追加したら、一覧読み込み
    refetchQueries: [GET_TASKS, 'GetTasks'],
  });

  // DatePicker用にロケーションをjaにセット
  registerLocale('ja', ja);

  // 追加ボタン押下で、タスク追加処理を実行
  const onSubmit = (data: InputDataType): void => {
    const param: FormDataParam = {
      title: data.title,
      deadline: format(data.deadline, 'yyyy/MM/dd'),
    };

    // タスク追加実行
    addTask({ variables: param });

    // フォームをリセット
    reset();
  };

  return (
    <div>
      <p>フォーム</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='inputForm'>タスク：</label>
        <input
          type='text'
          id='inputForm'
          {...register('title')}
          placeholder='入力してください'
          required={true}
        />
        <label>期限：</label>
        <Controller
          control={control}
          name='deadline'
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <DatePicker
              showIcon
              locale='ja'
              selected={value ? value : new Date()}
              onChange={(date) => {
                date && onChange(date);
              }}
            />
          )}
        />
        <button type='submit'>追加</button>
      </form>

      {loading && <p>Submitting...</p>}
      {error && <p>Submission error! {error.message}</p>}
    </div>
  );
};

export default InputForm;
