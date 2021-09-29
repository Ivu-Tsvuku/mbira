import React, { useCallback, useRef, useState } from "react";
import { TuningContext } from "../contexts/tuningContext";
import Canvas from "./Canvas";
import Settings from "./Settings";

function MbiraMain() {
    const [tuning, setTuning] = useState('Equal Temperament')


    const ref = useRef(null)

    return typeof ref.current === "object" ? <div className="main-container">
        <h1>MBIRA</h1>
        <TuningContext.Provider value={{tuning, setTuning}}>
            <Settings />
            <div ref={ref} id="anchor" className="main svg-container">
                {ref !== null && <Canvas id="anchor" parentRef={ref} />}
            </div>
        </TuningContext.Provider>
    </div>
        : <div></div>

}

export default MbiraMain