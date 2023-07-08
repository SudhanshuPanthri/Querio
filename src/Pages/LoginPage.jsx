// import React from 'react'
import { Link, useNavigate } from "react-router-dom"
// import bg from '../assets/bg1.jpg'
import Lottie from 'lottie-react';
import animationData from '../assets/144399-city-buildings.json';
import { useState, useContext } from "react";
import axios from "axios";
import jwtDecode from 'jwt-decode';
import { UserContext } from "../UserContext";

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const { setUser, setToken } = useContext(UserContext);
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    const handleLogin = async () => {
        try {
            const { data } = await axios.post("http://localhost:3000/auth/login", { email, password }, { withCredentials: true })
            localStorage.setItem('token', data.token);
            const userData = jwtDecode(data.token);
            setUser(userData);
            navigate('/', { replace: true });
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <div className='grid grid-cols-2 h-[100vh]'>
            <div className="flex justify-center items-center">
                {/* <img src={bg} alt="Photo by Arbab Khan: https://www.pexels.com/photo/a-colorful-painting-on-the-wall-near-the-street-12873318/" className="aspect-square object-cover h-[100vh]" /> */}
                <Lottie animationData={animationData} />
            </div>
            <div className="flex justify-center items-center">
                <div className="w-3/4">
                    <div className="">
                        <h2 className="text-3xl">Login</h2>
                    </div>
                    <div>
                        <input type="text" className="border py-4 px-8 my-10 w-full text-[#06C167] outline-none" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <input type="password" className="border py-4 px-8 w-full text-[#06C167] outline-none" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="py-4 px-6 border my-10 hover:bg-[#06C167] ease-in-out duration-300 hover:text-white" onClick={handleLogin}>Log In</button>
                    </div>
                    <div className="flex justify-center items-center">
                        <span>{`Doesn't have an account ? `}<Link to='/auth/signup' className="text-[#06C167]">Sign Up</Link></span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default LoginPage