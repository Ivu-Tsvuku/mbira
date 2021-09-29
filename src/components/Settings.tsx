import { useContext } from "react"
import { TuningContext } from "../contexts/TuningContext"
import { mbiraTuning } from "../data/mbiraTunning"
import { IMbiraTuning, SetStateString } from "../types/types"
import Image from 'next/image'

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
                <Image height={200} width={200} src={`/images/${tuning.replace(' ','')}.jpeg`} alt="" /> 
            </div>
        </div>
    )
}

export default Settings