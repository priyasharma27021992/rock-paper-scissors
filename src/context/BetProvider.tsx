import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';

type IBetContextProps = {
   rockBet: number;
   paperBet: number;
   scissorsBet: number;
   playerBetPoints: number;
   setRockBet: Dispatch<SetStateAction<number>>;
   setPaperBet: Dispatch<SetStateAction<number>>;
   setScissorsBet: Dispatch<SetStateAction<number>>;
   setPlayerBetPoints: Dispatch<SetStateAction<number>>;
   mapBet: Record<string, number>;
   clearBet: () => void;
};

export const BetContext = createContext<IBetContextProps>({
   rockBet: 0,
   paperBet: 0,
   scissorsBet: 0,
   playerBetPoints: 0,
   setRockBet: () => 0,
   setPaperBet: () => 0,
   setScissorsBet: () => 0,
   mapBet: {},
   clearBet: () => undefined,
   setPlayerBetPoints: () => 0,
});

type BetProviderProviderProps = {
   children: ReactNode;
};

const BetProvider = ({ children }: BetProviderProviderProps) => {
   const [rockBet, setRockBet] = useState(0);
   const [paperBet, setPaperBet] = useState(0);
   const [scissorsBet, setScissorsBet] = useState(0);
   const [playerBetPoints, setPlayerBetPoints] = useState(0);
   const mapBet = {
      ROCK: rockBet,
      PAPER: paperBet,
      SCISSORS: scissorsBet,
   };

   const clearBet = () => {
      setPaperBet(0);
      setRockBet(0);
      setScissorsBet(0);
      setPlayerBetPoints(0);
   };

   return (
      <BetContext.Provider
         value={{
            rockBet: rockBet,
            paperBet: paperBet,
            scissorsBet: scissorsBet,
            playerBetPoints: playerBetPoints,
            setRockBet: setRockBet,
            setPaperBet: setPaperBet,
            setScissorsBet: setScissorsBet,
            mapBet: mapBet,
            clearBet: clearBet,
            setPlayerBetPoints: setPlayerBetPoints,
         }}
      >
         {children}
      </BetContext.Provider>
   );
};

export default BetProvider;
