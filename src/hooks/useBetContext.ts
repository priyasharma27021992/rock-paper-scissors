import { BetContext } from 'context/BetProvider';
import { useContext } from 'react';

export function useBetContext() {
   return useContext(BetContext);
}
