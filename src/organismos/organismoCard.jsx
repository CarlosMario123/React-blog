import { useState } from "react"
import { routeImgs } from "../js/routeImgs";
import { Card } from "../moleculas/Card";
export function OrganismoCards(){
    const [info,setInfo] = useState(routeImgs());
    
    return (<div className="flex flex-wrap justify-center w-full mt-16 gap-x-7">
         
         {
           info.map( (e,i) =>{
               return <Card key={i} url={e}/>
           })
         }
    </div>)
}