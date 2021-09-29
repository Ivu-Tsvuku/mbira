
import { createContext } from "react";
import * as Tone from 'tone' 


const synth = new Tone.AMSynth().toDestination()

export const ToneContext = createContext(synth)