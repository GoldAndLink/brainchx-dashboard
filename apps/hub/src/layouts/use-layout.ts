'use client';

import { LAYOUT_OPTIONS } from '@/config/enums';
import { atom, useAtom } from 'jotai';

// 1. set initial atom for hub layout
const hubLayoutAtom = atom(
  typeof window !== 'undefined'
    ? localStorage.getItem('hub-layout')
    : LAYOUT_OPTIONS.HYDROGEN
);

const hubLayoutAtomWithPersistence = atom(
  (get) => get(hubLayoutAtom),
  (get, set, newStorage: any) => {
    set(hubLayoutAtom, newStorage);
    localStorage.setItem('hub-layout', newStorage);
  }
);

// 2. useLayout hook to check which layout is available
export function useLayout() {
  const [layout, setLayout] = useAtom(hubLayoutAtomWithPersistence);
  return {
    // layout: layout === null ? LAYOUT_OPTIONS.HYDROGEN : layout,
    layout: LAYOUT_OPTIONS.HYDROGEN,
    setLayout,
  };
}
