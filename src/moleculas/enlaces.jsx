import { Enlace } from "../atomos/enlace"
export function Enlaces({names}){

    return (<div className="flex gap-x-6">
        {
        names.map((e,index)=> {
                    return <Enlace name={e} key={index}/>
             })
        }
    
    
    </div>)
}