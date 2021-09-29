import { createContext } from "react";
import { SetStateBool, SetStateString } from "../types/types";

interface ITuningContextProps {
    tuning: string
    setTuning: SetStateString 
    keyBVis: boolean
    setKeyBVis: SetStateBool
  }
export const TuningContext = createContext({ tuning:'Equal Temperament'} as ITuningContextProps)