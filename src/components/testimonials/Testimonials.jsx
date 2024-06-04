import "./Testimonials.css";
import user_1 from "../../assets/user_1.png";
import user_2 from "../../assets/user_2.png";
import user_3 from "../../assets/user_3.png";
import user_4 from "../../assets/user_4.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TbBackground } from "react-icons/tb";
import { useRef } from "react";

export default function Testimonials() {

    const forwardStyle = {
        position:"absolute",
        top:"50%",
        right:"0",
        transform:"translate(-50%)",
        padding:"15px",
        width:"50px",
        height:"50px",
        borderRadius:"50%",
        cursor:"pointer",
        background:"rgb(233, 233, 233)",
        zIndex:"1"
    }
    const backStyle = {
        position:"absolute",
        top:"50%",
        left:"0",
        transform:"translate(50%)",
        padding:"15px",
        width:"50px",
        height:"50px",
        borderRadius:"50%",
        cursor:"pointer",
        background:"rgb(233, 233, 233)",
        zIndex:"1"
    }

        const slider = useRef();
        let tx = 0;

    const slideForward = () => {
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }


  return (
    <div className="testimonials container">
        <IoIosArrowForward style={forwardStyle}  onClick={slideForward}/>
        <IoIosArrowBack style={backStyle} onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="Photo of graduate student " />
                            <div>
                                <h3>Michael Jackson</h3>
                                <span>2020 Bachelor Graduate</span>
                            </div>

                        </div>
                        <div>
                            <p>This place? It's like the Wild West of academia, but instead of cowboys, you've got stressed-out students fueled by enough coffee to power a small nation. I came here with dreams of becoming a Renaissance man (or woman, I'm not picky), and while I'm not sure I've achieved that quite yet, I've definitely learned a thing or two about the importance of caffeine and the art of napping in the library stacks.</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="Photo of graduate student " />
                            <div>
                                <h3>Britney Spears</h3>
                                <span>2023 Master Graduate</span>
                            </div>
                        </div>
                        <div>
                            <p>The professors here? They range from "inspiring genius" to "totally lost," but they all seem to have a shared love of grading papers at 3 am. The campus is a beautiful labyrinth of buildings, and I swear I've seen squirrels with PhDs.</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="Photo of graduate student " />
                            <div>
                                <h3>Oprah Winfrey</h3>
                                <span>2012 Bachelor Graduate</span>
                            </div>
                        </div>
                        <div>
                            <p>The best part? The friends. I met my soulmate in the Intro to Philosophy class (yes, we're both existentialists!), and I've made enough memories to last a lifetime. Oh, and the student loan debt, that's also pretty unforgettable.</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="Photo of graduate student " />
                            <div>
                                <h3>Jackie Chan</h3>
                                <span>2013 PhD Graduate</span>
                            </div>
                        </div>
                        <div>
                            <p>So, if you're looking for a college experience that's equal parts stimulating and exhausting, Random College is the place for you. Just make sure you bring a bottomless thermos and a good pair of noise-canceling headphones.</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    
  )
}
