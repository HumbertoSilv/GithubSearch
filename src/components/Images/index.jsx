import { Background, Logo } from "./styles"
import logo from "../../img/logo.png"
import background from "../../img/background.png"


export const Images = () => {
    return(
        <div>
            <Logo
                src={logo} 
                alt="logo" 
            />
            <Background
                src={background} 
                alt="background" 
            />
        </div>
    )
}