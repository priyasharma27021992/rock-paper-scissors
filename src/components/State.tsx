import { useBetContext } from 'hooks/useBetContext';
import { useScorerContext } from 'hooks/useScorerContext';
import { BET_BUTTON_TEXT, STATES } from 'utils/constants';

const State = () => {
   const { computerBet, winner, stage, playerBet } = useScorerContext();
   const { playerBetPoints } = useBetContext();
   if (!stage) return <div></div>;

   return (
      <div className="flex items-center justify-around mb-1 md:mb-15 lg:mb-20">
         {stage === STATES.START && (
            <>
               <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl text-white">
                  PICK YOUR BETS
               </h1>
            </>
         )}
         {stage === STATES.PENDING && (
            <>
               <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl text-white">
                  {playerBet}
               </h1>
               <div className="font-bold text-xl md:text-3xl lg:text-4xl text-yellow-400">vs</div>
               <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl text-white">
                  {computerBet}
               </h1>
            </>
         )}
         {stage === STATES.END && (
            <div className="flex flex-col items-center">
               <h1
                  className={`font-bold text-2xl md:text-4xl lg:text-6xl ${
                     winner?.winningBet ? `${BET_BUTTON_TEXT[winner?.winningBet]}` : 'text-white'
                  }`}
               >
                  {winner.winningBet} WON
               </h1>

               <h1 className="font-bold lg:text-3xl text-xl text-white mt-1 lg:mt-2">
                  You
                  {winner.name === 'PLAYER' ? ` Win ${winner.points}` : ` Lost ${playerBetPoints}`}
               </h1>
            </div>
         )}
      </div>
   );
};

export default State;
