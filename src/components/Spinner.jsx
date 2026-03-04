import React from 'react';

const Spinner = () => {
    return (
        <div className='text-center'>
            <span className="loading loading-ring loading-xl"></span>
            <span className="loading loading-ring loading-xl"></span>
            <span className="loading loading-ring loading-xl"></span>
            <span className="loading loading-ring loading-xl"></span>
        </div>
    );
};

export default Spinner;