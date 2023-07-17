import { NavigateFunction, useNavigate } from 'react-router-dom';

const SigninButton = () => {
  const navigate: NavigateFunction = useNavigate();

  const handleGoToSignin = (): void => {
    navigate('/Signin');
  };

  return (
    <div>
      <button onClick={handleGoToSignin}>サインイン</button>
    </div>
  );
};

export default SigninButton;
