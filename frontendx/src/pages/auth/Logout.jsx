import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate=useNavigate()
    useEffect(() => {
        localStorage.clear()
        navigate("/login");
        console.log(localStorage.clear());

    }, [])
    
    
    return (
        <div>logout</div>
    )
}

export default Logout