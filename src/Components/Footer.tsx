import Image from 'next/image';
import React from 'react';
import logo from '../images/logo.png';
import Link from 'next/link';
import EG_flag from   '../images/EG-flag.png';
import { useSelector } from 'react-redux';
import { StateProps } from '../../type';
import { signIn } from 'next-auth/react';


const Footer = () => {
    const {userInfo} = useSelector((state: StateProps) => state.next);
    return (
        <div className=''>
            {userInfo ? (
                <div></div>
            ) : (
                <div className='w-[90%] h-25 flex flex-col justify-center items-center text-black py-4 border border-gray-400 gap-2 m-auto mb-5'>
                        <h1 className='text-xl font-bold '>See Personalized recommendations</h1>
                        <button onClick={()=> signIn()} className='bg-yellow-400 w-40 rounded-md h-8 '>Sign in</button>
                        <p>New customer? <span className='text-blue-600 cursor-pointer' onClick={()=> signIn()}>Start here.</span></p>
                </div>
            )}
            <div className='w-full h-12 bg-gray-600 text-white flex items-center justify-center text-md hover:bg-gray-500 cursor-pointer'>
                <Link href={'/'}>Back to Top</Link>
            </div>
        <div className='w-full h-20 bg-amazon_gray text-gray-300 flex items-center justify-center gap-3 px-2 '>
            <Image className='w-24' src={logo} alt=''/>
            <div className='flex items-center justify-center gap-2 cursor-pointer px-2 h-10 border border-gray-400'>
            <p>USD - US.Dollar</p>
            </div>
            <div className=' border border-gray-400 flex items-center justify-center gap-2 cursor-pointer px-2 h-10'>
            <Image className='w-8 h-5' src={EG_flag} alt='' />
            <p>Egypt</p>
            </div>
        </div>
        </div>
    
    )
}

export default Footer
