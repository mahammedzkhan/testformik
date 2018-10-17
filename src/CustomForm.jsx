import React from "react";
import TextInput from "./TextInput";
import { Form } from "formik";

export default class CustomForm extends React.Component {
  render() {
    const {
      values,
      touched,
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
    } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
          {this.props.children}
        <button type="submit">submit</button>
      </Form>
    );
  }
}
