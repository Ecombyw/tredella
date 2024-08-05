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

  // Use the token only if it's available
  // const headers = {
  //   "Content-Type": "application/json",
  //   "X-CSRF-TOKEN": csrfToken,
  // };

  try {
    const responseToken = await fetch(
      `https://www.api.tredella.com/csrf-token`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const responseTokenData = await responseToken.json();
    console.log("====responseTokenData", responseTokenData);
    return;
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
