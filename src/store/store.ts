import { FilmsStore, PeopleStore } from './type';

export const createPeopleSlice = (): PeopleStore => ({
  peopleCount: 0,
});

export const createFilmsSlice = (): FilmsStore => ({
  filmsCount: 0,
});
