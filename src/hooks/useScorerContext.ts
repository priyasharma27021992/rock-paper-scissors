import { useContext } from 'react';
import { ScorerContext } from 'context/ScorerProvider';

export function useScorerContext() {
   return useContext(ScorerContext);
}
