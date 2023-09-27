/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addDataOfContent } from "../../ReduxSetUp/slice";

const PageToAddContent = ({ content, heading }) => {
  const dispatch = useDispatch();
  console.log({ content });
  const [contentData, setContentData] = useState({ ...content });
  const addInput = (e) => {
    const { name, value } = e.target;
    setContentData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  let dataToRender = Object.keys(content);
  console.log(content);
  return (
    <div style={{ border: "4px solid yellow", margin: "10px" }}>
      {dataToRender.map((item, i) => {
        return (
          <div key={i}>
            <span>{item}</span>
            <span>
              <input type="text" name={item} onChange={addInput} />
            </span>
          </div>
        );
      })}
      <button
        onClick={() => dispatch(addDataOfContent({ contentData, heading }))}
      >
        ADD Content
      </button>
    </div>
  );
};

export default PageToAddContent;
