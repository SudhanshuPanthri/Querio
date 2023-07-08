import React, { useEffect, useState } from 'react'
import LeftSidebar from '../components/LeftSidebar'
import Navbar from '../components/Navbar'
import Lottie from 'lottie-react';
import animationData from '../assets/discord.json'
// import { UserContext } from '../UserContext';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const { id } = useParams();
    const getUserData = async () => {
        const { data } = await axios.get(`http://localhost:3000/user/${id}`);
        setUser(data);
    }

    useEffect(() => {
        getUserData();
    }, [])

    // const { user } = useContext(UserContext);
    return (
        <div>
            <Navbar />
            <div className='grid grid-cols-[1fr_4fr]'>
                <div className='top-10 sticky h-[40vh] px-2'>
                    <LeftSidebar />
                </div>
                <div className='flex justify-start items-center gap-6'>
                    <div className='border h-24 w-24 rounded-full'>
                        <Lottie animationData={animationData} />
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold'><span className='text-purple-500'>{user?.name}</span></h2>
                        <h2>Email : <span>{user?.email}</span></h2>
                        <h2>Joined On : <span>{user?.joinedOn.substring(0, 10)}</span></h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage