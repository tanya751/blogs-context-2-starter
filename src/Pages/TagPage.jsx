import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const TagPage = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split('/').at(-1);

    return (
        <div>
            <Header />
            <div >
                <div  className=" inline-block mt-4 mb-3 border-2 border-y-4  border-slate-300 py-1 px-4 rounded-md text-red-400 max-w-2xl ">                
                    <button onClick={() => navigation(-1)}>Back</button>
                </div>
                <h2 className='font-bold'>
                    Blog Tagged  <span className='text-blue-600 underline'>#{tag}</span>
                </h2>
            </div>
            <Blogs />
            <Pagination />
        </div>
    )
}

export default TagPage