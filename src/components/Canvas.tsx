import * as d3 from 'd3'
import { MutableRefObject, useEffect, useState } from 'react'
import mbira from '../d3.elements/mbira.d3'
import { d3SVGType } from '../types/types'

function Canvas({ id, parentRef }: { id: string, parentRef: MutableRefObject<HTMLElement | null> }) {
    const [loading, setLoading] = useState(true)
    useEffect(() => {

        setLoading(false)

        if (!loading) {

            const svg: d3SVGType = d3.select(`#${id}`).append("svg")

            if (parentRef.current) mbira(svg, parentRef.current.offsetWidth)
        }

        return () => {

            d3.select(`svg`).remove()
            setLoading(true)
        }
    }, [loading, id, parentRef])

    return null
}

export default Canvas