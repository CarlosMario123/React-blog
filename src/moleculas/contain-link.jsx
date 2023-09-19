import { Enlaces } from "./enlaces"
import { ImgRadius } from "../atomos/img-radius"
import { useState } from "react"
export function ContainLink(){
     const [names,setnames] = useState(["Home","Recientes","Ranking","Nosotros"]);
    return(

        <div className="flex items-center gap-x-7">
         <Enlaces names={names}/>
         <ImgRadius url={"https://www.cnet.com/a/img/resize/7589227193923c006f9a7fd904b77bc898e105ff/hub/2021/11/29/f566750f-79b6-4be9-9c32-8402f58ba0ef/richerd.png?auto=webp&width=768"}/>
        </div>
    )
}