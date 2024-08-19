import React from 'react';

const Pagination = ({ active, itemsCountPerPage, totalItemsCount, onChange }) => {
    const totalPages = Math.ceil(totalItemsCount / itemsCountPerPage);

    const getPageRange = () => {
        const rangeStart = Math.max(1, active - 2);
        const rangeEnd = Math.min(totalPages, rangeStart + 4);
        return Array.from({ length: rangeEnd - rangeStart + 1 }, (_, index) => index + rangeStart);
    };
    return (
        <div
            aria-label='Pagination'
            className="flex justify-center items-center text-gray-600 mt-8 lg:mt-0 lg:flex-row mx-auto"
        >
            <button
                className="p-2 mr-4 rounded hover:bg-gray-100"
                onClick={() => onChange(active - 1)}
                disabled={active === 1}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {getPageRange().map((number) => (
                <button
                    key={number}

                    className={`px-4 py-2 rounded ${active === number ? 'bg-gray-200 text-gray-900 font-medium hover:bg-gray-100' : 'hover:bg-gray-100'}`}
                    onClick={() => onChange(number)}
                >
                    {number}
                </button>
            ))}

            {totalPages > 5 && (
                <button
                    className='py-2 rounded  text-gray-400 mb-2 ml-1 font-medium  '
                >
                    ...
                </button>
            )}

            <button
                className="p-2 ml-4 rounded hover:bg-gray-100"
                onClick={() => onChange(active + 1)}
                disabled={active === totalPages}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
};

export default Pagination;
