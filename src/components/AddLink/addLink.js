import React from "react";
import classes from "./addLink.module.css";

const AddLink = (props) => {
  return (
      <button className={classes.addButton}>
        <span className={classes.add}></span>
      </button>

  );
};

export default AddLink;
