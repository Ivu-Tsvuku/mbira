import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react"
import { TuningContext } from "../contexts/tuningContext"
import { mbiraTuning } from "../data/mbiraTunning"
import { IMbiraTuning, SetStateString } from "../types/types"
import styled from 'styled-components'

function Settings() {
    const { tuning, setTuning } = useContext(TuningContext)
    const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
`
    const Select = styled.select`
    
    `
    const H3 = styled.h3`
        font-weight: 500;
    `
    const ImgCont = styled.div`
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 50%;
    `
    const Img = styled.img`
    height: 100%;
    `
    const Li = styled.li`
    margin-bottom: 7px;
    background: ${props => props.className !== 'selected'? '#bebebe': 'pink'};
    padding: 7px;
    border-radius: 7px;
    list-style-type: none;
    `
    return (
        <StyledDiv className="settings">

            <ul>
                {mbiraTuning.map(({ source }: IMbiraTuning) => {

                    return (
                        <Li
                            key={source}
                            className={tuning === source ? 'selected': ''}
                            onClick={e => setTuning(source)}>
                            {source}
                        </Li>
                    )
                })}
            </ul>
            <ImgCont className="image-container">
                <Img src={`/images/Ephat_Mujuru.jpeg`} alt="" /> 
            </ImgCont>
        </StyledDiv>
    )
}

export default Settings