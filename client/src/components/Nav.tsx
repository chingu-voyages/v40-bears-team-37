// this is a temporary file, on the top level to show if user is logged in,
// so it shows on every page regardless of login status
import React, {useEffect} from 'react';
import {useAuth} from 'context/AuthContext';
import {isLoggedIn} from 'services/auth';

const Nav = () => {

    useEffect(() => {
        // check auth status by checking with backend
    }, [])
    const auth = useAuth()

    const handleCheckLogin = async () => {
        console.log("am I logged in (server)? ", await isLoggedIn() ? "yes" : "no")
    }

    return (
        <>
            <div style={{fontSize: "24px"}}>Are you logged in? {auth.isAuthed ? 'yes' : 'no'}</div>
            <div>you are logged in as {auth.user?.email}</div>
            <button onClick={() => auth.login({
                "email": "cheryl@example.com",
                "password": "cheryl"
            })}>Login
            </button>
            <button onClick={() => auth.logout()}>Logout</button>
            <button onClick={() => handleCheckLogin()}>Am I logged in?</button>
            <a href='/signup'>go to signup</a>
        </>
    )
}

export default Nav