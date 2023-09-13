import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

import Spinner from './Spinner'

const Blogs = () => {
    // Consume Context API Data 

    // 1. consume loading 
    const { post, loading } = useContext(AppContext);

    // console.log("printing inside post Component ");
    // console.log(post)

    return (
        <div className=" w-11/12  max-w-[500px]  py-3 flex flex-col gap-y-7 my-[100px]">
            {
                // loading we receive from context , 
                // if loading true show spinner , 
                // if loading false , show post 

                // But check if post length == 0 , show no data found 
                // if post.length != 0 , show data 
                loading ?
                    (<Spinner />) :

                    (
                        post.length === 0 ?
                            (
                                <div className="">
                                    No Post Found
                                </div>
                            ) : (
                                // (post) -> iterate over single single post 

                                // if map me () so no return  , but if use {} so need to return 

                                post.map((post) => (
                                    <div key={post.id}>
                                        <p className=" font-bold text-sm ">{post.title}</p>
                                        <p className="text-[14px]">
                                            By <span className="italic">{post.author}</span> on <span>{post.category}</span>
                                            <p className="text-[14px]">posted on {post.date}</p>

                                            <p className="text-[16px] mt-[13px]">{post.content}</p>

                                            <div className="flex flex-wrap gap-x-2 items-center">
                                                {/* if key nhi hota so we pass index as a key */}

                                                {post.tags.map((tag, index) => {

                                                    return <span className='text-blue-500 underline font-sans text-[12px]' key={index}>{`#${tag}`}</span>
                                                })}
                                            </div>
                                        </p>
                                    </div>
                                ))
                            )

                    )
            }
        </div>
    )
}

export default Blogs