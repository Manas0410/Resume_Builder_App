import { useEffect, useState, useRef } from "react";
import "./headerCss/header.css"; // Import the CSS file
import TemplateP from "../../TemplateComponents/TemplateP";

const Header = () => {
  const [flag, setFlag] = useState(false);
  const templateRef = useRef(null); // Create a ref for the TemplateP component

  // Handle the button click to toggle the flag
    const handleButtonClick = (event) => {
      event.stopPropagation()
    setFlag(true);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Check if the click event occurred outside of the TemplateP component
      if (
        flag &&
        templateRef.current &&
        !templateRef.current.contains(event.target)
      ) {
        setFlag(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [flag]);

  return (
    <div className="header-container">
      <div className="logo">Build Resume by MANAS</div>
      <button onClick={handleButtonClick}>GET STARTED</button>
      {flag && (
        <div className="templates-container" ref={templateRef}>
          <TemplateP />
        </div>
      )}
    </div>
  );
};

export default Header;
