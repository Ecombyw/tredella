import * as Yup from "yup";
// Validation schema using Yup
export const loginFormValidation = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
export const forgotPasswordFormValidation = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});

export const signUpFormValidation = Yup.object({
  first_name: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  last_name: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  mobile_number: Yup.string().required("Phone Number is required"),
  country: Yup.string().required("Country is required"),  // Add validation for the country field
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});
