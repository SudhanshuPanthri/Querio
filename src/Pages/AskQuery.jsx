// import React from 'react'
import { useState, useContext } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';
import { UserContext } from '../UserContext';


const AskQuery = () => {
    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const [tags, setTags] = useState('');
    const { token, user } = useContext(UserContext);
    const author = user.name;
    const authorId = user.id;
    const handleQuery = async () => {
        try {
            await axios.post('http://localhost:3000/askQuery', { token, author, authorId, title, body, tags });
            setTitle('');
            setBody('')
            setTags('');
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <div className='py-2 px-4'>
            <Navbar />
            <h1 className='text-3xl my-6'>Ask a public query</h1>
            <div className='my-4'>
                <h4 className='text-xl'>Title</h4>
                <p className='text-gray-500 text-sm'>Describe your query as precise as possible</p>
                <input type="text" placeholder='eg. How arrow functions are created in React ?' className='w-[80%] border outline-none py-2 px-4 my-2 text-purple-500' value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className='my-4'>
                <h4 className='text-xl'>Body</h4>
                <p className='text-gray-500 text-sm'>Include all the information someone would need to answer your query</p>
                <textarea type="text" className='w-[80%] border outline-none py-2 px-4 my-2 text-purple-500' value={body} onChange={(e) => setBody(e.target.value)} />
            </div>
            <div className='my-4'>
                <h4 className='text-xl'>Tags</h4>
                <p className='text-gray-500 text-sm'>Add upto 5 tags to describe what your question is about</p>
                <input type="text" placeholder='eg. Javscript,React,Frontend,Web Development' className='w-[80%] border outline-none py-2 px-4 my-2 text-purple-500' value={tags} onChange={(e) => setTags(e.target.value.split(','))} />
            </div>
            <div>
                <button className='py-2 px-4 border bg-purple-500 text-white hover:bg-purple-400 ease-in-out duration-300' onClick={handleQuery}>Review Your Query</button>
            </div>
        </div>
    )
}

export default AskQuery