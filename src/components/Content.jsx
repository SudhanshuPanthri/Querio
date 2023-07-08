import Query from "./Query"
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import axios from "axios";
import Lottie from 'lottie-react';
import animationData from '../assets/search.json';

const Content = () => {
    const [queries, setQueries] = useState([]);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const checkAuth = () => {
        if (user === null) {
            alert("Please Login to ask a query");
            navigate('/auth/login');
        }
        else {
            navigate('/askQuery');
        }
    }
    // console.log(queries);

    useEffect(() => {
        try {
            axios.get('http://localhost:3000/getQueries').then(response => {
                setQueries([...response.data])
            })
        }
        catch (err) {
            console.log(err);
        }
    }, [])
    return (
        <div className="">
            <div className='flex justify-between items-center'>
                <h2 className='text-2xl'>All Queries</h2>
                <button onClick={checkAuth} className='py-2 px-4 bg-violet-500 text-white ease-in-out duration-300 hover:bg-violet-400'>Ask a Query</button>
            </div>
            {queries.length > 0 ? (
                <div>
                    {
                        queries.map((query) => (
                            <>
                                <Query query={query} key={query.id} />
                            </>
                        ))
                    }
                </div>
            ) : (
                <div className="flex flex-col justify-center items-center">
                    <Lottie animationData={animationData} />
                    <h1 className="text-2xl font-bold">No query exists</h1>
                </div>
            )}
        </div>
    )
}

export default Content