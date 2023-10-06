/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import AddContentsP from "../ContentsToAdd/AddContentsP";
import "./MiddleEdittingPageCss/MiddleEdittingPage.css";
import { useSelector } from "react-redux";
import PageToAddContent from "./PageToAddContent";

const MiddleEdittingP = () => {
  // Define a state variable to store the editor's content
  const [editorState, setEditorState] = useState("");
  const [addContentFlag, setAddContentFlag] = useState(false);
  const data = useSelector((state) => state.cartReducer.data);
  console.log(data);

  // Define a function to handle changes in the editor's content
  // const onEditorStateChange = (newEditorState) => {
  //   setEditorState(newEditorState);
  // };

  return (
    <div>
      {/* <button onClick={() => console.log(editorState)}>Log Content</button> */}
      <button
        onClick={() => {
          setAddContentFlag(true);
        }}
      >
        ADD MORE CONTENT
      </button>
      {addContentFlag && (
        <div className="contentContainer">
          <AddContentsP flag={setAddContentFlag} />
        </div>
      )}
      {Object.keys(data).map((item, i) => {
        if (data[item].added) {
          return (
            <div key={i}>
              <span>{item}</span>
              <PageToAddContent content={data[item].content} heading={item} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default MiddleEdittingP;

{
  /* <div>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
        />
        {/* You can access the editor's content from editorState whenever needed */
}
//   </div >
// * /}
