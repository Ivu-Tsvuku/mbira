import * as d3 from 'd3'
import { BaseType, ValueFn } from 'd3'
import { MutableRefObject } from 'react'
import * as Tone from 'tone' 
import { noteMapping } from '../data/keyboardMappings'
import { mbiraCoordinates } from '../data/mbiraCoordinates'
import { applyColour, createGroup, getGroupWidth, getLimits, handleClick, handleMouseOut, handleMouseOver, injectData, limits } from '../lib/d3lib'
import { d3SVGType, IMbiraCoordinate } from '../types/types'


function mbira(svg: d3SVGType, parentWidth: number, tuning: string, synth: Tone.AMSynth, keyBVis: boolean) {

    svg
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", `0 0 ${parentWidth} 600`) // responsive
        .classed("svg-content", true)

    const gridGroup01 = createGroup(svg, 'gridGroup01', 'group')
    const gridGroup02 = createGroup(svg, 'gridGroup02', 'group')



    gridGroup01.append("rect")
        .attr("width", getGroupWidth(parentWidth))
        .attr("height", "100%")
        .attr("fill", "grey")

    const { WIDTH, HEIGHT } = getLimits(gridGroup01)


    gridGroup02.append("rect")
        .attr("width", getGroupWidth(parentWidth))
        .attr("height", "100%")
        .attr("fill", "none")


    const x = d3.scaleLinear()
        .range([0, WIDTH])

    const y = d3.scaleLinear()
        .range([HEIGHT - limits.VERTICAL_OFFSET, 0])

    injectData(mbiraCoordinates, x, y, WIDTH, HEIGHT)
    const circles = gridGroup01.selectAll('circle')
        .data(mbiraCoordinates, (d: any) => {
            return d.y
        })

    const labels = gridGroup01.selectAll('text')
        .data(mbiraCoordinates, (d: any) => {
            return d.y
        })

    const clickedLabel = svg.append("text")
        .attr('x', Number(WIDTH / 2))
        .attr('y', Number(HEIGHT / 5.5))
        .attr('font-size', '42px')
        .attr('text-anchor', 'middle')


    circles.enter().append('circle')
        .on('mouseenter', handleMouseOver)
        .on('mouseout', (a, b) => handleMouseOut(a, b, clickedLabel))
        .on('click', (a, b) => handleClick(a, b, clickedLabel, WIDTH, HEIGHT, tuning, synth))
        .attr('cx', (d) => x(d['x']))
        .attr('cy', (d) => y(d['y']))
        .attr('id', (d) => d.name)
        .attr('r', 14)
        .attr('opacity', 0.6)
        .attr('fill', (d) => applyColour(d))
        .attr('class', (d) => `${d.register}${d.position}`)
        .style('cursor', 'pointer')
        .datum()

    labels.enter().append('text')
        .attr('x', (d) => x(d['x']))
        .attr('y', (d) => y(d['y'] + 1.7))
        .attr('font-size', '32px')
        .attr('text-anchor', 'middle')
        .attr('opacity', ()=> keyBVis ? 1 : 0)
        .text((d)=> noteMapping[d.name])

    return svg
}

export default mbira