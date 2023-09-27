import { useSelector } from "react-redux";

const RightPreviewP = () => {
  const data = useSelector((state) => state.cartReducer.data);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "red",
        alignItems: "center",
      }}
    >
      <span>PREVIEW</span>
      {Object.keys(data).map((sectionName, i) => {
        const sectionData = data[sectionName];
        if (sectionData.added) {
          return (
            <div key={i}>
              <span>{sectionName}</span>
              {Object.keys(sectionData.content).map((contentKey, j) => (
                <div key={j}>
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
