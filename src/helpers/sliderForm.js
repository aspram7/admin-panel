import React from "react";
import { Formik, FieldArray, Form } from "formik";
import Input from "../components/Input";
import TextEditor from "../components/TextEditor";
import ImageFile from "../components/Files";
import useSlider from "./useSlider";

const SliderForm = () => {
  const { formik, handleAddForm } = useSlider();

  console.log(formik.values)

  return (
    <Formik onSubmit={() => {}} initialValues={formik.values}>
      {({values, handleChange}) => (
      <Form>
      <Input name="sliderName" onChange={handleChange}
        value={values.sliderName} />
         <FieldArray
         name="content">
          {({push}) => (  
            <div>
            <span style={{cursor: "pointer", fontSize: "20px"}} onClick={() => push({
              editorValue: "",
              sliderImage: null,
            })}>+</span>
            {values.content.map((content, i) => {
              return <div key={i}>
                <TextEditor id={`content[${i}].editorValue`} value={content.editorValue} onChange={handleChange}/>
                <ImageFile />
              </div>
            })}
              
        </div>
         )}
         </FieldArray>
        <button type="submit" disabled={!formik.isValid}>
          Submit
        </button>
        <pre>{JSON.stringify(values)}</pre>
      </Form>
      )}
    </Formik>
  );
};

export default SliderForm;
