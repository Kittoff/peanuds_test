import { IPeopleDetails } from '../../pages/People/types';

export interface DialogBoxProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  person: IPeopleDetails | null;
}
export interface PeopleDetails {
  uid: string;
  birth_year: string;
  eye_color: string;
  created: string;
  edited: string;
  home_world: string;
  skin_color: string;
  name: string;
  gender: string;
  height: string;
  hair_color: string;
  mass: string;
}
