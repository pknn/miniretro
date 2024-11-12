import { atom } from 'jotai';

export type Appearance = 'dark' | 'light';
export const appearanceAtom = atom<Appearance>('light');
export const darkModeAtom = atom((get) => get(appearanceAtom) === 'dark');
export const opposite = (appearance: Appearance) =>
  appearance === 'dark' ? 'light' : 'dark';
