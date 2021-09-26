import * as d3 from 'd3'
import { useEffect, useRef, useState } from 'react'


function D3Comp() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(false)
        if (!loading) {
            const svg = d3.select("#d3-comp")
                .attr("width", "100%")
                .attr("height", 300)
            svg.append("rect")
                .attr("width", "100%")
                .attr("height", "100%")
                .attr("fill", "pink")
        }
        return () => setLoading(true)
    }, [loading])

    
    return (
        <svg id="d3-comp"></svg>
    )
}

export default D3Comp