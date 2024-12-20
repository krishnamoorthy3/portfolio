import ContactForm from "./ContactForm"
import Contactinfo from "./Contactinfo"
import Contentap from "./components/Contentap"
import PropTypes from "prop-types"
const Contact = ({itemcontcom}) => {
    return (
        <>
            <section className="padding-sec-wrapper">
                <div className="container">
                    <div className="home-sec-1-content">
                        <div className="text-center">
                            <p>Contact</p>
                            <h2>Get in Touch with Me!</h2>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-5">
                                <Contactinfo />
                            </div>
                            <div className="col-lg-7 ">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-5 mtc-mob"> 
                <div className="container text-center pad-home-wrap">
                    <Contentap  item={itemcontcom} />
                </div>
            </section>
        </>
    )
}
Contact.propTypes={
    itemcontcom:PropTypes.array
}
export default Contact
