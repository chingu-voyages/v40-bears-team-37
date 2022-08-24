import axios from 'axios';
import {SignupDetailsType, SignupResponseType} from 'types/auth';

const baseUrl = process.env.REACT_APP_BACKEND_URL

export const signup = async (registerDetails: SignupDetailsType) => {
    try {
        const response = await axios.post<SignupResponseType>(`${baseUrl}api/auth/signup`, registerDetails)
        return response
    } catch (e: unknown) {
        if (axios.isAxiosError(e)) {
            console.error('Axios Error', e)
            return e.response?.data
        } else {
            console.error('Other Errors')
        }

    }

}

/*
const login = async credentials => {
    const response = await axios.post(`${baseUrl}/api/login`, credentials)
    return response.data
}
*/

