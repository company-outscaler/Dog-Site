import React from 'react'

const Auth = ({ children }) => {
    const isLogged = false
    return (
        <>
            {isLogged ? children : window.location.href = "/"}
        </>
    )
}

export default Auth