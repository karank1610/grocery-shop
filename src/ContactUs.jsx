import { useEffect } from "react";

const ContactUs = () => {

    useEffect(()=>{
        window.scrollTo(0,0);
        document.title = "Contact Us";
    },[])
    return (
        <>
            <div className="contact-main">
                <div className="container">

                    <span className="contact-heading">Contact Us</span>
                    
                    <div className="contact-inner">


                        <div className="contact-form">
                            <span>Write Us</span>
                            <span>Join us a note and we will get back to you as quickly as possible.</span>

                            <form>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" required/>

                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" required/>

                                <label htmlFor="phno">Phone Number</label>
                                <input type="tel" id="phno" />

                                <label htmlFor="msg">What's on your mind?</label>
                                <textarea placeholder="" rows="5" id="msg" required></textarea>

                                <button type="submit">Submit</button>
                            </form>
                        </div>

                        <div className="contact-info">
                            <span>Store Information</span>

                            <p>
                                <strong>Address:</strong><br />
                                123 Street, City, London, 789AB
                            </p>

                            <p>
                                <strong>Phone:</strong><br />
                                (123) 4567-890
                            </p>

                            <p>
                                <strong>Email:</strong><br />
                                mail@example.com
                            </p>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default ContactUs;