import LeftToolsP from "./LeftTools/LeftToolsP";
import MiddleEdittingP from "./MiddleEditting/MiddleEdittingP";
import RightPreviewP from "./RightPreview/RightPreviewP";
import "./CreateResumePageCss/CreateResumePage.css";

const CreateResumeP = () => {
  return (
    <div className="container">
      <div className="left-column">
        <LeftToolsP />
      </div>
      <div className="middle-column">
        <MiddleEdittingP />
      </div>
      <div className="right-column">
        <RightPreviewP />
      </div>
    </div>
  );
};

export default CreateResumeP;
