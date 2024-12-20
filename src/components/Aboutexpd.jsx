import "./Aboutexpd.css"
import PropTypes from "prop-types";
// import { PiStudentBold } from "react-icons/pi";
// import { FaComputer } from "react-icons/fa6";
const Aboutexpd = ({data}) => {
    return (
            <>
                <div className="home-sec-1-content">
                <h3 className="mb-4 pb-2">{data[0].Heading}</h3>
                {data.map(item=>
                    <div className="about-exp-wrapper " key={item.title}>
                        
                        <div className="abt-b-inner row" >
                            <div className="col-2 text-center">
                                <div className="abt-b-inner-icon">
                                    {item.icon}
                                </div>
                            </div>
                            <div className="col-10 ">
                                <p>{item.year}</p>
                                <h5 className="abtex-h">{item.title}</h5>
                                <p>{item.role}</p>
                            </div>
                        </div>
                    </div>
                )}
                </div>
            </>
    )
}
Aboutexpd.propTypes={
    data:PropTypes.array
}
export default Aboutexpd
