import React from "react";
import { Formik, FieldArray, Form } from "formik";
import Input from "../components/Input";
import TextEditor from "../components/TextEditor";
import ImageFile from "../components/Files";
import useSlider from "./useSlider";
import * as Yup from "yup";

let schema = Yup.object().shape({
  sliderName: Yup.string().required(),
  content: Yup.array()
  .of(
    Yup.object().shape({
      editorValue: Yup.string().required(),
      sliderImage: Yup.string().required(),
    })
  )
  .required('Required'),
});

const SliderForm = () => {

  return (
    <Formik
      onSubmit={(values) => {console.log(values)}}
      initialValues={{
      sliderName: "",
      content: [
        {
          editorValue: "",
          sliderImage: "",
        },
      ],
    }}
    validationSchema={schema}
      render={(formikProps) => (
        <Form>
          <Input
            name="sliderName"
            onChange={formikProps.handleChange}
            value={formikProps.values.sliderName}
            error={formikProps.errors.sliderName}
          ></Input>
          <FieldArray
            name="content"
            render={(arrayHelpers) => (
              <div>
                <span
                  style={{ cursor: "pointer", fontSize: "20px" }}
                  onClick={() => {
                    arrayHelpers.push({
                      editorValue: "",
                      sliderImage: "",
                    })
                  }}
                >
                  +
                </span>
                {formikProps.values.content.map((content, i) => {
                  console.log(formikProps );
                  return (
                    <div key={i}>
                      <span
                        style={{ cursor: "pointer", fontSize: "20px" }}
                        onClick={() => {
                          arrayHelpers.remove(i);
                        }}
                      >
                        x
                      </span>
                      <br />
                      <TextEditor
                        name={`content[${i}].editorValue`}
                        value={content.editorValue}
                        onBlur={formikProps.handleBlur}
                        onChange={(event) =>
                          formikProps.setFieldValue(`content[${i}].editorValue`, event)
                        }
                      >{formikProps.errors.content && formikProps.errors.content[i] ? <div>EditorValue is a required field</div> : null}</TextEditor>
                      <ImageFile
                        onChange={(file) =>
                          formikProps.setFieldValue(`content[${i}].sliderImage`, file[0].preview.url)
                        }
                        placeholder="Add Image"
                      > {formikProps.errors.content && formikProps.errors.content[i] ? <div>SliderImage is a required field</div> : null}</ImageFile>
                    </div>
                  );
                })}
              </div>
            )}
          ></FieldArray>
          <button type="submit" >
            Submit
          </button>
        </Form>
      )}
    ></Formik>
  );
};

export default SliderForm;
