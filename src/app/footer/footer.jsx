import MenuOptions from "../menu-options/menu-options";
import "./footer.css"

const Footer = () => {
    
    
    return ( 
        <footer className="foot">
            <nav className="">
                <MenuOptions class={ "foot__options" }/>

            </nav>

        </footer> 
     );
}
 
export default Footer;