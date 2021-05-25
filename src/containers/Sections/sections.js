import React from "react";
import Layout from "components/Layout";
import AdminMenu from "containers/AdminMenu";
import AddAndUpdateSlider from "containers/AddAndUpdateSlider";
import classes from "./sections.module.css";

const Sections = () => {
  return (
    <div className={classes.section}>
      <AddAndUpdateSlider />
    </div>
  );
};

export default Sections;
