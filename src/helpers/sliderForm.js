import React from "react";
import Input from "../components/Input"

const SliderForm = () => {

    return (
    <form 
    // onSubmit={formik.handleSubmit}
    >
      <Input />
      <button type="submit"
    //    disabled={!formik.isValid}
       >Submit</button>
    </form>
    )
}

export default SliderForm;