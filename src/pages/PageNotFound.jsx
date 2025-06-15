import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen max-w-sm mx-auto text-center">
      <h1 className="text-3xl font-semibold mb-6">
        The page you are looking for could not be found 😢
      </h1>
      <Link
        to="/"
        className="inline-block bg-blue-500 text-blue-100 px-6 py-3 text-lg rounded-lg hover:bg-blue-400 duration-200"
      >
        Go back home
      </Link>
    </div>
  );
}

export default PageNotFound;
