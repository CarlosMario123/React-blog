import { UserInfo } from "../moleculas/userInfo"
import { ContainLink } from "../moleculas/contain-link"
export function Header(){
   
    return (
        <header className="w-full flex bg-slate-200 justify-between py-4 px-7 ">
           <UserInfo/>
           <ContainLink/>
        </header>
    )
}