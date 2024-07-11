
import logo from "./assets/CarimboVanessaNails.svg";

function Header (){
    return (
        <div className="container">
            <img src={logo} alt="logo" />
        
                <h1> Vanessa Nails</h1>
            
            <div className="nav">
            <a href="">Home</a>
            <a href="">Serviços</a>
            </div>
        </div>
    )
}

export default Header;

