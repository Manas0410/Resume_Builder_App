//rn creating only one template so, will hardcode it later can fetch api on this page for templates
import { Link } from "react-router-dom";
import "./TemplateP.css/Template.css";
const TemplateP = () => {
  return (
    <div className="templateContainer">
      <h1>RESUME TEMPLATES</h1>
      <div className="templateBox">
        <Link to={"/create"}>
          <img src="./template1.PNG" alt="" height={"285px"} />
          <span>FIRST TEMPLATE</span>
        </Link>
      </div>
      <div className="templateBox">RESUME TEMPLATES</div>
      <div className="templateBox">RESUME TEMPLATES</div>
      <div className="templateBox">RESUME TEMPLATES</div>
      <div className="templateBox">RESUME TEMPLATES</div>
      <div className="templateBox">RESUME TEMPLATES</div>
      <div className="templateBox">RESUME TEMPLATES</div>
      <div className="templateBox">RESUME TEMPLATES</div>
      <div className="templateBox">RESUME TEMPLATES</div>
      <div className="templateBox">RESUME TEMPLATES</div>
      <div className="templateBox">RESUME TEMPLATES</div>
      <div className="templateBox">RESUME TEMPLATES</div>
      <div className="templateBox">RESUME TEMPLATES</div>
      <div className="templateBox">RESUME TEMPLATES</div>
      <div className="templateBox">RESUME TEMPLATES</div>
      <div className="templateBox">RESUME TEMPLATES</div>
      <div className="templateBox">RESUME TEMPLATES</div>
      <div className="templateBox">RESUME TEMPLATES</div>
      <div className="templateBox">RESUME TEMPLATES</div>
    </div>
  );
};

export default TemplateP;
