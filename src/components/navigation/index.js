import "./index.css"

const NavBar=()=>{
    return (
        <div className="navContainer">
            <img src="https://res.cloudinary.com/dsf2gec5l/image/upload/v1675319061/WebDev/E-commerce%20project/logo1_v1qqoj.webp"
            alt="website logo"
            className="navImg"></img>
            <ul className="navList">
                <li className="listItm">Home</li>
                <li className="listItm">Products</li>
                <li className="listCart">Cart <span className="navCart">0</span></li>
            </ul>

        </div>
        
    )
}
export default NavBar