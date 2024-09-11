import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

const validationParams = Yup.object().shape({
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Enter a valid email!").required("Required"),
});
const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        console.log("Registration successful");
      })
      .catch(() => {
        console.log("Registration failed");
      })
      .finally(() => {
        actions.resetForm();
      });
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationParams}
    >
      {({ status }) => (
        <Form className={css.form} autoComplete="off">
          {status?.message && <div className={css.error}>{status.message}</div>}
          <label className={css.label}>
            Username
            <Field
              className={css.input}
              type="text"
              name="name"
              placeholder="Your username"
            />
            <ErrorMessage name="name" component="div" className={css.error} />
          </label>
          <label className={css.label}>
            Email
            <Field
              className={css.input}
              type="email"
              name="email"
              placeholder="example@mail.com"
            />
            <ErrorMessage name="email" component="div" className={css.error} />
          </label>
          <label className={css.label}>
            Password
            <Field
              className={css.input}
              type="password"
              name="password"
              placeholder="Your password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className={css.error}
            />
          </label>
          <button className={css.button} type="submit">
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
