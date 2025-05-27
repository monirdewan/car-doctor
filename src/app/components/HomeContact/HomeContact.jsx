import Image from 'next/image';
import React from 'react';

const HomeContact = () => {
    return (
        <div className='bg-[#151515] p-4 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
            <div className='flex flex-col md:flex-row gap-2 justify-center items-center text-amber-50'>
                <div><Image src="assets/icons/Group 38729.svg" width={50} height={50} alt='Icon' /> </div>
                <div>
                    <p className='text-[16px]'>We are open monday-friday</p>
                    <p className='text-lg font-bold mt-1'>7:00 am - 9:00 pm</p>
                </div>
            </div>
               <div className='flex flex-col md:flex-row gap-2 justify-center items-center text-amber-50'>
                <div><Image src="assets/icons/Wrench.svg" width={50} height={50} alt='Icon' /> </div>
                <div>
                    <p className='text-[16px]'>We are open monday-friday</p>
                    <p className='text-lg font-bold mt-1'>7:00 am - 9:00 pm</p>
                </div>
            </div>
               <div className='flex flex-col md:flex-row gap-2 justify-center items-center text-amber-50'>
                <div><Image src="assets/icons/Group 38729.svg" width={50} height={50} alt='Icon' /> </div>
                <div>
                    <p className='text-[16px]'>We are open monday-friday</p>
                    <p className='text-lg font-bold mt-1'>7:00 am - 9:00 pm</p>
                </div>
            </div>
        </div>
    );
};

export default HomeContact;