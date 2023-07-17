import SigninButton from './components/SigninButton';
import SignupButton from './components/SignupButton';

const HomeIndex = () => {
  return (
    <div>
      <p>Home</p>
      <p>初めて利用する方はこちら</p>
      <SignupButton />
      <p>サインインはこちら</p>
      <SigninButton />
    </div>
  );
};

export default HomeIndex;
