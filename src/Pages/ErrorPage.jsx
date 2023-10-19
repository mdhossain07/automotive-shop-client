import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div>
        <h2 className="text-7xl text-center font-bold">{error.status}</h2>
        <p className="text-xl font-semibold text-center">NOT FOUND</p>
      </div>
    </div>
  );
};

export default ErrorPage;
