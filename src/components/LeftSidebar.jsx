// import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../UserContext';
import Lottie from 'lottie-react';
import animationData from '../assets/114083-user-account.json'

const LeftSidebar = () => {

    const { user } = useContext(UserContext);
    // console.log(user.name);
    return (
        <div className='py-4 px-6 my-6 top-10 sticky rounded-2xl'>
            <div className='flex items-center gap-6 '>
                <div className='w-12 h-12 '>
                    <Lottie animationData={animationData} loop={false} />
                </div>
                <span className='uppercase text-xl'>
                    {user ? user.name : 'User'}
                </span>
            </div>
            <div className='my-6'>
                <ul>
                    <div className='flex items-center gap-4 hover:text-purple-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        <Link to='/'><li className='my-2'>Home</li></Link>
                    </div>
                    {/* <div className='flex items-center gap-4 hover:text-purple-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                        </svg>
                        <Link to='/queries'><li className=' my-2'>Queries</li></Link>
                    </div> */}
                    <div className='flex items-center gap-4 hover:text-purple-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <Link to='/myProfile'><li className='my-2'>Profile</li></Link>
                    </div>
                    <div className='flex items-center gap-4 hover:text-purple-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trophy" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M8 21l8 0"></path>
                            <path d="M12 17l0 4"></path>
                            <path d="M7 4l10 0"></path>
                            <path d="M17 4v8a5 5 0 0 1 -10 0v-8"></path>
                            <path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                            <path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                        </svg>
                        <Link to='/topContributors'><li className='my-2'>Top Contributors</li></Link>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default LeftSidebar