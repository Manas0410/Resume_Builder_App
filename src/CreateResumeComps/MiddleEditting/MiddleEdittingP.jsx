import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const MiddleEdittingP = () => {
  // Define a state variable to store the editor's content
  const [editorState, setEditorState] =
    useState(/* initial editor state here */);

  // Define a function to handle changes in the editor's content
  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  return (
    <div style={{ border: "1px solid red", height: "400px", width: "800px" }}>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
      />
      {/* You can access the editor's content from editorState whenever needed */}
      <button onClick={() => console.log(editorState)}>Log Content</button>
    </div>
  );
};

export default MiddleEdittingP;
