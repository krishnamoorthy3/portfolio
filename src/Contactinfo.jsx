import { FaLocationDot,FaLinkedinIn,FaGithub } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import "./Contactinfo.css"
const Contactinfo = () => {
    const infodata=[
        {
            title:"Our Office:",
            detail:"Jurain,Dhaka Bangladesh",
            icon:FaLocationDot,
        },
        {
            title:"Email us:",
            detail:"Jurain,Dhaka Bangladesh",
            icon:IoMail,
        },
        {
            title:"LinkedIn:",
            detail:"Jurain,Dhaka Bangladesh",
            icon:FaLinkedinIn,
        },
        {
            title:"Github:",
            detail:"Jurain,Dhaka Bangladesh",
            icon:FaGithub,
        },
    ]
    return (
        <>
            <div className="contact-info-wrapper">
                <div className="row cont-info-row-g">
                    {infodata.map(item=>
                        <div className="col-12" key={item.title}>
                            <div className="con-info-inner">
                                <item.icon className="icon-c-o"/>
                                <h5>{item.title}</h5>
                                <p>{item.detail}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Contactinfo
