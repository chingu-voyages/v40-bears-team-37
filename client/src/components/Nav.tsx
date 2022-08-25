// this is a temporary file, on the top level to show if user is logged in,
// so it shows on every page regardless of login status
import React from 'react';
import {useAuth} from 'context/AuthContext';

const Nav = () => {
    const auth = useAuth()
    return (
        <>
            <div style={{fontSize: "24px"}}>Are you logged in? {auth.isAuthed ? 'yes' : 'no'}</div>
            <div>you are logged in as {auth.user?.email}</div>
            <button onClick={() => auth.login({
                "id": "123124124",
                "name": "fakeName",
                "email": "email@example.com"
            })}>Login
            </button>
            <button onClick={() => auth.logout()}>Logout</button>
            <a href='/signup'>go to signup</a>
        </>
    )
}

export default Nav