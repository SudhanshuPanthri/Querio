import { useEffect, useState, useContext } from 'react'
import Navbar from '../components/Navbar'
import LeftSidebar from '../components/LeftSidebar'
import { Link, useParams, useNavigate } from 'react-router-dom'
import DisplayAnswer from '../components/DisplayAnswer'
import axios from 'axios'
import { UserContext } from '../UserContext'
import Lottie from 'lottie-react';
import animationData from '../assets/97930-loading.json'

const QueryPage = () => {
    const [answerBody, setAnswerBody] = useState()
    const [queryData, setQueryData] = useState();
    const { id } = useParams();
    const { user, token } = useContext(UserContext)
    const userId = user.id;
    const navigate = useNavigate();
    const userAnswered = user.name
    const handleAnswer = async () => {
        await axios.post('http://localhost:3000/postAnswer', { id, answerBody, userId, userAnswered });
        setAnswerBody('');
        setTimeout(() => {
            navigate(`/`);
        }, 1000);
    }
    const getQuery = async () => {
        const { data } = await axios.get(`http://localhost:3000/getQueries/${id}`);
        setQueryData(data);
    }
    const handleUpVote = async () => {
        const { data } = await axios.post(`http://localhost:3000/getQueries/${id}/upVotes`, { userId });
        setQueryData(data);
        navigate('/')
    }
    const handleDownVote = () => { }
    const deleteQuery = async () => {
        await axios.post(`http://localhost:3000/deleteQuery/${id}`, { token });
        navigate('/');
    }
    useEffect(() => {
        try {
            setTimeout(() => {
                // if (id == null) return navigate('/');
                getQuery();
            }, 1000)
        }
        catch (err) {
            console.log(err);
        }
    }, [])
    return (
        <div className="">
            <Navbar />
            <div className='grid grid-cols-[1fr_4fr] gap-2 my-2'>
                <div className='top-10 sticky h-[40vh] px-2'>
                    <LeftSidebar />
                </div>
                {queryData && id ? (
                    <div className='grid grid-cols-[2fr_1fr] gap-2 py-2 px-4'>
                        <div key={queryData._id}>
                            <div className='my-4'>
                                <h2 className='text-2xl font-semibold'>{queryData.Title}</h2>
                            </div>
                            <div className='grid grid-cols-[1fr_10fr_4fr]'>
                                <div className='flex flex-col items-center justify-center'>
                                    <div className='hover:cursor-pointer' onClick={handleUpVote}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                        </svg>
                                    </div>
                                    {queryData.upVotes.length - queryData.downVotes.length < 0 ? (
                                        <h2 className='font-bold text-red-500'>{queryData.upVotes.length - queryData.downVotes.length}</h2>
                                    ) : (
                                        <h2 className='font-bold text-green-500'>{queryData.upVotes.length - queryData.downVotes.length}</h2>
                                    )}
                                    <div className='hover:cursor-pointer' onClick={handleDownVote}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center items-start py-2 px-4'>
                                    <h2>{queryData.body}</h2>
                                    <div className='flex'>
                                        {queryData.tags.map(tag => (
                                            <span className="mr-2 border py-1 px-2 bg-gray-200 text-[12px] my-2" key={tag}>{tag}</span>
                                        ))}
                                    </div>
                                    {user.id === queryData.authorId && (
                                        <button className='py-1 px-2 bg-red-500 my-4 text-white' onClick={deleteQuery}>Delete</button>
                                    )}
                                </div>
                                <div className='flex justify-center items-center flex-col'>
                                    <Link to={`/user/${queryData.author}`} className='flex flex-col justify-center items-center'>
                                        <div className='flex items-center justify-center border rounded-full h-8 w-8 bg-orange-500'>
                                            <h2 className=''>{queryData.author.charAt(0).toUpperCase()}</h2>
                                        </div>
                                        <span className='text-md'>{queryData.author}</span>
                                    </Link>
                                    <span className='text-sm text-gray-500'>Asked On {queryData.askedOn.substring(0, 10)}</span>
                                </div>
                            </div>
                            <div className='my-2'>
                                {queryData.answer.length > 0 && (
                                    <div className='py-2 px-4'>
                                        <div className='font-bold'>
                                            <h2 className='capitalize'>{queryData.answer.length} answers</h2>
                                        </div>
                                        <div>
                                            <DisplayAnswer key={queryData._id} queryData={queryData} />
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className='flex flex-col my-6'>
                                <h2 className='font-bold my-4'>Your Answer</h2>
                                <textarea cols="30" rows="10" className='border outline-none py-2 px-4' value={answerBody} onChange={(e) => setAnswerBody(e.target.value)} />
                                <button className='py-2 px-4 bg-purple-500 w-1/4 my-4 text-white' onClick={handleAnswer}>Post Your Answer</button>
                            </div>
                            <div>
                                <span>Browse other questions with the same tag</span>
                                <div className='flex'>
                                    {queryData.tags.map(tag => (
                                        <Link to={`/query:${tag}`} key={tag}><span className="mr-2 border py-1 px-2 bg-gray-200 text-[12px] my-2" key={tag}>{tag}</span></Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='flex justify-center items-center w-2/4'>
                        <Lottie animationData={animationData} className='h-[150px] w-[150px]' />
                    </div>
                )}
            </div>
        </div >
    )
}

export default QueryPage