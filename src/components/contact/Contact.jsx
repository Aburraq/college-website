import "./Contact.css"
import { TiMessages } from "react-icons/ti";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {

    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="container contact">
        <div className="contact-col">
            <h3>Send us a message <TiMessages style={{verticalAlign:"middle", marginBottom:"5px", marginLeft:"3px"}} /></h3>
            <p>We'd love to hear from you! Whether you have a question about our programs, admissions process, or simply want to learn more about our vibrant community, please don't hesitate to reach out.</p>
            <ul>
                <li><MdOutlineAlternateEmail style={{verticalAlign:"middle", marginRight:"3px"}} /> contact@randomCollege.com</li>
                <li><FaPhoneAlt style={{verticalAlign:"middle", marginRight:"3px"}}/> +1 234-567-8910</li>
                <li><FaLocationDot style={{verticalAlign:"middle", marginRight:"3px"}}/> 11 Flamingo Ave, Random <br /> RN 10234 United States</li>

            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label htmlFor="">Your Name</label>
                <input type="text" name="name" placeholder="Enter your name" required />
                <label htmlFor="">Phone Number</label>
                <input type="tel" name="phone" placeholder="Enter your phone number" required />
                <label htmlFor="">Write Your Message Here</label>
                <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
                <button type="submit" className="button dark-button">Submit <FaArrowCircleRight style={{verticalAlign:"middle", marginBottom:"1.5px"}} /></button>
            </form>
            <span>{result}</span>
        </div>

    </div>
  )
}
