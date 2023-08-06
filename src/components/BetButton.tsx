import { BET_BUTTON_BG, BET_BUTTON_BORDER, BET_BUTTON_TEXT } from 'utils/constants';

type BetButtonProps = {
   pickingBet: (val: string) => void;
   betPoints: number;
   betOptionName: string;
   textColor: (typeof BET_BUTTON_TEXT)[keyof typeof BET_BUTTON_TEXT];
   bgColor: (typeof BET_BUTTON_BG)[keyof typeof BET_BUTTON_BG];
   borderColor: (typeof BET_BUTTON_BORDER)[keyof typeof BET_BUTTON_BORDER];
};
const BetButton = ({
   pickingBet,
   betPoints,
   betOptionName,
   textColor,
   bgColor,
   borderColor,
}: BetButtonProps) => {
   return (
      <div>
         <button
            onClick={() => pickingBet('+')}
            className={`h-32 w-44 border-solid border-2 ${borderColor} rounded-md flex flex-col items-center justify-center ${bgColor} ml-6 enabled:hover:opacity-50 active:opacity-70 focus:outline-none focus:ring`}
         >
            {!!betPoints && (
               <div className={`rounded-full bg-white p-1 border-4 ${borderColor}`}>
                  {betPoints}
               </div>
            )}
            <div className={`${textColor} p-3`}>{betOptionName}</div>
         </button>
         <div className="flex items-center justify-center pt-2 font-bold text-xl text-white ml-6 mb-2">
            <div className="inline-flex">
               <button
                  onClick={() => pickingBet('+')}
                  className="bg-gray-300 enabled:hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 md:py-2 md:px-4 lg:py-2 lg:px-4  rounded-l disabled:opacity-80"
               >
                  +
               </button>
               <button
                  onClick={() => pickingBet('-')}
                  className="bg-gray-300 enabled:hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 md:py-2 md:px-4 lg:py-2 lg:px-4 rounded-r disabled:opacity-80"
                  disabled={betPoints <= 0}
               >
                  -
               </button>
            </div>
         </div>
      </div>
   );
};

export default BetButton;
