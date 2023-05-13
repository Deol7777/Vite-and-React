import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";


function ErrorPage() {
  const error = useRouteError();

  let title = "An error occurred!";
  let message = "Something went wrong!";

  if (error.status === 401) {
    message = error.data.message;
  }
  if (error.status === 550) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }

  return (
    <>
        <h1>{title}</h1>
        <p>{message}</p>
        <Link to={"/"}>
            Back to Login
        </Link>
    </>
  );
}

export default ErrorPage;