import * as d3 from 'd3'
import { MutableRefObject } from 'react'
import { createGroup, getGroupWidth } from '../lib/d3lib'
import { d3SVGType } from '../types/types'


function mbira(svg: d3SVGType, parentWidth: number) {
console.log({parentWidth})

    svg
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", `0 0 ${parentWidth} 400`) // responsive
    .classed("svg-content", true)

    const gridGroup01 = createGroup(svg, 'gridGroup01', 'group')

    gridGroup01.append("rect")
        .attr("width", getGroupWidth(parentWidth))
        .attr("height", "100%")
        .attr("fill", "pink")
    return svg
}

export default mbira