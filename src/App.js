import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TextInput from "./TextInput";
import { Field, Form, Formik } from "formik";
import FieldWrapped from "./FieldWrapped";
import TextField from "./FieldStyledComponent";
import { formikEnhancer } from "./HOCFormik";
import CustomForm from "./CustomForm";

class App extends Component {
  render() {
    const MyForm = formikEnhancer(
        ({values,
             touched,
             errors,
             handleChange,
             handleBlur}) => (
          <CustomForm>
              <TextInput
                  name="email"
                  value={values.email}
                  error={touched.email && errors.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
              />
          </CustomForm>
      )
    );
    return (
      <div className="App">
        <Formik
          onSubmit={values => console.debug(values)}
          initialValues={{
            customcomponent: "",
            fieldformikcustomcomponent: "",
            fieldformik: "",
            fieldwrapped: "",
            textfieldstyledcomponent: ""
          }}
        >
          <Form>
            <Field name="fieldformik" />
            <FieldWrapped name="fieldwrapped" />
            <TextInput name="customcomponent" />
            <TextField name="textfieldstyledcomponent" />
            <Field component={TextInput} name="fieldformikcustomcomponent" />
            <button type="submit">submit</button>
          </Form>
        </Formik>
        <MyForm onSubmit={values => console.debug(values)} />
      </div>
    );
  }
}

export default App;
