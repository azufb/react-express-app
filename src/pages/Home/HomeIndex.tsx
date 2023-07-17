import { useRecoilValue } from 'recoil';
import SigninButton from './components/SigninButton';
import SignupButton from './components/SignupButton';
import { isSignedinAtom } from '../../recoil/atom';

const HomeIndex = () => {
  const isSignedin = useRecoilValue<boolean>(isSignedinAtom);

  return (
    <div>
      <p>Home</p>
      {isSignedin ? (
        <>
          <p>初めて利用する方はこちら</p>
          <SignupButton />
          <p>サインインはこちら</p>
          <SigninButton />
        </>
      ) : (
        <p>サインインしています。</p>
      )}
    </div>
  );
};

export default HomeIndex;
