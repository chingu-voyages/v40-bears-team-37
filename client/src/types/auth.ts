export type UserType = {
  id: string;
  name: string;
  email: string;
};

export type SignupDetailsType = {
  name: string;
  password: string;
  email: string;
};

export type SignupResponseType = {
  success: boolean;
  message: string;
  data?: UserType;
};

export type CheckLoginStatusType = {
  isLoggedIn: boolean;
  user?: UserType;
};

export type LogoutType = {
  success: boolean;
  message: string;
};

export type LoginInputType = {
  email: string;
  password: string;
};

export type LoginResponseType = {
  success: boolean;
  message: string;
  data?: UserType;
};
