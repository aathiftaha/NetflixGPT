import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";

import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../userSlice";

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
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
      } else {
        dispatch(removeUser());
      }
    });

    // cleanup
    return () => unsubscribe();
  }, []);

  return null;
};

export default Body;
