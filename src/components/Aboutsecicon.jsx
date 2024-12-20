import { FaLinkedinIn,FaGithub  } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { Link } from "react-router-dom";
const Aboutsecicon = () => {
    return (
            <>
                <h2>Bentos Walker</h2>
                <p>I am a Web Designer based in san francisco.</p>
                <div>
                    <ul className="contact-icons-wrapper">
                        <li><Link ><FaLinkedinIn/></Link></li>
                        <li><Link><FaGithub/></Link></li>
                        <li><Link><MdMail/></Link></li>
                    </ul>
                </div>
            </>
    )
}

export default Aboutsecicon
