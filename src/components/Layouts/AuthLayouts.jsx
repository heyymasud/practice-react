/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  return (
    <div
      className={`flex justify-center min-h-screen items-center ${
        isDarkMode && "bg-slate-900"
      }`}
    >
      <div className="w-full max-w-xs">
        <button
          className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Light" : "Dark"}
        </button>
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p
          className={`font-medium  mb-8 ${
            isDarkMode ? "text-slate-100" : "text-slate-500"
          }`}
        >
          Welcome, please enter your details
        </p>
        {children}
        {/* <Navigation type={type} /> */}
        <p
          className={`mt-5 text-sm text-center ${
            isDarkMode ? "text-slate-100" : "text-slate-500"
          }`}
        >
          {type === "login"
            ? `Don't have an account? `
            : `Already have an account? `}

          {type === "login" && (
            <Link className="font-bold text-blue-600" to={"/register"}>
              Register
            </Link>
          )}
          {type === "register" && (
            <Link className="font-bold text-blue-600" to={"/login"}>
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

/*
const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="mt-5 text-sm text-center">
        Dont have an account?{" "}
        <Link className="font-bold text-blue-600" to={"/register"}>
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="mt-5 text-sm text-center">
        Already have an account?{" "}
        <Link className="font-bold text-blue-600" to={"/login"}>
          Login
        </Link>
      </p>
    );
  }
};
*/

export default AuthLayout;
