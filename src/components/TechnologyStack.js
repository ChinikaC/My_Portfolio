import { ImHtmlFive2 } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { SiPostgresql } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiJunit5 } from "react-icons/si";
import { SiJest } from "react-icons/si";

const TechnologyStack = () => {
  return ( 
  
    <div className="technologyStackLogos"> 
    <h1>My Technology Stack</h1>
    <h2>The tools, libraries and frameworks that I am familiar with:</h2>
    <ul>
    <li>
    Java <FaJava/>
    </li>
    <li>
    Spring Boot <SiSpring/>
    </li>
    <li>
    SQL <BsFiletypeSql/>
    </li>
    <li>
    PostgreSQL <SiPostgresql/>
    </li>
    <li>
    HTML <ImHtmlFive2 />
    </li>
    <li>
    CSS <SiCss3/>
    </li>
    <li>
    JavaScript <SiJavascript/>
    </li>
    <li>
    React <FaReact/>
    </li>
    <li>
      JUnit <SiJunit5/>
    </li>
    <li>
      Jest <SiJest/>
    </li>
  
    </ul>
   </div>
  )
};

export default TechnologyStack;