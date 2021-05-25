import React from "react";
import Input from "../components/Input";
import TextEditor from "../components/TextEditor";
import ImageFile from "../components/Files";
import useSlider from "./useSlider";

const SliderForm = () => {
  const { formik } = useSlider();
  console.log(formik);
  return (
    <form onSubmit={formik.handleSubmit}>
      <Input />
      <TextEditor />
      <ImageFile />
      <button type="submit" disabled={!formik.isValid}>
        Submit
      </button>
    </form>
  );
};

export default SliderForm;
