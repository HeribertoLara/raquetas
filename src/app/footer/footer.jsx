import MenuOptions from "../menu-options/menu-options";
import facebook from "./../../assets/Images/facebook-icon.svg"
import instagram from "./../../assets/Images/instagram-icon.svg"
import linkedin from "./../../assets/Images/linkedin.svg"
import twitter from "./../../assets/Images/twitter-icon.svg"
import vimeo from "./../../assets/Images/facebook-icon.svg"
import logo from "./../../assets/Images/logo.svg"
import Image from "next/image";


import "./footer.css"
import SocialBar from "../social-bar/social-bar";


const Footer = () => {
    
    const networks = [
        {
            id:1,
            name:facebook,
            alt:"facebook"

        },
        {
            id:2,
            name:instagram,
            alt:"instagram"
        },
        {
            id:3,
            name:linkedin,
            alt:"linkedin"
        },
        {
            id:4,
            name:twitter,
            alt:"twitter"
        },
        {
            id:5,
            name:vimeo,
            alt:"vimeo"
        },
    ]
    return ( 
        <footer className="foot">
            <nav className="">
                <MenuOptions class={ "foot__options" }/>

            </nav>

            <section className="foot__section">

                <nav>
                    <ul className="foot__networks">
                        {
                            networks.map((network) => (

                                <SocialBar key={network.id} name={network.name} alt={network.alt} />
                            ))
                        }
                    </ul>
                </nav>

                <Image src={logo} alt="logo" height={50} width={50} className="menu__logo" />
            </section>


        </footer> 
     );
}
 
export default Footer;