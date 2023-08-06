import { BET_OPTIONS } from './constants';

export type WinnerObjectType = {
   name?: string;
   points?: number;
   winningBet?: keyof typeof BET_OPTIONS;
};
