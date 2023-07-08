// import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const RightSidebar = () => {
    const [newsData, setNewsData] = useState(null);

    const fetchNews = async () => {
        await axios.get(`https://newsdata.io/api/1/news?apikey=pub_238335c26bfed450a2ca527b77867b3a96a23&q=technology&country=in&language=en&category=technology`).then(response => {
            setNewsData(response.data.results);
        })
    }

    useEffect(() => {
        fetchNews();
    }, [])

    return (
        <div className='py-2 px-4 my-6 flex flex-col items-center justify-center'>
            <h2>News</h2>
            {newsData ? newsData.map((news) => (
                <div className='border my-4 grid grid-cols-[2fr_1fr] py-2 px-4' key={news.title}>
                    <div className='flex flex-col'>
                        <span className='text-[14px]'>{news.title}</span>
                        <Link to={news.link}><span className='text-sm text-gray-500'>Read More.</span></Link>
                    </div>
                    <div>
                        <img src={news.image_url} alt="" className='' />
                    </div>
                </div>
            )) : 'loading'}
        </div>
    )
}

export default RightSidebar