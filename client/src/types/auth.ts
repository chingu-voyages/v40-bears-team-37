export type UserType = {
    "id": string,
    "name": string,
    "email": string
}

type ReturnUserType = {
    id: string,
    name: string,
    email: string
}

export type SignupDetailsType = {
    "name": string,
    "password": string,
    "email": string
}

export type SignupResponseType = {
    success: boolean
    message: string
    data?: ReturnUserType
}

export type CheckLoginStatusType = {
    isLoggedIn: boolean,
    user?: ReturnUserType
}

export type LogoutType = {
    success: boolean,
    message: string
}

export type LoginInputType = {
    email: string,
    password: string
}

export type LoginResponseType = {
    success: boolean,
    message: string,
    data?: ReturnUserType
}

