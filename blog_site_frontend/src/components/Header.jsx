import { Link } from 'react-router-dom';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function PreLoginComponent() {
  return (
    <>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          to="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl">Blog site</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center"></nav>

        <Link
          className="inline-flex items-center bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-700 rounded text-base mt-4 md:mt-0 text-white mr-3"
          to="/register"
        >
          Register
          {/* <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg> */}
        </Link>

        <Link
          className="inline-flex items-center bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-700 rounded text-base mt-4 md:mt-0 mr-3 text-white"
          to="/login"
        >
          Login
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </>
  );
}

function PostLoginComponent() {
  return (
    <>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          to="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl">Blog site</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center"></nav>

        <Link
          className="inline-flex items-center bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-700 rounded text-base mt-4 md:mt-0 text-white mr-3"
          to="/dashboard"
        >
          Dashboard
          {/* <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg> */}
        </Link>

        <Link
          className="inline-flex items-center bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-700 rounded text-base mt-4 md:mt-0 mr-3 text-white"
          to="/logout"
        >
          Logout
        </Link>
      </div>
    </>
  );
}

function Header() {
  return <header className="text-gray-600 body-font"></header>;
}

export default Header;
