
import Header from '../header/header';
import './about.css'

import './../../assets/Images/arrow.svg'
import { MdArrowRightAlt } from "react-icons/md";
export const About = () => {
    return (  
        <article className="about">
            
            <Header/>
            
            <h1 className="about__title">Las mejores raquetas para jugar <b>Tenis</b></h1>

            <button className="about__button">
                ACERCA DE NOSOTROS 
                < MdArrowRightAlt size={25}/>
            </button>
        </article>
    );
}
 
