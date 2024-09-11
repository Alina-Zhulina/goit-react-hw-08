import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import * as Yup from "yup";
import { ErrorMessage, Field, Formik, Form } from "formik";

const validationParams = Yup.object().shape({
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Enter a valid email!").required("Required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        console.log("login success");
      })
      .catch(() => {
        console.log("login error");
      });

    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationParams}
    >
      <Form className={css.formWrapper}>
        <label className={css.wrapper}>
          <span className={css.label}>Email</span>
          <Field
            className={css.input}
            type="text"
            name="email"
            placeholder="olha@mail.com"
          />
          <ErrorMessage className={css.message} name="email" component="span" />
        </label>
        <label className={css.wrapper}>
          <span className={css.label}>Password</span>
          <Field
            className={css.input}
            type="password"
            name="password"
            placeholder="example:aBc123.5"
          />
          <ErrorMessage
            className={css.message}
            name="password"
            component="span"
          />
        </label>

        <button className={css.logInBtn} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
