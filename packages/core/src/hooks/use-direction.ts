'use client';
import { atom, useAtom } from 'jotai';

// 1. set initial atom for hub direction
const hubDirectionAtom = atom(
  typeof window !== 'undefined' ? localStorage.getItem('iso-direction') : 'ltr'
);

const hubDirectionAtomWithPersistence = atom(
  (get) => get(hubDirectionAtom),
  (get, set, newStorage: any) => {
    set(hubDirectionAtom, newStorage);
    localStorage.setItem('iso-direction', newStorage);
  }
);

// 2. useDirection hook to check which direction is available
export function useDirection() {
  const [direction, setDirection] = useAtom(
    hubDirectionAtomWithPersistence
  );

  return {
    direction: direction === null ? 'ltr' : direction,
    setDirection,
  };
}
