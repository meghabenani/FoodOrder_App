import { useRouteError } from "react-router";
let Error = () => {
  let err = useRouteError();
  return (
    <div>
      <h1>Unexpected Error..</h1>
      <p>
        {err.status} || {err.statusText}
      </p>
    </div>
  );
};

export default Error;
