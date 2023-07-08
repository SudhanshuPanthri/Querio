// import React from 'react'
import { Link } from "react-router-dom"

const Query = ({ query }) => {
    return (
        <div className="flex my-2 gap-6" key={query._id}>
            <div className="border rounded-2xl grid grid-cols-[1fr_1fr_9fr] my-4 py-2 px-4 w-full">
                <div className="flex flex-col items-center justify-center">
                    <span className="text-md">
                        {query.upVotes.length - query.downVotes.length}
                    </span>
                    <span className="text-md">
                        votes
                    </span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <span className="text-md">
                        {query.answer.length}
                    </span>
                    <span className="text-md">
                        answers
                    </span>
                </div>
                <div className="mx-8 flex justify-between items-center">
                    <div className="flex flex-col w-full">
                        <Link className="text-lg text-gray-500" to={`/query/${query._id}`}>{query.title}</Link>
                        <div className="flex my-4">
                            {query.tags.map((tag) => (
                                <div className="mr-2 border py-1 px-2 bg-gray-200" key={tag.id} >
                                    <span className="text-[12px]">{tag}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-[50%]">
                        <div className="flex flex-col items-end">
                            <h2 className="text-sm">Asked By</h2>
                            <h2 className="text-sm">{query.author}</h2>
                        </div>
                        <div className="flex justify-end">
                            <h2 className="text-[12px]">Asked on {query.askedOn.substring(0, 10)}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Query