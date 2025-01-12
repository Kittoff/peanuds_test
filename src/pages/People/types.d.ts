export interface PeopleListItem {
  name: string;
  url: string;
  uid: string;
}
export interface PeopleDetails {
  uid: string;
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
  url: string;
  created: string;
  edited: string;
}

export type Gender = 'male' | 'female' | 'n/a' | '';
