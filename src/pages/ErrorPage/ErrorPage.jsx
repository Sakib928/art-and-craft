import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

const ErrorPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Error Occured</title>
      </Helmet>
      <div className="h-[100vh] w-[100vw] flex flex-col text-center items-center justify-center">
        <h1 className="font-bold text-5xl text-center">
          <span className="text-red-500">Oops!</span> <br /> 404.Page Not Found
          :(
        </h1>
        <p className="text-lg mt-8">
          please try refreshing the page or use a different link
        </p>
        <Link className="btn bg-red-500 text-white" to={"/"}>
          Go Home
        </Link>
      </div>
    </HelmetProvider>
  );
};

export default ErrorPage;
