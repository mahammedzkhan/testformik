import {withFormik} from "formik";

const formikEnhancer = withFormik({
    mapPropsToValues: ({ user }) => ({
        ...user,
    }),
    handleSubmit: (payload, { setSubmitting }) => {
        alert(payload.email);
        setSubmitting(false);
    },
    displayName: 'MyForm',
});

export { formikEnhancer };
