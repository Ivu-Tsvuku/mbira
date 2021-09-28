import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react"
import { TuningContext } from "../contexts/tuningContext"
import { mbiraTuning } from "../data/mbiraTunning"
import { IMbiraTuning, SetStateString } from "../types/types"

function Settings() {
    const { tuning, setTuning } = useContext(TuningContext)

    return (
        <div className="settings">
            <h3>Settings</h3>
            <select value={tuning} name="tuning" id="tunning" onChange={e => setTuning(e.target.value)}>
                {mbiraTuning.map(({ source }: IMbiraTuning) => {

                    return (
                        <option
                            key={source}
                            value={source}>
                            {source}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default Settings