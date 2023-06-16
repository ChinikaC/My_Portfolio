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
import { BsGit } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { LuCloudCog } from "react-icons/lu";
import { SiIntellijidea } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { GiElephant } from "react-icons/gi";
import { BsTerminalFill } from "react-icons/bs";
import { BsKanban } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";

const TechnologyStack = () => {
  return (

    <div className="technologyStackLogos">
      <h1>My Technology Stack</h1>
      <h2>The tools, libraries, frameworks and technologies that I am familiar with include:</h2>
      <ul>
        <li>
          Java <FaJava />
        </li>
        <li>
          SQL <BsFiletypeSql />
        </li>
        <li>
          PostgreSQL <SiPostgresql />
        </li>
        <li>
          HTML <ImHtmlFive2 />
        </li>
        <li>
          CSS <SiCss3 />
        </li>
        <li>
          JavaScript <SiJavascript />
        </li>
        <li>
          Spring Boot <SiSpring />
        </li>
        <li>
          React <FaReact />
        </li>
        <li>
          Node.js <FaNodeJs />
        </li>
        <li>
          JUnit <SiJunit5 />
        </li>
        <li>
          Git <BsGit />
        </li>
        <li>
          GitHub <AiFillGithub />
        </li>
        <li>
          Postman <SiPostman />
        </li>
        <li>
          Postico <GiElephant />
        </li>
        <li>
          RESTful API <LuCloudCog />
        </li>
        <li>
          Terminal <BsTerminalFill />
        </li>
        <li>
          IntelliJ <SiIntellijidea />
        </li>
        <li>
          Visual Studio Code <SiVisualstudiocode />
        </li>
        <li>
          Kanban <BsKanban />
        </li>
      </ul>

      <h3> And a little of: </h3>
      <ul>
        <li>
          Python <FaPython />
        </li>
        <li>
          Jest <SiJest />
        </li>
      </ul>

    </div>
  )
};

export default TechnologyStack;