"use client"
import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import "./menu.css"
import Link from 'next/link';


const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen)
  };

  return (
    

      <nav className={`navbar ${menuOpen ? 'navbar--mobile' : 'navbar--desktop'}`}>
        <button className="navbar__menu-icon" onClick={toggleMenu}>
          <IoMenu />
        </button>

        <ul className={`navbar__list ${menuOpen ? 'navbar__list--open' : ''}`}>
          <li className="navbar__item"><Link href="/">INICIO</Link></li>
          <li className="navbar__item"><Link href="/about">ACERCA DE NOSOTROS</Link></li>
          <li className="navbar__item"><Link href="/about">HISTORIA</Link></li>
          <li className="navbar__item"><Link href="/about">CONTACTO</Link></li>

        </ul>
      </nav>
      
  );
};

export default Menu;



/* 
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import logo from "./../../assets/Images/logo.svg"
import './menu.css'
import MenuOptions from "../menu-options/menu-options";

const Menu = () => {
   
    const clase = "menu__options"
    return (
        <header>
             <button 
                className="menu-icon"

             >
                <IoMenu size={40} />
            </button>
            <nav className="menu">
                <Image src={logo} alt="logo" height={50} width={50} className="menu__logo" />

                <MenuOptions class={clase}/>
                <section className="menu__lenguages">

                    <button className="menu__es">ES</button>
                    <button className="menu__en">EN</button>
                </section>
            </nav>
           
        </header> 
     );
}
 
export default Menu; */