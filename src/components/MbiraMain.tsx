import React, { useCallback, useEffect, useRef, useState } from "react";
import * as Tone from "tone"
import { ToneContext } from "../contexts/ToneContext";
import { TuningContext } from "../contexts/TuningContext";
import Canvas from "./Canvas";
import Settings from "./Settings";

function MbiraMain() {
    const [tuning, setTuning] = useState('Equal Temperament')
    const [synth, setSynth] = useState({} as Tone.AMSynth)
    useEffect(() => {

        setSynth(new Tone.AMSynth().toDestination())

    }, [])
    const ref = useRef(null)

    return typeof ref.current === "object" ? <div className="main-container">
        <h1>MBIRA</h1>
        <TuningContext.Provider value={{ tuning, setTuning }}>
            { Object.keys(synth).length && <ToneContext.Provider value={synth}>

                <Settings />

                <div ref={ref} id="anchor" className="main svg-container">
                    {ref !== null && <Canvas id="anchor" parentRef={ref} />}
                </div>

            </ToneContext.Provider>}
        </TuningContext.Provider>
    </div>
        : <div></div>

}

export default MbiraMain