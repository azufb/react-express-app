import { NavigateFunction, useNavigate } from 'react-router-dom';

const SignupButton = () => {
  const navigate: NavigateFunction = useNavigate();

  const handleGoToSignup = (): void => {
    navigate('/Signup');
  };

  return (
    <div>
      <button onClick={handleGoToSignup}>サインアップ</button>
    </div>
  );
};

export default SignupButton;
