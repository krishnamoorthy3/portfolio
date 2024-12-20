import "./navbar.css"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
const Navbar =()=>{
    const [mobbtn,setMobbtn]=useState(false)
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
            const handleScroll = () => {
                if (window.scrollY > 70) {
                    setScrolled(true); // Add the class when scroll position > 300px
                } else {
                    setScrolled(false); // Remove the class when scroll position <= 300px
                }
            };
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }, []);
    return (
        <>
            <header className="">
                <nav className={`navbar-wrapper header-wrapper ${scrolled ?"header-pos-fixed":""}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Link to="/"><img src="" alt="LOGO"/></Link>
                            </div>
                            <div  className="col">
                                <ul className="nav-ul-wrapper">
                                    <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                                    <li className="nav-item"><Link to="/Projects" className="nav-link">Projects</Link></li>
                                    <li className="nav-item"><Link to="/Contact" className="nav-link">Contact</Link></li>
                                    <li className="nav-item"><Link to="/About" className="nav-link">About</Link></li>
                                </ul>
                            </div>
                            <div className="col mobile-toggle">
                                <div className="toggle-icon" onClick={()=>setMobbtn(true)}>
                                    <div className="toggle-line"></div>
                                    <div className="toggle-line"></div>
                                    <div className="toggle-line"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className={mobbtn?"d-block":"d-none"}>
                    <ul className="nav-mob-ul-wrapper">
                        <li className="mob-nav-li-f"><span>Logo</span><button className="nav-mob-btn" onClick={()=>setMobbtn(false)}>x</button></li>
                        <li className="nav-item"><Link to="/" className="nav-link" onClick={()=>setMobbtn(false)}>Home</Link></li>
                        <li className="nav-item"><Link to="/Projects" className="nav-link" onClick={()=>setMobbtn(false)}>Projects</Link></li>
                        <li className="nav-item"><Link to="/Contact" className="nav-link" onClick={()=>setMobbtn(false)}>Contact</Link></li>
                        <li className="nav-item"><Link to="/About" className="nav-link" onClick={()=>setMobbtn(false)}>About</Link></li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Navbar