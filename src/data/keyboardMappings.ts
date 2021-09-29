import { INoteNameObj, INoteNameObjInverted, KeyStringObject } from "../types/types";
//TODO remap this to list of arrays, then build object from that
export const keyBoardMapping: INoteNameObj = {
    "h": "B1",
    "g": "B2",
    "f": "B3",
    "d": "B4",
    "s": "B5",
    "a": "B6",
    "q": "B7",
    "6": "T1",
    "5": "T2",
    "4": "T3",
    "3": "T4",
    "2": "T5",
    "1": "T6",
    "n": "R1",
    "j": "R2",
    "i": "R3",
    "o": "R4",
    "p": "R5",
    "-": "R6",
    "=": "R7",
    "[": "R8",
    "]": "R9",
}

export const noteMapping:INoteNameObjInverted ={
     "B1":"h",
     "B2":"g",
     "B3":"f",
     "B4":"d",
     "B5":"s",
     "B6":"a",
     "B7":"q",
     "T1":"6",
     "T2":"5",
     "T3":"4",
     "T4":"3",
     "T5":"2",
     "T6":"1",
     "R1":"n",
     "R2":"j",
     "R3":"i",
     "R4":"o",
     "R5":"p",
     "R6":"-",
     "R7":"=",
     "R8":"[",
     "R9":"]",
} 