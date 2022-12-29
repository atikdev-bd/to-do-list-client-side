import React from 'react';
import { HashLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div>
            
            <h1 className='text-2xl flex justify-center text-center mt-12 font-bold'><HashLoader  color="#36d7b7" /></h1>
        </div>
    );
};

export default Loader;