import { Boton } from "../atomos/boton"
export function Botones({names}){
   return(
      <div className="flex gap-x-10 justify-evenly">
         {names.map((e)=>{
              return <Boton text={e}/>
         })}
      </div>
   )
}