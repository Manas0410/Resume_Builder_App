import { useSelector } from "react-redux";
import "./PreviewCss/Preview.css";

const RightPreviewP = () => {
  const data = useSelector((state) => state.cartReducer.data);

  return (
    <div className="previewContainer">
      {Object.keys(data).map((sectionName, i) => {
        const sectionData = data[sectionName];
        if (sectionData.added) {
          return (
            <div key={i}>
              <span className="previewHeading">{sectionName}</span>
              <hr />
              {Object.keys(sectionData.content).map((contentKey, j) => (
                <div key={j} className="previewContent">
                  {contentKey}: {sectionData.content[contentKey]}
                </div>
              ))}
            </div>
          );
        }
        return null; // Return null for sections that are not added
      })}
    </div>
  );
};

export default RightPreviewP;
