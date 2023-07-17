import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { SIGNIN } from '../../ts/gql';
import { NavigateFunction, useNavigate } from 'react-router-dom';

const Signin = () => {
  const { register, handleSubmit, reset } = useForm();
  const [signin] = useMutation(SIGNIN);
  const navigate: NavigateFunction = useNavigate();

  // サインインボタン押下で、サインイン処理実行。
  const onSubmit = async (data: any): Promise<void> => {
    const param = {
      email: data.email,
      password: data.password,
    };

    await signin({ variables: param }).then((result: any) => {
      console.log(result.data);
    });

    navigate('/Tasks');

    // フォームリセット
    reset();
  };

  return (
    <div>
      <p>サインイン</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>メールアドレス</label>
        <input type='text' {...register('email')} />
        <label>パスワード</label>
        <input type='text' {...register('password')} />

        <button type='submit'>サインイン</button>
      </form>
    </div>
  );
};

export default Signin;