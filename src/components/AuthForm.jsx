import {
  Form,
  useNavigation,
} from "react-router-dom";

import classes from "./AuthForm.module.css";

function AuthForm() {
  const navigation = useNavigation();
  //to check
  //const [searchParams] = useSearchParams();
  const isSubmitting = navigation.state === "submitting";

  return (
    <>
    <h1>Login Page</h1>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <button disabled={isSubmitting}>
            {isSubmitting ? "Hold on.." : "Sign in"}
          </button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
