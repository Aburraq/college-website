import "./Programs.css";
import program_1 from "../../assets/program_1.png";
import program_2 from "../../assets/program_2.png";
import program_3 from "../../assets/program_3.png";
import { MdSchool } from "react-icons/md";
import { GiBrain } from "react-icons/gi";
import { PiStudentFill } from "react-icons/pi";

export default function Programs() {
  return (
    <div className="container">
    <div className="programs">
        <div className="program">
            <img src={program_1} alt="Photo of a graduated college student" />
            <div className="caption">
                <MdSchool size={"50px"} />
                <p>Bachelor Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program_2} alt="Photo of a graduated college student" />
            <div className="caption">
                <PiStudentFill size={"50px"}  />
                <p>Master's Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program_3} alt="Photo of a graduated college student" />
            <div className="caption">
                <GiBrain size={"50px"}  />
                <p>PhD Degree</p>
            </div>
        </div>
    </div>
    </div>

  )
}
