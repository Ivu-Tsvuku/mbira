import * as d3 from 'd3'
import { MutableRefObject, useContext, useEffect, useState } from 'react'
import { ToneContext } from '../contexts/ToneContext'
import { TuningContext } from '../contexts/TuningContext'
import mbira from '../d3.elements/mbira.d3'
import { d3SVGType } from '../types/types'

function Canvas({ id, parentRef }: {id: string, parentRef: MutableRefObject<HTMLElement | null> }) {
    const [loading, setLoading] = useState(true)
    const { tuning } = useContext(TuningContext)
    const synth = useContext(ToneContext)
    useEffect(() => {

        setLoading(false)

        if (!loading) {

            const svg: d3SVGType = d3.select(`#${id}`).append("svg")

            if (parentRef.current) mbira(svg, parentRef.current.offsetWidth, tuning, synth)
        }

        return () => {

            d3.select(`svg`).remove()
            setLoading(true)
        }
    }, [loading, id, parentRef, tuning, synth])

    return null
}

export default Canvas