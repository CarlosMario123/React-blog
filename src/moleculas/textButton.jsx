import { TextoSmall } from "../atomos/TextoSmall"
import { Botones } from "./Botones"

export function TextoButton(){
    
    return (
        <div className="flex flex-col w-1/3 gap-y-32 items-center bg-slate-100 px-3 py-4 rounded-md justify-center shadow-sm shadow-black">
            <TextoSmall texto={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eveniet perspiciatis rem vitae molestias ullam mollitia libero enim sit cupiditate dolore fugit tenetur, accusamus similique quas sed amet iste consequuntur."}/>
             <Botones names={["Button1","Button2"]}/>
        </div>
    )
}