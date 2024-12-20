import "./ContactForm.css"
import { IoMail } from "react-icons/io5";
const ContactForm = () => {
    return (
        <div>
            <form action="" className="contact-form-wrapper">
                <div className="row ">
                    <div className="col-md-6 con-frm-inp-wrapper">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" className="form-control" />
                    </div>
                    <div className="col-md-6 con-frm-inp-wrapper">
                        <label htmlFor="Email">Email</label>
                        <input type="mail" id="Email" className="form-control" />
                    </div>
                    <div className="col-12 con-frm-inp-wrapper">
                        <label htmlFor="YourMessage">Your Message</label><br />
                        <textarea  id="YourMessage" className="form-control" rows={4}></textarea>
                    </div>
                    <div className="col-12 con-frm-inp-wrapper">
                        <button className="content-btn-d">Send me Mail <IoMail/></button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactForm
