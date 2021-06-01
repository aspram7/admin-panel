import React, { useState, useMemo, useRef } from "react";
import JoditEditor from "jodit-react";
import defaultClasses from "./textEditor.module.css";

const TextEditor = (props) => {
  const editor = useRef(null);
  // const [content, setContent] = useState("");

  const config = useMemo(() => (
   { readonly: false}
  ), [])

  const jodit = useMemo(
    () => (
      <JoditEditor
        ref={editor}
        value={props.value}
        config={config}
        tabIndex={1}
        onBlur={props.onBlur}
        // onChange={(text) => props.onChange({ target: { name: props.name, value: text } })}
        onChange={props.onChange}
      />
    ),
    [props.value]
  )

  return (
    <fieldset className={defaultClasses.component} name={props.name}>
      {jodit}
      {props.children}
    </fieldset>
  );
};

export default TextEditor;




