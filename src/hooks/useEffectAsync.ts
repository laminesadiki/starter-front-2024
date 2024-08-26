import { useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useEffectAsync(effect: () => any, inputs?: any[]) {
   useEffect(() => {
      return effect();
   }, inputs);
}
