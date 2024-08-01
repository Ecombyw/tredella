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
  try {
    const response = await fetch(`${REACT_BACKEND_PATH}${apiName}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${234567890987654323456789098765434567890}`,
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    if (response.ok) {
      setLoader(false);
      dispatch(setToken(responseData?.data?.accessToken));
      dispatch(setLoginData(responseData.data));
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
