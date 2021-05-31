import React from "react";
import { Formik, FieldArray, Form, Field } from "formik";
import Input from "../components/Input";
import TextEditor from "../components/TextEditor";
import ImageFile from "../components/Files";
import useSlider from "./useSlider";

const SliderForm = () => {
  const { formik, handleImage, handleEditorValue } = useSlider();

  return (
    <Formik
      onSubmit={(values) => alert(JSON.stringify(values))}
      // initialValues={formik.values}
      initialValues={{ names: [] }}
      render={(formikProps) => (
        <Form>
          <Input
            name="sliderName"
            onChange={formik.handleChange}
            value={formik.values.sliderName}
          />
          <FieldArray
            name="names"
            render={(arrayHelpers) => (
              <div>
                <span
                  style={{ cursor: "pointer", fontSize: "20px" }}
                  onClick={() => {
                    // arrayHelpers.push({
                    //   editorValue: "",
                    //   sliderImage: null,
                    // })
                    arrayHelpers.push("");
                  }}
                >
                  +
                </span>
                {formikProps.values.names.map((content, i) => {
                  return (
                    <div key={i}>
                      <span
                        style={{ cursor: "pointer", fontSize: "20px" }}
                        onClick={() => {
                          // console.log(i, 11);
                          arrayHelpers.remove(i);
                        }}
                      >
                        x
                      </span>
                      <br />
                      <Field name={`names[${i}]`} style={{ border: "1px solid" }} />
                      <TextEditor
                        // name={`content[${i}].editorValue`}
                        // value={content.editorValue}
                        // onChange={(event) =>
                        //   formik.setFieldValue(`content[${i}].editorValue`, event)
                        // }
                        name={`names[${i}]`}
                        value={content}
                        onChange={(e) => formikProps.setFieldValue(`names[${i}]`, e)}
                      />
                      {/* <ImageFile
                        onChange={(file) =>
                          formik.setFieldValue(`content[${i}].sliderImage`, file[0].preview.url)
                        }
                        placeholder="Add Image"
                      /> */}
                    </div>
                  );
                })}
              </div>
            )}
          ></FieldArray>
          <button type="submit" disabled={!formik.isValid}>
            Submit
          </button>
        </Form>
      )}
    ></Formik>
  );
};

export default SliderForm;
