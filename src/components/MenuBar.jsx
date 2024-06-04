import { AiOutlineHome, AiOutlineFolder } from "react-icons/ai";
import { BsPerson, BsTelephone } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const MenuBar = () => {
  const navigate = useNavigate();
  return (
    <div className="Menubar">
      <div className="backgrondMenu">
        <AiOutlineHome
          className="icon"
          id="home"
          data-tooltip-content="Home"
          onClick={() => {
            navigate("/");
          }}
        />
        <BsPerson
          className="icon"
          id="me"
          data-tooltip-content="About Me"
          onClick={() => {
            navigate("/me");
          }}
        />
        <AiOutlineFolder
          className="icon"
          id="project"
          data-tooltip-content="Project"
          onClick={() => {
            navigate("/project");
          }}
        />
        <BsTelephone
          className="icon"
          id="contact"
          data-tooltip-content="Contact"
          onClick={() => {
            navigate("/contact");
          }}
        />
        <ReactTooltip anchorId="home" />
        <ReactTooltip anchorId="me" />
        <ReactTooltip anchorId="project" />
        <ReactTooltip anchorId="contact" />
      </div>
    </div>
  );
};

export default MenuBar;
