import { useContext, useRef, useState } from "react"
import { TuningContext } from "../contexts/TuningContext"
import { mbiraTuning } from "../data/mbiraTunning"
import { IMbiraTuning, SetStateString } from "../types/types"
import Image from 'next/image'

function Settings() {
    const { tuning, setTuning, keyBVis, setKeyBVis } = useContext(TuningContext)
    const keyboardRef = useRef(null) 
    return (
        <div className="settings">

            <ul className="tuning-container">
                {mbiraTuning.map(({ source }: IMbiraTuning) => {

                    return (
                        <li
                            key={source}
                            className={tuning === source ? 'tunings selected': 'tunings'}
                            onClick={e => setTuning(source)}>
                            {source}
                        </li>
                    )
                })}
            </ul>
            <div className="image-container">
                <Image height={200} width={200} src={`/images/${tuning.replace(' ','')}.jpeg`} alt="" /> 
            </div>
            <div className="keyboard-toggle-container">
                <Image onClick={()=> setKeyBVis(!keyBVis)}className={ keyBVis ? 'visible bindings': 'hide bindings'} height={50} width={50}  src="/images/keyboard.svg" alt="" />
            </div>
        </div>
    )
}

export default Settings