import "./Campus.css";
import gallery_1 from "../../assets/gallery_1.png";
import gallery_2 from "../../assets/gallery_2.png";
import gallery_3 from "../../assets/gallery_3.png";
import gallery_4 from "../../assets/gallery_4.png";
import { FaArrowCircleRight } from "react-icons/fa";

export default function Campus() {
  return (
    <div className="campus container">
        <div className="gallery">
            <img src={gallery_1} alt="Photo of the college" />
            <img src={gallery_2} alt="Photo of the college" />
            <img src={gallery_3} alt="Photo of the college" />
            <img src={gallery_4} alt="Photo of the college" />

        </div>
        <button type="button" className="button dark-button" >See more from us <FaArrowCircleRight style={{verticalAlign:"middle", marginBottom:"1.5px"}} /></button>
    </div>
  )
}
