import {
   Dispatch,
   ReactNode,
   SetStateAction,
   createContext,
   useEffect,
   useRef,
   useState,
} from 'react';
import { WinnerObjectType } from 'utils/types';
import { BET_OPTIONS, MINIMUM_PLAYER_BALANCE, PLAYERS, STATES } from 'utils/constants';
import { useBetContext } from 'hooks/useBetContext';

type IScorerContextProps = {
   playerBalance: number;
   playerBet: string;
   computerBet: string;
   stage: string;
   loading: boolean;
   winner: WinnerObjectType;
   setPlayerBalance: Dispatch<SetStateAction<number>>;
   setPlayerBet: Dispatch<SetStateAction<string>>;
   setComputerBet: Dispatch<SetStateAction<string>>;
   setWinner: Dispatch<SetStateAction<WinnerObjectType>>;
   setLoading: Dispatch<SetStateAction<boolean>>;
   play: () => void;
   setStage: Dispatch<SetStateAction<string>>;
   clearScore: () => void;
};

export const ScorerContext = createContext<IScorerContextProps>({
   playerBalance: 0,
   playerBet: '',
   computerBet: '',
   stage: '',
   winner: {},
   loading: false,
   setPlayerBalance: () => 0,
   setPlayerBet: () => '',
   setComputerBet: () => '',
   play: () => undefined,
   setWinner: () => ({}),
   setStage: () => '',
   clearScore: () => undefined,
   setLoading: () => false,
});

type ScorerProviderProviderProps = {
   children: ReactNode;
};

const ScorerProvider = ({ children }: ScorerProviderProviderProps) => {
   const timerRef = useRef<null | ReturnType<typeof setTimeout>>(null);
   const { mapBet } = useBetContext();
   const [playerBalance, setPlayerBalance] = useState(MINIMUM_PLAYER_BALANCE);
   const [playerBet, setPlayerBet] = useState('');
   const [computerBet, setComputerBet] = useState('');
   const [stage, setStage] = useState(STATES.START);
   const [winner, setWinner] = useState<WinnerObjectType>({});
   const [loading, setLoading] = useState(false);

   const getWinner = (playerMove: string, computerMove: string) => {
      let winnerObj = {};
      switch (playerMove) {
         case BET_OPTIONS.ROCK:
            if (computerMove === BET_OPTIONS.SCISSORS) {
               winnerObj = {
                  name: PLAYERS.PLAYER,
                  winningBet: BET_OPTIONS.ROCK,
               };
               return winnerObj;
            } else {
               winnerObj = {
                  name: PLAYERS.COMPUTER,
                  winningBet: BET_OPTIONS.PAPER,
               };
               return winnerObj;
            }
         case BET_OPTIONS.PAPER:
            if (computerMove === BET_OPTIONS.ROCK) {
               winnerObj = {
                  name: PLAYERS.PLAYER,
                  winningBet: BET_OPTIONS.PAPER,
               };
               return winnerObj;
            } else {
               winnerObj = {
                  name: PLAYERS.COMPUTER,
                  winningBet: BET_OPTIONS.SCISSORS,
               };
               return winnerObj;
            }
         case BET_OPTIONS.SCISSORS:
            if (computerMove === BET_OPTIONS.PAPER) {
               winnerObj = {
                  name: PLAYERS.PLAYER,
                  winningBet: BET_OPTIONS.SCISSORS,
               };
               return winnerObj;
            } else {
               winnerObj = {
                  name: PLAYERS.COMPUTER,
                  winningBet: BET_OPTIONS.ROCK,
               };
               return winnerObj;
            }
         default:
            return winnerObj;
      }
   };

   const calculatePoints = (winnerObj: WinnerObjectType) => {
      let winningPoints = 0;
      let winningbet = winnerObj?.winningBet ? mapBet[winnerObj.winningBet] : undefined;
      const playerBets = playerBet?.split(',') || [];
      if (!winningbet && winnerObj.name === PLAYERS.COMPUTER) {
         winningbet = 500;
      } else if (!winningbet) {
         setStage(STATES.END);
         setLoading(false);
         return;
      }
      if (winnerObj.name === PLAYERS.PLAYER) {
         winningPoints += playerBets?.length === 1 ? 14 * winningbet : 3 * winningbet;
      } else {
         winningPoints += -winningbet;
      }
      setPlayerBalance(Number(playerBalance) + Number(winningPoints));
      if (Number(winningPoints) > 0)
         setWinner((winnerObj) => ({
            ...winnerObj,
            points: winningPoints,
         }));
      setStage(STATES.END);
      setLoading(false);
   };

   const playTheBet = (machineSelect: keyof typeof BET_OPTIONS) => {
      let winnerObj = winner;
      const playerBets = playerBet?.split(',') || [];
      if (playerBets?.indexOf(machineSelect) > -1) {
         setWinner({
            name: PLAYERS.COMPUTER,
            winningBet: machineSelect,
            points: 0,
         });
         setStage(STATES.END);
         setLoading(false);
         return;
      }
      for (let i = 0; i < playerBets.length; i++) {
         winnerObj = getWinner(playerBets[i], machineSelect) as WinnerObjectType;
         setWinner(winnerObj);
         if (winnerObj.name === PLAYERS.PLAYER) {
            break;
         }
      }
      calculatePoints(winnerObj);
   };
   const play = () => {
      try {
         setStage(STATES.PENDING);
         setLoading(true);
         const randomSelect = Object.values(BET_OPTIONS)[Math.floor(Math.random() * 3)];
         setComputerBet(randomSelect);
         timerRef.current = setTimeout(() => {
            playTheBet(randomSelect as keyof typeof BET_OPTIONS);
         }, 1000);
      } catch (error) {
         setLoading(false);
         setStage('END');
         throw new Error('Error while playing!');
      }
   };

   const clearScore = () => {
      setPlayerBet('');
      setComputerBet('');
      setWinner({});
      setStage('');
   };

   useEffect(() => {
      return () => (timerRef.current ? clearTimeout(timerRef.current) : clearTimeout(0));
   }, []);

   return (
      <ScorerContext.Provider
         value={{
            playerBalance: playerBalance,
            playerBet: playerBet,
            computerBet: computerBet,
            winner: winner,
            setPlayerBalance: setPlayerBalance,
            setPlayerBet: setPlayerBet,
            setComputerBet: setComputerBet,
            play: play,
            stage: stage,
            setWinner: setWinner,
            setStage: setStage,
            clearScore: clearScore,
            loading: loading,
            setLoading: setLoading,
         }}
      >
         {children}
      </ScorerContext.Provider>
   );
};

export default ScorerProvider;
