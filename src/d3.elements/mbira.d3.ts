import * as d3 from 'd3'
import { BaseType, ValueFn } from 'd3'
import { MutableRefObject } from 'react'
import { mbiraCoordinates } from '../data/mbiraCoordinates'
import { applyColour, createGroup, getGroupWidth, getLimits, handleClick, handleMouseOut, handleMouseOver, injectData } from '../lib/d3lib'
import { d3SVGType, IMbiraCoordinate } from '../types/types'


function mbira(svg: d3SVGType, parentWidth: number, tuning: string) {
    console.log({ parentWidth })

    svg
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", `0 0 ${parentWidth} 400`) // responsive
        .classed("svg-content", true)

    const gridGroup01 = createGroup(svg, 'gridGroup01', 'group')



    gridGroup01.append("rect")
        .attr("width", getGroupWidth(parentWidth))
        .attr("height", "100%")
        .attr("fill", "grey")

    const { WIDTH, HEIGHT } = getLimits(gridGroup01)

    const x = d3.scaleLinear()
        .range([0, WIDTH])

    const y = d3.scaleLinear()
        .range([HEIGHT, 0])

    injectData(mbiraCoordinates, x, y, WIDTH, HEIGHT)
    const circles = gridGroup01.selectAll('circle')
        .data(mbiraCoordinates, (d: any) => {
            return d.y
        })

    const clickedLabel = svg.append("text")
        .attr('x', Number(WIDTH / 2))
        .attr('y', Number(HEIGHT / 5.5))
        .attr('font-size', '42px')
        .attr('text-anchor', 'middle')

    circles.enter().append('circle')
        .on('mouseover', handleMouseOver)
        .on('mouseout', (a,b) => handleMouseOut(a,b,clickedLabel))
        .on('click', (a, b) => handleClick(a, b, clickedLabel, WIDTH, HEIGHT, tuning))
        .attr('cx', (d) => x(d['x']))
        .attr('cy', (d) => y(d['y']))
        .attr('r', 14)
        .attr('opacity', 0.6)
        .attr('fill', (d) => applyColour(d))
        .attr('class', (d) => `${d.register}${d.position}`)
        .style('cursor','pointer')
        .datum()
    return svg
}

export default mbira