import { useRouteError, useNavigate } from "react-router-dom";

export default function ErrorPage() {
  let navigate = useNavigate();

  //const error = useRouteError();
  //console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go to Back
      </button>
      <p>{/* <i>{error.statusText || error.message}</i> */}</p>
    </div>
  );
}
