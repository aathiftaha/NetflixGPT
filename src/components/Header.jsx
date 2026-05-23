import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
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
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between items-center">
      {/* Logo */}
      <img
        className="w-40"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-05-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      {/* Right Section */}

      {user && (
        <div className="flex items-center gap-4">
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
