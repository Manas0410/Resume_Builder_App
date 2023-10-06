/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { addContent } from "../../ReduxSetUp/slice";
import "./AddContents.css"; // Import the external CSS file

const AddContentsP = ({ flag }) => {
  const data = useSelector((state) => state.cartReducer.data);
  const dispatch = useDispatch();

  return (
    <div className="AddContents-container">
      <div className="button-container">
        {Object.keys(data).map((item, i) => (
          <button
            key={i}
            className="button"
            onClick={() => {
              dispatch(addContent(item));
              flag(false);
            }}
          >
            {item}
          </button>
        ))}
      </div>

      <button
        className="close-button"
        onClick={() => {
          flag(false);
        }}
      >
        ❌
      </button>
    </div>
  );
};

export default AddContentsP;
