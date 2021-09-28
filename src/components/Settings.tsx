import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react"
import { TuningContext } from "../contexts/tuningContext"
import { mbiraTuning } from "../data/mbiraTunning"
import { IMbiraTuning, SetStateString } from "../types/types"
import styled from 'styled-components'

function Settings() {
    const { tuning, setTuning } = useContext(TuningContext)
   
   

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
                <img src={`/images/Ephat_Mujuru.jpeg`} alt="" /> 
            </div>
        </div>
    )
}

export default Settings