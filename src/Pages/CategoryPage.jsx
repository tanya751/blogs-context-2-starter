import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import Header from '../components/Header';

const CategoryPage = () => {
    const location = useLocation();
    const navigation = useNavigate();
    const category = location.pathname.split('/').at(-1);

    return (
        <div>
            <Header />
            
            {/* Container with flexbox to align the button and text */}
            <div className='max-w-2xl mx-auto'>
                <div className="flex items-center gap-4 mt-3 mb-3">
                    {/* Back button */}
                    <button 
                        onClick={() => navigation(-1)} 
                        className="border-2 border-y-4 border-slate-300 py-1 px-4 rounded-md text-red-400">
                        Back
                    </button>

                    {/* Blogs on [Category] */}
                    <h2 className="text-xl font-semibold">
                        Blogs On <span className="capitalize text-blue-700 underline">{category}</span>
                    </h2>
                </div>
            </div>
            
            <Blogs />
            <Pagination />
        </div>
    );
}

export default CategoryPage;
