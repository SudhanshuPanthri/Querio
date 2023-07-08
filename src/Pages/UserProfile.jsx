import { useContext, useState } from 'react'
import { UserContext } from '../UserContext'
import Navbar from '../components/Navbar'
import LeftSidebar from '../components/LeftSidebar'
import Lottie from 'lottie-react';
import animationData from '../assets/discord.json'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const [bio, setBio] = useState("");
    const navigate = useNavigate();
    const { user } = useContext(UserContext)
    const userId = user.id;
    if (!userId) {
        navigate("/", { replace: true })
    }

    const addBio = async () => {
        // console.log(bio);
        await axios.post("http://localhost:3000/updateBio", { userId, bio })
        setBio("");
    }
    return (
        <div>
            <Navbar />
            <div className='grid grid-cols-[1fr_4fr]'>
                <div className='top-10 sticky h-[40vh] px-2'>
                    <LeftSidebar />
                </div>
                <div className='flex flex-col justify-center'>
                    <div className='flex justify-start items-center gap-6'>
                        <div className='border h-24 w-24 rounded-full'>
                            <Lottie animationData={animationData} />
                        </div>
                        <div>
                            <h2 className='text-2xl font-bold'>Hi, <span className='text-purple-500'>{user?.name}</span></h2>
                            <h2>Email - <span>{user?.email}</span></h2>
                        </div>
                    </div>
                    {/* <div>
                        <input type="text" value={bio} onChange={(e) => setBio(e.target.value)} className='border py-2 px-4 my-4 outline-none text-purple-500' placeholder='Add or Update Bio' />
                        <button className='mx-6 border py-2 px-4 bg-purple-500 text-white' onClick={addBio}>Update</button>
                    </div> */}
                </div>
            </div>+
        </div>
    )
}

export default UserProfile