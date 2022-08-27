import axios from "axios";
import {
  CheckLoginStatusType,
  LoginInputType,
  LogoutType,
  SignupDetailsType,
  SignupResponseType,
} from "types/auth";
import { baseUrl } from "utils/config";

export const signup = async (registerDetails: SignupDetailsType) => {
  try {
    const response = await axios.post<SignupResponseType>(
      `${baseUrl}/auth/signup`,
      registerDetails
    );
    return response.data;
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      console.error("Axios Error", e);
      return e.response?.data;
    } else {
      console.error("Other Signup Errors", e);
      return { success: "false", errorMessage: "Unknown Signup Error" };
    }
  }
};

export const isLoggedIn = async () => {
  try {
    axios.defaults.withCredentials = true;
    const response = await axios.get<CheckLoginStatusType>(
      `${baseUrl}/auth/check`
    );
    return response.data;
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      console.error("Axios Error", e);
      return e.response?.data;
    } else {
      console.error("Other Check Errors", e);
      return {
        success: "false",
        errorMessage: "Unknown Login Status Check Error",
      };
    }
  }
};

export const logoutFromServer = async () => {
  try {
    const response = await axios.post<LogoutType>(`${baseUrl}/auth/logout`);
    return response.data;
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      console.error("Axios Error", e);
      return e.response?.data;
    } else {
      console.error("Other Check Errors", e);
      return { success: "false", errorMessage: "Unknown Logout Error" };
    }
  }
};

export const loginServer = async (loginDetails: LoginInputType) => {
  try {
    const response = await axios.post<SignupResponseType>(
      `${baseUrl}/auth/login`,
      loginDetails
    );
    return response.data;
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      console.error("Axios Error", e);
      return e.response?.data;
    } else {
      console.error("Other Signup Errors", e);
      return { success: "false", errorMessage: "Unknown Login Error" };
    }
  }
};
