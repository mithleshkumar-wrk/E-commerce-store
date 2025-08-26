// src/pages/PageNotFound.jsx
import { Link, useLocation } from "react-router-dom";

export default function PageNotFound() {
  const { pathname } = useLocation();

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 px-6 py-12"
    >
      <div className="text-center max-w-md">

        <h1 className="text-7xl font-extrabold text-gray-900">404</h1>
        <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>

        <p className="mt-3 text-base text-gray-600">
          Sorry, the page{" "}
          <code className="bg-gray-100 px-1 py-0.5 rounded">{pathname}</code>{" "}
          does not exist or may have been moved.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <Link
            to="/"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
          >
            Go Home
          </Link>
          <Link
            to="/contact"
            className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-100"
          >
            Contact Support
          </Link>
        </div>
        
      </div>
    </main>
  );
}
