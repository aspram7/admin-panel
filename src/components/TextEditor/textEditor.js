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
    // <input
    //   type="text"
    //   // name={props.name}
    //   value={props.value}
    //   onChange={(e) => props.onChange(e.target.value)}
    //   placeholder="test"
    //   style={{ border: "1px solid" }}
    // />
    <fieldset className={defaultClasses.component} name={props.name}>
      {useMemo(
        () => (
          <JoditEditor
            ref={editor}
            value={props.value}
            config={config}
            tabIndex={1}
            // onBlur={(newContent) => setContent(newContent)}
            // onChange={(text) => props.onChange({ target: { name: props.name, value: text } })}
            onChange={props.onChange}
          />
        ),
        []
      )}
      {/* {props.children} */}
    </fieldset>
  );
};

export default TextEditor;
