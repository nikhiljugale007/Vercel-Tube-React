import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <Helmet>
        <title>404 | VercelTube</title>
      </Helmet>
      <div className="flex-vt-center p-2">
        <p className="typo-title">404</p>
        <p className="typo-label">
          The page you are looking for dosen't exist or an error occurred.
        </p>
        <p className="typo-label">
          {"Go to "}
          <Link to="/">Home page</Link>
        </p>
      </div>
    </div>
  );
};

export { ErrorPage };
