import React, { useContext } from 'react'

import { AppContext } from '../context/AppContext'

const Pagination = () => {

    const { page, handlePageChange, totalPages } = useContext(AppContext);

    return (
        <div className='class="fixed bottom-0 inset-x-0 bg-white py-2 border-t-2 border-t-gray-300 w-full'>
            <div className='flex items-center gap-x-3 w-11/12 max-w-2xl mx-auto'>

                {/* 
            if i write inside {} so this represents a condition
            {

            }  
            */}

                {page > 1 &&
                    <button className='border-2 border-gray-300 py-1 px-4 rounded-md' onClick={() => handlePageChange(page - 1)}>
                        Previous
                    </button>
                }

                {/* If our page total page se km ka hota hai , tb mai dikhaunga  */}
                {page < totalPages &&
                    <button className='border-2 border-gray-300 py-1 px-4 rounded-md' onClick={() => handlePageChange(page + 1)}>
                        Next
                    </button>
                }

                <p className='text-sm font-semibold ml-auto'>
                    Page {page} of {totalPages}
                </p>

            </div>
        </div>
    )
}

export default Pagination