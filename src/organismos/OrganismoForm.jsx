import { TextoButton } from "../moleculas/textButton"
import { Form } from "./form"
export function OrganismoForm(){
   return <div className="w-full mt-9 px-5 flex flex-row justify-evenly ">
        <TextoButton/>
        <Form/>
   </div>
}