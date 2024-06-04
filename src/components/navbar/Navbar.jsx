import { useEffect, useState } from "react";
import "./Navbar.css"
import { FaUniversity } from "react-icons/fa";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 800 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [menu, setMenu] = useState(false)
  const toggleMenu = () => {
    menu ? setMenu(false): setMenu(true);
  }

  return (
    <nav className={`container ${sticky ? "dark-nav": ""}`}>
        <div className="logo">
        <FaUniversity /> <span>Random College </span>
        </div>

        <ul className={menu ? "":"hide-menu"}>
            <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to="programs" smooth={true} offset={-260} duration={500}>Programs</Link></li>
            <li><Link to="about" smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li><Link to="campus" smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to="testimonials" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><button type="button" className="button"><Link to="contact" smooth={true} offset={-240} duration={500}>Contact Us</Link></button></li>
        </ul>
        <GiHamburgerMenu className="menu-icon" onClick={toggleMenu}/>
    </nav>
  )
}
