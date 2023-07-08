import { useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../UserContext'
import axios from 'axios'

const DisplayAnswer = ({ queryData }) => {
    const navigate = useNavigate();
    const { user, token } = useContext(UserContext);
    const userId = user.id;
    const { id } = useParams();
    const deleteQuery = async () => {
        await axios.post(`http://localhost:3000/deleteAnswer/${id}`, { token, userId });
        navigate('/');
    }
    return (
        <div key={queryData.id}>
            {queryData.answer.map((ans) => (
                <div className='grid grid-cols-[3fr_1fr] my-10' key={queryData.answer.id}>
                    <div>
                        <div className='flex gap-4'>
                            <div className='flex flex-col items-center justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                </svg>
                                {ans.upVotes.length - ans.downVotes.length < 0 ? (
                                    <h2 className='font-bold text-red-500'>{ans.upVotes.length - ans.downVotes.length}</h2>
                                ) : (
                                    <h2 className='font-bold text-green-500'>{ans.upVotes.length - ans.downVotes.length}</h2>
                                )}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                            <h2>{ans.answerBody}</h2>
                        </div>
                        {user.id === ans.userId && (
                            <button className='py-1 px-2 bg-red-500 my-4 text-[12px] text-white' onClick={deleteQuery}>Delete</button>
                        )}
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <Link to={`/user/${ans.userId}`} className='flex flex-col justify-center items-center'>
                            <div className='flex items-center justify-center border rounded-full h-8 w-8 bg-green-500'>
                                <h2 className=''>{ans.userAnswered.charAt(0).toUpperCase()}</h2>
                            </div>
                            <span className='text-md'>{ans.userAnswered}</span>
                        </Link>
                        <span className='text-sm text-gray-500'>Answered On {ans.answeredOn.substring(0, 10)}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DisplayAnswer