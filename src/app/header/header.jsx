import logo from "./../../assets/Images/logo.svg"
import Image from 'next/image';
import Menu from "./../menu/menu"
import "./header.css"

const Header = () => {
    
    return (
        <header className="header">
            <Image src={logo} alt="logo" height={50} width={50} className="header__logo" />
            <Menu />
            <section className="header__lenguages">

                <button className="menu__es">ES</button>
                <button className="menu__en">EN</button>
            </section>
        </header>
        
     );
}

export default Header;