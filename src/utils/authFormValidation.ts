type SigninFormProps = {
  email: string;
  password: string;
};

type SignupFormProps = {
  username: string;
} & SigninFormProps;

type UsernameFormProps = {
  email: string;
  username: string;
};

type ResetPassFormProps = {
  password: string;
  rPassword: string;
};

const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const getDomainFromEmail = (email: string) => {
  const regex = /@([\w-]+\.)+[\w-]+$/;
  const match = email.match(regex);

  if (match) {
    return match[0].substring(1);
  } else {
    return null;
  }
};

const emailValidation = (email: string) => {
  let emailError = "";
  if (email === "") {
    emailError = "Email field is required.";
  } else if (!validateEmail(email)) {
    emailError = "Please enter a valid email address";
  } else if (
    getDomainFromEmail(email) === "google" ||
    getDomainFromEmail(email) === "facebook" ||
    getDomainFromEmail(email) === "apple"
  ) {
    emailError = `This email address is in use with ${getDomainFromEmail(
      email
    )}. Please use social login to access this account.`;
  }
  return emailError;
};

const validatePassword = (password: string) => {
  // Regular expressions to check for different types of characters
  const uppercaseRegex = /[A-Z]/;
  const numericRegex = /\d/;
  // eslint-disable-next-line
  const specialCharRegex = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.@#]/;

  // Check if password meets all criteria using regular expressions
  const hasUppercase = uppercaseRegex.test(password);
  const hasNumeric = numericRegex.test(password);
  const hasSpecialChar = specialCharRegex.test(password);

  // Return true if all criteria are met, false otherwise
  return hasUppercase && hasNumeric && hasSpecialChar;
};

export const signinFormValidation = ({ email, password }: SigninFormProps) => {
  let emailError = emailValidation(email),
    passwordError = "";
  if (password === "") {
    passwordError = "Password field is required.";
  }
  return {
    isValid: emailError === "" && passwordError === "",
    errors: {
      email: emailError,
      password: passwordError,
    },
  };
};

export const signupFormValidation = ({
  email,
  password,
  username,
}: SignupFormProps) => {
  let usernameError = "",
    emailError = emailValidation(email),
    passwordError = "";
  if (username === "") {
    usernameError = "Username field is required.";
  }
  if (password === "") {
    passwordError = "Password field is required.";
  } else if (!validatePassword(password)) {
    passwordError =
      "Must contain at least 1 upper case, numeric, and special character.";
  }
  return {
    isValid: usernameError === "" && emailError === "" && passwordError === "",
    errors: {
      username: usernameError,
      email: emailError,
      password: passwordError,
    },
  };
};

export const forgotPasswordFormValidation = (email: string) => {
  return {
    isValid: emailValidation(email) === "",
    error: emailValidation(email),
  };
};

export const usernameFormValidation = (
  { username, email }: UsernameFormProps,
  isEmail: boolean
) => {
  let usernameError = "",
    emailError = emailValidation(email);
  if (username === "") {
    usernameError = "Username field is required.";
  }
  return {
    isValid: isEmail
      ? emailError === "" && usernameError === ""
      : usernameError === "",
    errors: {
      username: usernameError,
      email: isEmail ? emailError : "",
    },
  };
};

export const resetPassFormValidation = ({
  password,
  rPassword,
}: ResetPassFormProps) => {
  let passwordError = "",
    rPassError = "";
  if (password === "") {
    passwordError = "Password field is required.";
  } else if (!validatePassword(password)) {
    passwordError =
      "Must contain at least 1 upper case, numeric, and special character.";
  }

  if (rPassword === "") {
    rPassError = "Confirm Password field is required.";
  } else if (password !== rPassword) {
    rPassError = "Confirm password does not match new password.";
  }

  return {
    isValid: passwordError === "" && rPassError === "",
    errors: {
      password: passwordError,
      rPassword: rPassError,
    },
  };
};
