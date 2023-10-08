import { Link } from "react-router-dom";
import "./MiddleComponent.css";

const BodyContaint = () => {
  return (
    <div className="resume-body">
      <div className="container-left">
        <h1 className="heading">Unleash your Full Potential</h1>
        <div className="sub-heading">
          Take Your Career to New Heights with our AI-Boosted All-in-One
          Platform. Start for Free and Elevate with Premium Options.
        </div>
        <Link to={"/templates"}>
          <button className="bn5">Get started - It’s free ✨</button>
        </Link>
        <div className="message">
          <img
            src="https://assets.flowcvassets.com/landing/flowcv-loved-by-users.webp"
            width={200}
            height={60}
          />
          <div>Loved by over 1.4 million happy users</div>
        </div>
      </div>
      <div className="container-right">
        <img
          src="https://assets.flowcvassets.com/landing/flowcv-hero-image-kim-1300.webp"
          className="main-img"
        />
      </div>
    </div>
  );
};

export default BodyContaint;
