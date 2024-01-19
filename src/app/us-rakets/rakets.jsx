import Image from "next/image";
import ball from "./../../assets/Images/ball-color-court.jpg"
import raqueta from "./../../assets/Images/raqueta.jpg"
import athlete from "./../../assets/Images/athlete.jpg"
import "./rakets.css"
import Galery from "../galery/galery";
const UsRackets = () => {
    return ( 
        <article className="raket">
            <div className="raket__ball">
                <Galery/>

            </div>
            <section className="raket__galery">
                <Image src={ raqueta } alt="raqueta"/>
                <Image src={ raqueta } alt="raqueta"/>
                <Image src={ raqueta } alt="raqueta"/>
                <Image src={ raqueta } alt="raqueta"/>

            </section>
            <section className="raket__athlete">
                <Image src={ athlete } alt="athlete"/> 

            </section>


        </article>
     );
}
 
export default UsRackets;