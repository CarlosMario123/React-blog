import { useState } from "react"
import { TextoSm } from "../atomos/TextoSm"
export function Parrafos(){

    const [text,setText] = useState("    Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet consectetur.")
    return (
        <div className="flex items-center justify-center w-1/2 gap-x-8">
           <TextoSm texto={text}/>
           <TextoSm texto={text}/>
           <TextoSm texto={text}/>
        </div>
    )
}