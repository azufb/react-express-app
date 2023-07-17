import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { SIGNUP, SEARCH_SAME_EMAIL_USER } from '../../ts/gql';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { isSignedinAtom } from '../../recoil/atom';

type FormDataParam = {
  name: string;
  email: string;
  password: string;
};

const Signup = () => {
  const { register, handleSubmit, reset } = useForm();
  const [signup] = useMutation(SIGNUP);
  const [searchSameEmailUser] = useMutation(SEARCH_SAME_EMAIL_USER);
  const navigate: NavigateFunction = useNavigate();
  const setIsSignedin = useSetRecoilState<boolean>(isSignedinAtom);

  // 登録ボタン押下で、サインアップ処理実行。
  const onSubmit = async (data: any): Promise<void> => {
    const param: FormDataParam = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    // すでに登録されたメールアドレスではないかチェックする
    const users = await searchSameEmailUser(data.email);
    const sameEmailUsersList = users.data.searchSameEmailUser;

    // まだ登録されていないメールアドレスであればサインアップ処理を行う
    if (sameEmailUsersList.length === 0) {
      // サインアップ処理実行
      await signup({ variables: param }).then((result: any) => {
        console.log(result.data);
      });

      setIsSignedin(true);

      navigate('/Tasks');

      // フォームリセット
      reset();
    } else {
      window.alert(
        'このメールアドレスは登録できません。ほかのメールアドレスを使用してください。'
      );

      // フォームリセット
      reset();
    }
  };

  return (
    <div>
      <p>サインアップ</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>ユーザ名</label>
        <input type='text' {...register('name')} />

        <label>メールアドレス</label>
        <input type='text' {...register('email')} />

        <label>パスワード</label>
        <input type='text' {...register('password')} />

        <button type='submit'>登録</button>
      </form>
    </div>
  );
};

export default Signup;
