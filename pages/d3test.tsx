import { useRef } from "react";
import Canvas from "../src/components/Canvas";
import styles from '../styles/Home.module.css'



function D3Test() {
    const ref = useRef(null)
    return typeof ref.current === "object" ? <div className="main-container"><div ref={ref} id="anchor" className="main svg-container">
            {ref !== null && <Canvas id="anchor" parentRef={ref}/>}
        </div> </div>: <div></div>
    
}

export default D3Test