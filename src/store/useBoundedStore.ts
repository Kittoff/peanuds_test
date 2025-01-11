import { create } from 'zustand';
import { createFilmsSlice, createPeopleSlice } from './store';

export const useBoundStore = create(() => ({
  ...createPeopleSlice(),
  ...createFilmsSlice(),
}));
