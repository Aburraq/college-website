import "./About.css";
import video_thumbnail from "../../assets/video_thumbnail.png";
import { FaCirclePlay } from "react-icons/fa6";

export default function About({setIsPlay}) {
  return (
    <div className="about container">
      <div className="about-left">
        <img className="about-img" src={video_thumbnail} alt="Photo of three graduate students" />
        <FaCirclePlay onClick={() => {setIsPlay(true)}} size={"75px"} style={{cursor:"pointer", width:"60px", position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", color:"whitesmoke"}} />
      </div>
      <div className="about-right">
        <h3>About Random College</h3>
        <h2>For Your Bright Future</h2>
        <p>Unlock your potential at Random College, where cutting-edge technology meets innovative teaching. Our state-of-the-art facilities and world-renowned faculty are dedicated to providing an unparalleled educational experience.</p>
        <p>Experience a vibrant campus life at Random College, where students thrive both inside and outside the classroom. From our expansive library and collaborative study spaces to our exciting extracurricular activities and clubs, there's always something happening.</p>
        <p>At Random College, we believe in the power of experiential learning. Our students gain hands-on experience through internships, research projects, and community service, ensuring they are well-prepared for their future careers.</p>
      </div>

    </div>
  )
}
