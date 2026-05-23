export const checkValidateData = (name, email, password) => {
  if (name && !/^[A-Za-z ]+$/.test(name)) {
    return "Name is not valid";
  }

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password);

  if (!isEmailValid) {
    return "Email ID is not Valid";
  }

  if (!isPasswordValid) {
    return "Password is not valid";
  }

  return null;
};
