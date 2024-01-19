import Image from "next/image";
import "./social-bar.css"

const SocialBar = ({ name, alt}) => {
    return (
        
            <li className="social-bar">
                <Image src={name} alt={alt} width={50} height={50}  />
            </li>
        
      );
}
 
export default SocialBar;