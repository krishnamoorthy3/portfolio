import img1 from "../assets/profile.webp"
import Aboutsecicon from "./Aboutsecicon"
const Firstsec = () => {
    
    return (
        <div className="home-sec-1-content">
            <div className="text-center">
                <img src={img1} alt="" className="w-90" />
                <div className="about0dn">
                    <Aboutsecicon/>
                </div>
            </div>
        </div>
    )
}

export default Firstsec
