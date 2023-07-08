// import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react"
import Navbar from "../components/Navbar";
import LeftSidebar from "../components/LeftSidebar";

const TopContributors = () => {
    const [userData, setUserData] = useState([]);

    const getAllUsers = async () => {
        const { data } = await axios.get("http://localhost:3000/topContributors");
        setUserData(data);
    }
    console.log(userData);
    useEffect(() => {
        getAllUsers();
    }, [])

    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-[1fr_2fr]">
                <LeftSidebar />
                <div>
                    {userData.map((user) => {
                        return (
                            <div key={user._id} className="flex justify-between">
                                <h2>{user.name}</h2>
                                <h3>{user.noOfQueryAnswered}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default TopContributors