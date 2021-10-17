import * as d3 from "d3"
import * as Tone from 'tone' 
import { mbiraTuning } from "../data/mbiraTunning"
import { d3SVGType, d3Type, IMbiraCoordinate, ScaleBand, ScaleLinear } from "../types/types"
import { play } from "./tonelib"

import {getAllOctaveColours} from "../data/colours"

const MARGIN = { LEFT: 20, TOP: 0, RIGHT: 20, BOTTOM: 100 }
const { LEFT, TOP, RIGHT, BOTTOM } = MARGIN
const HORIZONTAL_OFFSET = LEFT + RIGHT
const VERTICAL_OFFSET = TOP + BOTTOM
const HEIGHT = 650 - VERTICAL_OFFSET
const MIDDLE_Y = HEIGHT / 2

const mbiraColours = getAllOctaveColours()


export function getGroupWidth(GRID_WIDTH: number): number {
    return (GRID_WIDTH) - HORIZONTAL_OFFSET
}
export const limits = {
    VERTICAL_OFFSET
}
export function createGroup(container: d3Type, id: string, type: string) {
    return container.append("g") // d3 group for keeping elements together
        .attr("id", id)
        .attr("class", type)
        .attr('transform', `translate(${LEFT},${0})`)

}

export function getLimits(container: d3Type): { WIDTH: number, HEIGHT: number } {
    const node = container.node()
    const { height, width } = node.getBoundingClientRect()
    return { HEIGHT: height, WIDTH: width }
}

export function injectData(data: IMbiraCoordinate[], x: ScaleLinear, y: ScaleLinear, WIDTH: number, HEIGHT: number) {

    const xMax: number | undefined = d3.max(data, (d) => Number(d.x))
    const yMax: number | undefined = d3.max(data, (d) => Number(d.y))

    if (xMax !== undefined) x.domain([0, xMax + (xMax * 0.07)])
    if (yMax !== undefined) y.domain([0, yMax + (yMax * 0.2)])

    const xAxisCall = d3.axisBottom(x)
        .tickSize((-HEIGHT +100))

    const yAxisCall = d3.axisLeft(y)
        .tickSize(-WIDTH)



    // return {xAxisCall, yAxisCall}

}

export function handleMouseOver(this: any) {

    const circle = d3.select(this)
        .attr('r', 15)
        .attr('opacity', 1)
}

export function handleMouseOut(event:any, data:any, clickedLabel:d3Type) {
         d3.select(event.target)
        .attr('r', 14)
        .attr('opacity', 0.5)
        clickedLabel.text('')
}

export function handleClick(item: any, data: IMbiraCoordinate,clickedLabel:d3Type, WIDTH:number, HEIGHT:number, tuning: string, synth: Tone.AMSynth) {
    const {register, position, hand, name} = data
        const [selectedTuning] = mbiraTuning.filter( t =>  t.source === tuning)
        const {frequencies} = selectedTuning
        const freq: number = frequencies[name]
        play(freq, synth)
        d3.select(item.target)
        .attr('r', 27)
        clickedLabel
            .text(`${hand} hand - ${register}${position} - ${freq}hz`)
            .attr('fill', 'black')
}

/*
export function applyColour(dataPoint: IMbiraCoordinate): string {

    switch (dataPoint.register) {
        case "B": return "blue"
        case "T": return "orange"
        case "R": return "red"
        default: return ''
    }
}
*/


export function applyColour(dataPoint: IMbiraCoordinate): string {
   return mbiraColours[ dataPoint.name]
}
