import { ImHtmlFive2 } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { FaJava } from "react-icons/fa";

const TechnologyStack = () => {
  return ( 
  
    <div className="technologyStackLogos"> 
    <h1>My Technology Stack</h1>
    <h2>The tools, libraries and frameworks that I am familiar with:</h2>
    <ul>
    <li>
    HTML <ImHtmlFive2 />
    </li>
    <li>
    CSS <SiCss3/>
    </li>
    <li>
    Java <FaJava/>
    </li>
    </ul>
   </div>
  )
};

export default TechnologyStack;