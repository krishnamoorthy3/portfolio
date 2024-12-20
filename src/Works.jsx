import "./Work.css"
import { FaExternalLinkAlt } from "react-icons/fa";
import work1 from "./assets/img-3.jpg"
const Works = () => {
    let projects=[
        {
            img:work1,
            title:"Title",
            discription:"Check out some of my design projects, meticulously crafted with love and dedication,"
        },
        {
            img:work1,
            title:"Title1",
            discription:"Check out some of my design projects, meticulously crafted with love and dedication,"
        }
    ]
    return (
        <>
            <section className="padding-sec-wrapper ">
                <div className="container">
                    <div className="home-sec-1-content">
                        <div className="text-center">
                            <h1>Works & Projects</h1>
                            <p className="my-4">Check out some of my design projects, meticulously crafted with love and dedication,<br/> each one reflecting the passion and soul I poured into every detail.</p>
                        </div>
                        <div className="row mt-5 gap-5">
                            {projects.map(item=>
                                    <div className="col-md-4" key={item.title}>
                                        <div className="work-sec-wrapp">
                                            <div className="img-work-hover">
                                                <img src={item.img} alt="" className="w-100" />
                                            </div>
                                            <div className="work-sec-ab">
                                                    <div  className="workp-fs">
                                                        <FaExternalLinkAlt />
                                                    </div>
                                                    <div className="workcontent-fs text-center">
                                                        <h3>{item.title}</h3>
                                                        <p>{item.discription}</p>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                            )}
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Works
