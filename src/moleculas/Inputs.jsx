import { Input } from "../atomos/input"
export function Inputs(){
    return (  <div className="flex flex-col gap-y-5">
    <Input name={"Ingrese su nombre"}/>
    <Input name={"Ingrese sus apellido"}/>
    <Input name={"Ingrese su correo"}/>
 </div>)
}