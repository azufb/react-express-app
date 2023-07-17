import { atom } from 'recoil';

const isTaskEditableAtom = atom<boolean>({
  key: 'isTaskEditableAtom',
  default: false,
});

export { isTaskEditableAtom };
