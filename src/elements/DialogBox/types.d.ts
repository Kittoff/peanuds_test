import { IPeopleDetails } from '../../pages/People/types';

export interface IDialogBox {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  person: IPeopleDetails | null;
}
