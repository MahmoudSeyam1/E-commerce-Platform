import React, { useEffect } from 'react';
import Image from 'next/image';
import amazon_logo from '../../images/logo.png';
import { MdLocationPin } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import flag_img from '../../images/flag_12356656.png';
import { FaCaretDown } from "react-icons/fa";
import cart from '../../images/cart.png';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { StateProps } from '../../../type';
import { useSession, signIn, signOut } from "next-auth/react";
import { addUser } from '@/store/nextSlice';

const Header = () => {
    const { data: session } = useSession();
    const { productData, userInfo} = useSelector((state: StateProps) => state.next);

    const dispatch = useDispatch();
    useEffect(() => {
        if (session) {
            dispatch(
                addUser({
                    name: session?.user?.name,
                    email: session?.user?.image,
                    image:  session?.user?.image,
                })
            );
        }
    },[dispatch, session]);



    return (
        <div className='bg-black w-full h-20 sticky top-0 z-50'>
            <div className='h-full w-full mx-auto inline-flex justify-between items-center gap-1 mdl:gap-3 px-4'>
                {/* Logo */}
                <Link href='/' className='px-2 border border-transparent hover:border-white duration-300 cursor-pointer flex items-center justify-center h-[70%]'>
                    <Image className='w-28 object-cover mt-1' src={amazon_logo} alt='Amazon logo' width={100} height={30} />
                </Link>

                {/* Delivery */}
                <div className='px-2 border border-transparent hover:border-white duration-300 cursor-pointer items-center justify-center h-[70%] text-white hidden xl:inline-flex'>
                    <MdLocationPin />
                    <div className='text-xs'>
                        <p>Deliver to</p>
                        <p className='font-bold uppercase'>Egypt</p>
                    </div>
                </div>

                {/* Search Bar */}
                <div className='h-10 flex-1 justify-between items-center md:inline-flex hidden relative'>
                    <div className='h-10 px-2 flex justify-between items-center text-black bg-amazon_silver rounded-tl rounded-bl cursor-pointer'>
                        All <FaCaretDown />
                    </div>
                    <input
                        type='search'
                        className='w-full h-full rounded-tr rounded-br placeholder:text-sm text-black text-base font-bolder px-2 border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow'
                        placeholder='Search Amazon'
                    />
                    <span className='w-12 h-full bg-amazon_yellow cursor-pointer text-2xl flex items-center justify-center absolute right-0 rounded-br rounded-tr'>
                        <IoSearch />
                    </span>
                </div>

                {/* Language */}
                <div className='px-2 border border-transparent duration-300 items-center justify-center h-[70%] text-white hidden xl:inline-flex hover:border-white cursor-pointer md:inline-flex'>
                    <div className='bg-transparent border-none text-white text-sm font-bold py-2 flex items-center justify-center'>
                        <Image className='w-5 h-4' src={flag_img} alt='Flag' width={20} height={15} />
                        <p>EN</p>
                    </div>
                    <FaCaretDown />
                </div>

                {/* Account & Lists */}
                {userInfo ? (  
                    <div className='px-2 border border-transparent duration-300 flex-col items-start justify-center h-[70%] text-white hidden xl:inline-flex hover:border-white cursor-pointer text-sm md:inline-flex'>
                    <Image src={userInfo.image} width={33} height={33} alt="user image" className=' rounded-full object-cover' />
                    <div className='text-xs text-gray-200 flex flex-col font-bold'>
                        <p>{userInfo.name}</p>
                    </div>
                </div>
                ) : (  
                    <div onClick={()=> signIn()} className='px-2 border border-transparent duration-300 flex-col items-start justify-center h-[70%] text-white hidden xl:inline-flex hover:border-white cursor-pointer text-sm md:inline-flex'>
                    <p>Hello, sign in</p>
                    <p className='flex items-center font-bold'>Account & Lists <FaCaretDown /></p>
                </div>)}

                {/* Return & Orders */}
                <div className='px-2 border border-transparent duration-300 flex-col items-start justify-center h-[70%] text-white hidden xl:inline-flex hover:border-white cursor-pointer text-sm md:inline-flex'>
                    <p>Return</p>
                    <p className='flex items-center font-bold'>& Orders</p>
                </div>

                {/* Cart */}
                <Link href='/Cart' className='px-2 border border-transparent flex duration-300 items-center justify-center h-[70%] text-white hover:border-white cursor-pointer relative'>
                    <Image className='w-auto object-cover h-8' src={cart} alt='Cart' width={30} height={30} />
                    <p className='mt-3 font-bold'>Cart</p>
                    <span className='text-amazon_yellow font-bold text-lg absolute top-0 left-[29px]'>
                        {productData ? productData.length : 0}
                    </span>
                </Link>
            </div>
        </div>
    );
}

export default Header;
