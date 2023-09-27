// eslint-disable-next-line react/prop-types
import { useDispatch } from "react-redux";
import { addContent } from "../../ReduxSetUp/slice";

// eslint-disable-next-line react/prop-types
const AddContentsP = ({ flag }) => {
  const dispatch = useDispatch();

  return (
    <div style={contentContainer}>
      <button
        onClick={() => {
          dispatch(addContent("Profile"));
          flag(false);
        }}
      >
        PROFILE
      </button>
      <button
        onClick={() => {
          dispatch(addContent("Education"));
          flag(false);
        }}
      >
        EDUCATION
      </button>
      <button
        onClick={() => {
          dispatch(addContent("Skill"));
          flag(false);
        }}
      >
        SKILL
      </button>
      <button
        onClick={() => {
          dispatch(addContent("Professional_Experience"));
          flag(false);
        }}
      >
        PROFESSIONAL EXPERIENCE
      </button>
      <button
        onClick={() => {
          flag(false);
        }}
      >
        ❌
      </button>
    </div>
  );
};
const contentContainer = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};
export default AddContentsP;
