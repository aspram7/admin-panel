import React from "react";
import { Formik, FieldArray, Form } from "formik";
import Input from "../components/Input";
import TextEditor from "../components/TextEditor";
import ImageFile from "../components/Files";
import useSlider from "./useSlider";

const SliderForm = () => {
  const { formik, handleImage, handleEditorValue } = useSlider();

  console.log(formik.values)

  return (
    <Formik onSubmit={values => alert(JSON.stringify(values))} initialValues={formik.values} render={formikProps => (
      <Form>
      <Input name="sliderName" onChange={formik.handleChange} value={formik.values.sliderName} />
         <FieldArray
         name="content"
         render={arrayHelpers => (
          <div>
          <span style={{cursor: "pointer", fontSize: "20px"}} 
          onClick={() => arrayHelpers.push({
            editorValue: "",
            sliderImage: null,
          })}
          >+</span>
          {formikProps.values.content.map((content, i) => {
            return <div key={i}>
              <span style={{cursor: "pointer", fontSize: "20px"}} onClick={() => arrayHelpers.remove(i)}>x</span>
              <TextEditor name={`content[${i}].editorValue`} value={content.editorValue} onChange={(event) => formik.setFieldValue(`content[${i}].editorValue`, event) }/>
              <ImageFile onChange={(file) => formik.setFieldValue(`content[${i}].sliderImage`, file[0].preview.url)} placeholder="Add Image"/>
            </div>
          })}
            
      </div>
         )
            
         }>
          
         </FieldArray>
        <button type="submit" disabled={!formik.isValid}>
          Submit
        </button>
      </Form>
      
  )}>
    </Formik>
  );
};

export default SliderForm;
