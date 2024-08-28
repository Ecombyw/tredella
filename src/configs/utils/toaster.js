import toast, { Toaster } from "react-hot-toast";
export const successToast = (message) =>
  toast.success(message, {
    duration: 4000,
    position: "top-center",
  });
export const errorToast = (message) =>
  toast.error(message, {
    duration: 4000,
    position: "top-center",
  });
