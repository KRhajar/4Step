import React, { useEffect, useState } from 'react';

const ConfirmCoach = () => {
    const [token, setToken] = useState();
    useEffect(() => {
        setToken(window.location.href.split("?token=")[1])
    }, [])

    return (
        <form method='POST' action='http://localhost:8040/coach/changePass'>
            <input name='token' type='text' hidden value={token} />
            <input type='text' name='password'/>
            <input type='submit' value='change'/>
        </form>
    )
}

export default ConfirmCoach;