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
                {/* <Image src={ball} alt="ball" className="raket__ball-img"/>
                <div className="raket__ball-text">
                    <h2>Nuestras Raquetas</h2>
                    <p>Conoce nuestras raquetas y</p>
                    <p> Aprende a jugar Tennis como un profesional</p>
                </div> */}
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