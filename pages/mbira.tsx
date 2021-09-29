import { useEffect } from "react"
import MbiraMain from "../src/components/MbiraMain"
import { keyDownListerner } from "../src/lib/lib"



function Mbira() {
  useEffect(()=> {
    document.addEventListener('keydown', keyDownListerner)
    return () => document.removeEventListener('keydown', keyDownListerner)
  },[])
  return (
      <MbiraMain />
  )

}

export default Mbira