import React from 'react';
import {Field} from "formik";

const FieldWrapped = (props) => (
    <div className="column">
        <Field {...props} />
    </div>
);

export default FieldWrapped
