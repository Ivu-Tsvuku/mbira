import * as d3 from "d3"
import { d3SVGType, d3Type, IMbiraCoordinate, ScaleBand, ScaleLinear } from "../types/types"
const MARGIN = { LEFT: 20, TOP: 10, RIGHT: 20, BOTTOM: 100 }
const { LEFT, TOP, RIGHT, BOTTOM } = MARGIN
const HORIZONTAL_OFFSET = LEFT + RIGHT
const VERTICAL_OFFSET = TOP + BOTTOM
const HEIGHT = 550 - VERTICAL_OFFSET
const MIDDLE_Y = HEIGHT / 2

export function getGroupWidth(GRID_WIDTH: number): number {
    return (GRID_WIDTH) - HORIZONTAL_OFFSET
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
        .tickSize(-HEIGHT)

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
        .attr('r', 9)
        .attr('opacity', 0.5)
        console.log({data, event, clickedLabel})
        clickedLabel.text('')
}

export function handleClick(item: any, data: IMbiraCoordinate,clickedLabel:d3Type, WIDTH:number, HEIGHT:number) {
    const {register, position, hand} = data
        clickedLabel
            .text(`${hand} hand - ${register}${position}`)
            .attr('fill', applyColour(data))
}


export function applyColour(dataPoint: IMbiraCoordinate): string {

    switch (dataPoint.register) {
        case "B": return "blue"
        case "T": return "orange"
        case "R": return "red"
        default: return ''
    }
}