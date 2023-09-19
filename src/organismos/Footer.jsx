import { ImgRadius } from "../atomos/img-radius"
import { Parrafos } from "../moleculas/Parrafos"
export function Footer(){
     
    return(
        <div className="flex items-center justify-around w-full px-6 py-8 mt-16 bg-slate-200">
          <ImgRadius url={"https://www.cnet.com/a/img/resize/7589227193923c006f9a7fd904b77bc898e105ff/hub/2021/11/29/f566750f-79b6-4be9-9c32-8402f58ba0ef/richerd.png?auto=webp&width=768"}/>
          <Parrafos/>
        </div>
    )
}