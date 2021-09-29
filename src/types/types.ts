import { Dispatch, SetStateAction } from "react"


export type d3SVGType = d3.Selection<SVGSVGElement, unknown, HTMLElement, any>
export type d3Type = d3.Selection<any, any, any, any>
export type ScaleLinear = d3.ScaleLinear<number, number, never>
export type ScaleBand = d3.ScaleBand<string>
export type SetStateString = Dispatch<SetStateAction<string>>
export type KeyStringObject = {[key:string]: string}

export interface IMbiraCoordinate {
    x: number
    y: number
    register: "B" | "T" | "R"
    position: number
    name: NoteName
    hand: "left" | "right"
}


export interface IMbiraTuning {
    source: string
    frequencies: {
        [key:string]: number,
        
    }
}

export type NoteName = "B1"|"B2"|"B3"|"B4"|"B5"|"B6"|"B7"|"T1"|"T2"|"T3"|"T4"|"T5"|"T6"|"R1"|"R2"|"R3"|"R4"|"R5"|"R6"|"R7"|"R8"|"R9"

export interface INoteNameObj {
    [key:string]: NoteName
}

export type INoteNameObjInverted = {
    [key in NoteName]: string
}