import Image from 'next/image';
import React from 'react';

const HomeContact = () => {
    return (
        <div className='bg-[#151515] p-4 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div>
                <div><Image src="assets/icons/Group 38729.svg" width={50} height={50} alt='Icon' /> </div>
            </div>
        </div>
    );
};

export default HomeContact;