import { createContext } from "react";
import { SetStateString } from "../types/types";

interface ITuningContextProps {
    tuning: string
    setTuning: SetStateString 
  }
export const TuningContext = createContext({ tuning:'Equal Temperament'} as ITuningContextProps)