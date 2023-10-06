import LeftToolsP from "./LeftTools/LeftToolsP";
import MiddleEdittingP from "./MiddleEditting/MiddleEdittingP";
// import RightPreviewP from "./RightPreview/RightPreviewP";
import "./CreateResumePageCss/CreateResumePage.css";
import PdfGenerator from "./MiddleEditting/SaveAsPdfComponent";

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
        {/* <RightPreviewP /> */}
        <PdfGenerator />
      </div>
    </div>
  );
};

export default CreateResumeP;
