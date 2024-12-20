import "./Homepage.css"
import Firstsec from "./components/Firstsec"
import Contentap from "./components/Contentap"
import img1 from "./assets/partner2.webp"
import Works from "./Works"
import { FaCircle } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import PropTypes from "prop-types"
const Homepage =({itemcontcom})=>{
    const item=[
        {p:"Hello There!"},
        {h:["h2","I’m Bentos Walker, a product designer crafting user-centric design with pixel-perfect precision."]},
        {p:[<FaCircle className="icon-green-style" key="icon-g"/>,`Available for Freelancing`]},
        {button:{
            icon:<GoDownload/>,
            href:"/Contact",
            title:"Download",
        }}
    ]
    const item2=[
        {h:["h2","Company I Worked With"]},
        {img:{
            src:img1,
            alt:"img"
        }}
    ]
    
    return (
        <>
            <section className="padding-sec-wrapper">
                <div className="container">
                    <div className="row row-gap-5">
                        <div className="col-lg-4 col-md-5">
                            <Firstsec/>
                        </div>  
                        <div className="col-lg-8 col-md-7">
                            <Contentap item={item}/>
                            <div className="mt-3 mt-tsm-5">
                                <Contentap  item={item2}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Works/>
            <section className="mb-5">
                <div className="container text-center pad-home-wrap">
                    <Contentap  item={itemcontcom} />
                </div>
            </section>
        </>
    )
}
Homepage.propTypes={
    itemcontcom:PropTypes.array
}
export default Homepage