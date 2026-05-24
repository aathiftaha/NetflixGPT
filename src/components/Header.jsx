import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../slice/userSlice";
import { LOGO, SUPPORTED_LANGUAGE } from "../utils/constant";
import { toggleGPTSearchView } from "../slice/gptSlice";
import { changeLanguage } from "../slice/configSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  useEffect(() => {
    //Header is mounting Every time because its common in all page this will cause rerender and perfomance loss
    //so if my component unmounts then i need to unsubscribe
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          }),
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Unscubscribe when component unmounts means clean up the useEffect
    return () => unsubscribe();
  }, []);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.

        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  const handleShowGPT = () => {
    dispatch(toggleGPTSearchView());
  };
  const handleSelectLang = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between items-center">
      {/* Logo */}
      <img className="w-40" src={LOGO} alt="logo" />

      {/* Right Section */}

      {user && (
        <div className="flex items-center gap-4">
          {showGPTSearch && (
            <select
              className="p-2 bg-gray-500 text-white"
              onChange={handleSelectLang}
            >
              {SUPPORTED_LANGUAGE.map((lang, index) => {
                return (
                  <>
                    <option key={index} value={lang.indentifier}>
                      {lang.name}
                    </option>
                  </>
                );
              })}
            </select>
          )}
          <button
            onClick={handleShowGPT}
            className="px-2 py-2 mx-4 bg-red-600 text-white cursor-pointer rounded-lg"
          >
            {showGPTSearch ? "Home Page" : "GPT Search"}
          </button>
          <img
            className="w-10 h-10 rounded-md"
            src={user.photoURL}
            alt="user"
          />

          <button
            onClick={handleSignout}
            className="bg-red-600 text-white px-4 py-2 rounded-md"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
