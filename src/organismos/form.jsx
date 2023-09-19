import { Inputs } from "../moleculas/Inputs"
import { Boton } from "../atomos/boton"
export function Form(){
    return (
        <div className="flex flex-col w-1/3 bg-slate-100 px-3 py-4 rounded-md shadow-sm shadow-black justify-center gap-y-10">
          <Inputs/>
          <Boton text={"Enviar"}/>
        </div>
    )
}