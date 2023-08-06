import BetButton from 'components/BetButton';
import Spinner from 'components/Spinner';
import State from 'components/State';
import Toast from 'components/Toast';
import { useBetContext } from 'hooks/useBetContext';
import { useScorerContext } from 'hooks/useScorerContext';
import { useState } from 'react';
import {
   BET_BUTTON_BG,
   BET_BUTTON_BORDER,
   BET_BUTTON_TEXT,
   BET_OPTIONS,
   MINIMUM_BET,
   STATES,
} from 'utils/constants';

const Home = () => {
   const [error, setError] = useState('');

   const {
      rockBet,
      setRockBet,
      paperBet,
      playerBetPoints,
      setPaperBet,
      scissorsBet,
      setScissorsBet,
      clearBet,
      setPlayerBetPoints,
      mapBet,
   } = useBetContext();
   const {
      playerBalance,
      playerBet,
      play,
      setPlayerBalance,
      setPlayerBet,
      stage,
      clearScore,
      winner,
      loading,
      setLoading,
   } = useScorerContext();

   const clear = () => {
      clearBet();
      clearScore();
   };

   const pickingBet = (betPick: (typeof BET_OPTIONS)[keyof typeof BET_OPTIONS], type: string) => {
      const playerBetArr = playerBet?.split(',');
      if (playerBalance <= 0 && type === '+') {
         return setError('No Balance!');
      }

      if (playerBetArr?.length > 1 && playerBetArr?.indexOf(betPick) === -1) {
         return setError('You can not select all three options!');
      }

      if (type === '+') {
         setPlayerBalance(playerBalance - MINIMUM_BET);
         setPlayerBetPoints(playerBetPoints + MINIMUM_BET);
         if (playerBetArr?.indexOf(betPick) === -1)
            setPlayerBet(playerBet ? `${playerBet},${betPick}` : betPick);
      } else {
         setPlayerBalance(playerBalance + MINIMUM_BET);
         setPlayerBetPoints(playerBetPoints - MINIMUM_BET);
         if (mapBet[betPick] - MINIMUM_BET === 0)
            setPlayerBet(playerBet.replace(betPick, '').replace(',', ''));
      }

      switch (betPick) {
         case BET_OPTIONS.ROCK:
            return type === '+'
               ? setRockBet(rockBet + MINIMUM_BET)
               : setRockBet(rockBet - MINIMUM_BET);

         case BET_OPTIONS.PAPER:
            return type === '+'
               ? setPaperBet(paperBet + MINIMUM_BET)
               : setPaperBet(paperBet - MINIMUM_BET);
         case BET_OPTIONS.SCISSORS:
            return type === '+'
               ? setScissorsBet(scissorsBet + MINIMUM_BET)
               : setScissorsBet(scissorsBet - MINIMUM_BET);
         default:
            return;
      }
   };

   const playGame = () => {
      try {
         play();
      } catch (error) {
         setError('Some Error has come, please try again!');
         setLoading(false);
      }
   };

   return (
      <div className="flex h-screen">
         <div className="m-auto">
            <header className="bg-black absolute inset-x-0 top-0 z-50">
               <div
                  className="w-full md:w-1/2 lg:w-1/2 text-white mx-auto flex items-center justify-between p-3 lg:px-8"
                  aria-label="Global"
               >
                  <div>Balance: {playerBalance}</div>
                  <div>Bet: {playerBetPoints}</div>
                  <div>Win: {winner.points}</div>
               </div>
            </header>
            <div>
               {error && <Toast message={error} type="error" callBack={() => setError('')} />}
               <State />
               <div className="flex md:flex-row lg:flex-row flex-col items-center justify-around p-5 md:p-7 lg:p-10">
                  <BetButton
                     pickingBet={(type: string) => pickingBet(BET_OPTIONS.ROCK, type)}
                     betPoints={rockBet}
                     betOptionName={BET_OPTIONS.ROCK}
                     textColor={BET_BUTTON_TEXT.ROCK}
                     bgColor={BET_BUTTON_BG.ROCK}
                     borderColor={BET_BUTTON_BORDER.ROCK}
                  />
                  <BetButton
                     pickingBet={(type: string) => pickingBet(BET_OPTIONS.PAPER, type)}
                     betPoints={paperBet}
                     betOptionName={BET_OPTIONS.PAPER}
                     textColor={BET_BUTTON_TEXT.PAPER}
                     bgColor={BET_BUTTON_BG.PAPER}
                     borderColor={BET_BUTTON_BORDER.PAPER}
                  />
                  <BetButton
                     pickingBet={(type: string) => pickingBet(BET_OPTIONS.SCISSORS, type)}
                     betPoints={scissorsBet}
                     betOptionName={BET_OPTIONS.SCISSORS}
                     textColor={BET_BUTTON_TEXT.SCISSORS}
                     bgColor={BET_BUTTON_BG.SCISSORS}
                     borderColor={BET_BUTTON_BORDER.SCISSORS}
                  />
               </div>
               <div className="flex flex items-center justify-center">
                  <button
                     onClick={playGame}
                     className="border-solid border-2 border-slate-200 rounded-full bg-slate-950 text-slate-500 px-10 py-4 enabled:hover:bg-slate-700 disabled:opacity-25"
                     disabled={!playerBet || stage === STATES.END || loading}
                  >
                     {loading ? <Spinner /> : <span>PLAY</span>}
                  </button>
                  {stage === STATES.END && (
                     <button
                        onClick={clear}
                        className="border-solid border-2 border-slate-200 rounded-full bg-slate-950 text-slate-500 px-10 py-4 ml-3 enabled:hover:bg-slate-700 disabled:opacity-25"
                        name="btn-clear"
                     >
                        CLEAR
                     </button>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Home;
