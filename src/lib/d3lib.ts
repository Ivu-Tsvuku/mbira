import { d3SVGType, d3Type } from "../types/types"
const MARGIN = { LEFT: 20, TOP: 20, RIGHT: 20, BOTTOM: 20 }
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
        .attr("class", type )
        .attr('transform', `translate(${LEFT},${TOP})`)

}