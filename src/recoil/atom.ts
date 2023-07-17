import { atom } from 'recoil';

// サインイン状態を管理する
const isSignedinAtom = atom<boolean>({
  key: 'isSignedinAtom',
  default: false,
});

export { isSignedinAtom };
