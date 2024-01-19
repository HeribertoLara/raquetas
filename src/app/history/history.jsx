import Image from "next/image";
import "./history.css"
import arrow from "./../../assets/Images/arrow.svg"
const History = () => {
    
    return ( 
        <article className="history">
            <h1 className="history__title"> Tenis</h1>
            <section className="history__section">

                <h2> Raquetas. Accesorios. Pelotas</h2>
                <p>Conoce nuestras raquetas, y aprende a jugar</p>
                <p> tenis como un profesional</p>
            </section>
            <button className="history__button">HISTORIA
                <Image src={arrow} alt="icon arrow"/>
            </button>

        </article>
     );
}
 
export default History;