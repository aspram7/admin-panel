import React, { useState, useMemo, useRef } from "react";
import JoditEditor from "jodit-react";
import defaultClasses from "./textEditor.module.css";

const TextEditor = (props) => {
  const editor = useRef(null);
  // const [content, setContent] = useState("");

  const config = {
    readonly: false,
  };

  return (
    <fieldset className={defaultClasses.component} name={props.id}>
      {useMemo(
        () => (
          <JoditEditor
            ref={editor}
            value={props.value}
            config={config}
            tabIndex={1}
            // onBlur={(newContent) => setContent(newContent)}
            onChange={props.onChange}
          />
        ),
        []
      )}
      {props.children}
    </fieldset>
  );
};

export default TextEditor;
