import { useEffect, useLayoutEffect } from 'react';

// useLayoutEffect will show warning if used during ssr, e.g. with Next.js
// useHubEffect removes it by replacing useLayoutEffect with useEffect during ssr
export const useHubEffect =
  typeof document !== 'undefined' ? useLayoutEffect : useEffect;
