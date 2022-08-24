export type SignupDetailsType = {
    "name": string,
    "password": string,
    "email": string
}

export type SignupResponseType = {
    success: boolean
    message: string
    data?: {
        id: string,
        name: string,
        email: string
    }
}

export type UserType = {
    "id": string,
    "name": string,
    "email": string
}