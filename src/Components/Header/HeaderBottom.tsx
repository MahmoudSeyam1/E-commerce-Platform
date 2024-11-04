import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux';
import { StateProps } from '../../../type';
import { signOut } from 'next-auth/react';
import { removeUser } from '@/store/nextSlice';

const HeaderBottom = () => {
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state: StateProps) => state.next);
    const handleSignOut = () => {
      signOut();
      dispatch(removeUser());
    };
    return (
    <div className='bg-amazon_gray w-full h-10 sticky flex items-center px-4 '>
        {/* all menu */}
        <div className='px-2 border border-transparent  duration-300 gap-1flex items-center justify-center h-full text-white hidden xl:inline-flex hover:border-white cursor-pointer text-md  md:inline-flex'>
            <GiHamburgerMenu className='w-8 h-5' />
            <p className='font-bold'>All</p>
        </div>
        {/* today's deals */}
        <div className='px-2 border border-transparent  duration-300 gap-1flex items-center justify-center h-full text-white hidden xl:inline-flex hover:border-white cursor-pointer text-md  md:inline-flex'>
            <p>Today s Deals</p>
        </div>
        {/* Customer Service */}
        <div className='px-2 border border-transparent  duration-300 gap-1flex items-center justify-center h-full text-white hidden xl:inline-flex hover:border-white cursor-pointer text-md  md:inline-flex'>
            <p>Customer Service</p>
        </div>
        {/* Registry */}
        <div className='px-2 border border-transparent  duration-300 gap-1flex items-center justify-center h-full text-white hidden xl:inline-flex hover:border-white cursor-pointer text-md  md:inline-flex'>
            <p>Registry</p>
        </div>
        {/* Gift Cards */}
        <div className='px-2 border border-transparent  duration-300 gap-1flex items-center justify-center h-full text-white hidden xl:inline-flex hover:border-white cursor-pointer text-md  md:inline-flex'>
            <p>Gift Cards</p>
        </div>
        {/* sell */}
        <div className='px-2 border border-transparent  duration-300 gap-1flex items-center justify-center h-full text-white hidden xl:inline-flex hover:border-white cursor-pointer text-md  md:inline-flex'>
            <p>Sell</p>
        </div>
        {/* sign out */}
        {userInfo && (
        <button
            onClick={handleSignOut}
            className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-red-600 hover:text-red-400 text-amazon_yellow cursor-pointer duration-300"
            >
            Sign Out
            </button>
        )}
    </div>
    )
}

export default HeaderBottom;
