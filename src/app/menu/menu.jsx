

import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import logo from "./../../assets/Images/logo.svg"
import './menu.css'
import MenuOptions from "../menu-options/menu-options";

const Menu = () => {
   
    const clase = "menu__options"
    return (
        <header>
            <nav className="menu">
                <Image src={logo} alt="logo" height={50} width={50} className="menu__logo" />

                <MenuOptions class={clase}/>
                <section className="menu__lenguages">

                    <button className="menu__es">ES</button>
                    <button className="menu__en">EN</button>
                </section>
            </nav>
            <button className="menu-hamburguer">
                <IoMenu size={40} />
            </button>
        </header> 
     );
}
 
export default Menu;