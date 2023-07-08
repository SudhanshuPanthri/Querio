// import React from 'react'
import { Link } from "react-router-dom"
import Lottie from 'lottie-react';
import animationData from '../assets/144480-character-morphing-animation.json';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUpPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSignUp = async () => {
        try {
            axios.post("http://localhost:3000/auth/signup", {
                name,
                email,
                password
            })
            setEmail('');
            setName('');
            setPassword('');
            navigate('/auth/login');
        }
        catch (err) {
            console.log(err);
        }
    }


    return (
        <div className='grid grid-cols-2 h-[100vh]'>
            <div className="flex justify-center items-center">
                {/* <img src={bg} alt="Photo by eberhard grossgasteiger: https://www.pexels.com/photo/teal-and-pink-cherry-print-garment-2086361/" className="aspect-square object-cover h-[100vh]" /> */}
                <Lottie animationData={animationData} />
            </div>
            <div className="flex justify-center items-center">
                <div className="w-3/4">
                    <div className="mb-14">
                        <h2 className="text-4xl my-2">Welcome to<span className="text-[#06C167]"> querio</span></h2>
                        <span>Have an query? Just querio</span>
                    </div>
                    <div>
                        <input type="text" className="border py-4 px-8 w-full my-4 text-[#06C167] outline-none" placeholder="Enter Display Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <input type="text" className="border py-4 px-8 my-2 w-full text-[#06C167] outline-none" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <input type="password" className="border py-4 px-8 my-2 w-full text-[#06C167] outline-none" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="py-4 px-6 border my-8 hover:bg-[#06C167] ease-in-out duration-300 hover:text-white" onClick={handleSignUp}>Sign Up</button>
                    </div>
                    <div className="flex justify-center items-center">
                        <span>{`Already have an account ? `}<Link to='/auth/login' className="text-[#06C167]">Log In</Link></span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SignUpPage