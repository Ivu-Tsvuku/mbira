
export type d3SVGType = d3.Selection<SVGSVGElement, unknown, HTMLElement, any>
export type d3Type = d3.Selection<any, any, any, any>
export type ScaleLinear = d3.ScaleLinear<number, number, never>
export type ScaleBand = d3.ScaleBand<string>

export interface IMbiraCoordinate { 
    x: number
    y: number
    register: "B" | "T" | "R"
    position: number
    hand: "left" | "right"
}