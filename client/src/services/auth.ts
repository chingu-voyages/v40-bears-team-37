import axios from 'axios';
import {SignupDetailsType, SignupResponseType} from 'types/auth';
import {baseUrl} from 'utils/config';

export const signup = async (registerDetails: SignupDetailsType) => {
    try {
        return await axios.post<SignupResponseType>(`${baseUrl}api/auth/signup`, registerDetails)
    } catch (e: unknown) {
        if (axios.isAxiosError(e)) {
            console.error('Axios Error', e)
            return e.response?.data
        } else {
            console.error('Other Errors', e)
            return {success: "false", errorMessage: "Unknown Error"}
        }
    }
}

/*
const login = async credentials => {
    const response = await axios.post(`${baseUrl}/api/login`, credentials)
    return response.data
}
*/

