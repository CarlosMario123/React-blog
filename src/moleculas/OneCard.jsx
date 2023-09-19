import { TextoSmall } from "../atomos/TextoSmall"
import { Boton } from "../atomos/boton"
export function OneCard(){
    return(
       
        <div className="flex flex-col items-center px-5 py-5 rounded-md shadow-sm w-72 bg-slate-100 shadow-black gap-y-6 hover:scale-125 hover:shadow-black hover:shadow-md">
         <TextoSmall texto={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ea ex fugit numquam officia. Vero, harum, excepturi facere odio accusantium aperiam cupiditate illo rerum voluptatibus alias impedit quas saepe corporis."
         }/>
          <Boton text={"Aceptar"}/>
        </div>
    )
}