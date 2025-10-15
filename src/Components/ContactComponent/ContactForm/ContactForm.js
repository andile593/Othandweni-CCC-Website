import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className='contact-container'>
        <h1 className='contact-title roboto-bold'>Get In Touch With Us</h1>
        <p className="contact-subheading roboto-regular">We’re here to connect with you. Reach out for prayer, volunteering, or general inquiries.</p>

        <form action="" className="contact-form">
            <input type="text" className="fullname roboto-medium" placeholder='Full Name'/>
            <input type="text" className="email roboto-medium"  placeholder='Email Address'/>
            <input type="text" className="subject roboto-medium" placeholder='Subject'/>
            <textarea name="" id="" className="message-container roboto-medium" placeholder='Your message'></textarea>
            <button type="submit" className="submit-btn roboto-medium">Submit</button>
        </form>
    </div>
  )
}

export default ContactForm