import { Header } from "../organismos/Navbar";
import { OrganismoForm } from "../organismos/OrganismoForm";
import { OrganismoCards } from "../organismos/organismoCard";
import { OrganismoOne } from "../organismos/OrganismoOne";
import { Footer } from "../organismos/Footer";
export function Page(){
   return <>
     <Header/>
    <OrganismoForm/>
     <OrganismoCards/>
     <OrganismoOne/>
     <Footer/>
    </>
}