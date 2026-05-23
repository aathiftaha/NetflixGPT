import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../slice/userSlice";
import { USER_AVATAR } from "../utils/constant";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState("");

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let message = null;

    // Sign Up Validation
    if (!isSignInForm) {
      message = checkValidateData(
        name.current.value.trim(),
        email.current.value.trim(),
        password.current.value.trim(),
      );
    } else {
      // Sign In Validation
      message = checkValidateData(
        "",
        email.current.value.trim(),
        password.current.value.trim(),
      );
    }

    setErrorMessage(message);

    // Stop execution if validation fails
    if (message) return;

    // =========================
    // SIGN UP
    // =========================

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid,
                  email,
                  displayName,
                  photoURL,
                }),
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });

          console.log(user);

          // Redirect to Browse Page
        })
        .catch((error) => {
          setErrorMessage(error.code + " : " + error.message);
        });
    }

    // =========================
    // SIGN IN
    // =========================
    else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;

          console.log(user);

          // Redirect to Browse Page
        })
        .catch((error) => {
          setErrorMessage(error.code + " : " + error.message);
        });
    }
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

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Login Form */}
      <div className="flex justify-center items-center h-screen">
        <form
          onSubmit={handleSubmit}
          className="relative z-10 bg-black bg-opacity-80 p-12 rounded-lg w-3/12 text-white"
        >
          <h1 className="text-3xl font-bold mb-8">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {/* Name Input */}
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="w-full p-4 mb-4 rounded bg-gray-800 border border-gray-700 focus:outline-none"
            />
          )}

          {/* Email */}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="w-full p-4 mb-4 rounded bg-gray-800 border border-gray-700 focus:outline-none"
          />

          {/* Password */}
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-4 mb-4 rounded bg-gray-800 border border-gray-700 focus:outline-none"
          />

          {/* Error Message */}
          <p className="text-red-500 font-bold mb-4">{errorMessage}</p>

          {/* Button */}
          <button className="w-full bg-red-600 hover:bg-red-700 p-3 rounded font-semibold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          {/* Toggle */}
          <p className="text-gray-400 mt-6">
            {isSignInForm ? "New to Netflix?" : "Already Registered?"}

            <span
              className="text-white cursor-pointer hover:underline"
              onClick={toggleSignInForm}
            >
              {isSignInForm ? " Sign up Now" : " Sign in Now"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
