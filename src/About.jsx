import Firstsec from "./components/Firstsec"
import Contentap from "./components/Contentap"
import "./About.css"
import { GoDownload } from "react-icons/go";
import Aboutexpd from "./components/Aboutexpd";
import PropTypes from "prop-types"
import { PiStudentBold } from "react-icons/pi";
import { FaComputer } from "react-icons/fa6";
const About = ({itemcontcom}) => {
    const aboutData1=[
            {h:["h2","I’m Bentos Walker, a product designer."]},
            {p:"I am a San francisco-based product designer with a focus on web design, illustration, a visual development. I have a diverse range of experience having worked across various fields and industries."},
            {p:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."},
            {button:{
                icon:<GoDownload/>,
                href:"/Contact",
                title:"Download",
            }}
        ]
    const experience=[
        {   
            Heading:"Experience",
            icon:<FaComputer/>,
            year:"2021 - Present",
            title:"Envato Theme Developer4",
            role:"Web Designer"
        },
        {
            icon:<FaComputer/>,
            year:"2022 - Present",
            title:"Envato Theme Developer3",
            role:"Web Designer"
        },
        {
            icon:<FaComputer/>,
            year:"2023 - Present",
            title:"Envato Theme Developer2",
            role:"Web Designer"
        },
        {
            icon:<FaComputer/>,
            year:"2024 - Present",
            title:"Envato Theme Developer1",
            role:"Web Designer"
        },
    ]
    const education=[
        {   
            Heading:"Education",
            icon:<PiStudentBold/>,
            year:"2013 - 2015",
            title:"Bachelor Degree of Information Technology",
            role:"State University bangladesh"
        },
        {
            icon:<PiStudentBold/>,
            year:"2022 - Present",
            title:"Higher secoundery Education",
            role:"Premium College United VC"
        },
        {
            icon:<PiStudentBold/>,
            year:"2023 - Present",
            title:"Webster College",
            role:"UI/UX Design"
        },
        {
            icon:<PiStudentBold/>,
            year:"2024 - Present",
            title:"secoundery Education",
            role:"Web Designer"
        },
    ]
    return (
        <>
            <section className="padding-sec-wrapper pt-m-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <Firstsec/>
                        </div>
                        <div className="col-lg-8">
                            <Contentap item={aboutData1}/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="padding-sec-wrapper pt-m-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <Aboutexpd data={education}/>
                        </div>
                        <div className="col-md-6">
                            <Aboutexpd data={experience}/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-5">
                <div className="container text-center pad-home-wrap">
                    <Contentap  item={itemcontcom} />
                </div>
            </section>
        </>
    )
}
About.propTypes={
    itemcontcom:PropTypes.array
}
export default About
