import "./Hero.css";
import { FaArrowCircleRight } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="hero container">
        <div className="hero-text">
            <h1>Your Future Starts Here</h1>
            <p>A flock of flamingos wearing tiny top hats performs a synchronized dance routine in Random College parking lot.</p>
            <button className="button">Join us <FaArrowCircleRight style={{verticalAlign:"middle", marginBottom:"1.5px"}} /></button>
        </div>
    </div>
  )
}
