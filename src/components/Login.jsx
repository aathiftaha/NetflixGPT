import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative h-screen w-screen">
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src="https://cdn.neowin.com/news/images/uploaded/2023/05/1683747988_background-size1920x1080-4e1694a6-75aa-4c36-9d4d-7fb6a3102005-bc5318781aad7f5c8520.jpg"
          alt="Bg-Image"
        />

        {/* Dark Overlay */}
        {/* <div className="absolute inset-0 bg-black opacity-60"></div> */}
      </div>

      {/* Login Form */}
      <div className="flex justify-center items-center h-screen">
        <form className="relative z-10 bg-black bg-opacity-80 p-12 rounded-lg w-3/12 text-white">
          <h1 className="text-3xl font-bold mb-8">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 mb-4 rounded bg-gray-800 border border-gray-700 focus:outline-none"
            />
          )}

          <input
            type="text"
            placeholder="Email Address"
            className="w-full p-4 mb-4 rounded bg-gray-800 border border-gray-700 focus:outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 mb-6 rounded bg-gray-800 border border-gray-700 focus:outline-none"
          />

          <button className="w-full bg-red-600 hover:bg-red-700 p-3 rounded font-semibold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="text-gray-400 mt-6">
            {isSignInForm ? "New to Netflix?" : "Already a Registerd "}
            <span
              className="text-white cursor-pointer hover:underline"
              onClick={toggleSignInForm}
            >
              {isSignInForm ? " Sign up now" : "Sign in Now"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
