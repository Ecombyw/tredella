import { message } from "antd";
import { REACT_BACKEND_PATH } from "../config";

export const authApi = async (
  dispatch,
  data,
  setToken,
  setLoginData,
  setLoader,
  apiName
) => {
  setLoader(true);
  const csrfTokenMetaTag = document.querySelector('meta[name="csrf-token"]');
  const csrfToken = csrfTokenMetaTag
    ? csrfTokenMetaTag.getAttribute("content")
    : null;

  // Use the token only if it's available
  const headers = {
    "Content-Type": "application/json",
    "X-CSRF-TOKEN": csrfToken,
  };

  try {
    const response = await fetch(`${REACT_BACKEND_PATH}${apiName}`, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
      credentials: "same-origin",
    });
    const responseData = await response.json();
    if (response.ok) {
      console.log("======responseData", responseData);
      setLoader(false);
      // dispatch(setToken(responseData?.data?.accessToken));
      // dispatch(setLoginData(responseData.data));
    }
    if (!response.ok) {
      const textMessage = responseData?.message || "";
      message.error(textMessage);
      setLoader(false);
    }
  } catch (error) {
    setLoader(false);
  }
};
