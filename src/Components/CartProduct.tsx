import Image from 'next/image';
import React from 'react';
import FormattedPrice from './FormattedPrice';
import { LuMinus, LuPlus } from "react-icons/lu";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { decreaseQuantity, deleteProduct, increaseQuantity } from '@/store/nextSlice';


interface Item {
    brand: string,
    category:    string,
    description: string,
    image: string,
    isNew: boolean,
    oldPrice: number,
    price:   number,
    title: string,
    _id: number,
    quantity: number
}

interface cartProductProps{
    item: Item
}

const CartProduct = ({item}: cartProductProps) => {
    const dispatch = useDispatch()
    return (
        <div className='bg-gray-100 rounded-lg flex items-center gap-4'>
            <Image className='object-cover ' width={150} height={150} src={item.image} alt='productImage' />
            <div className='flex- items-center px-2 gap-4 '>
                    <div className='flex-flex-col gap-1'>
                        <p className='text-lg font-semibold text-amazon_gray'>{item.title}</p>
                        <p className='text-sm text-gray-600'>{item.description}</p>
                        <p className='text-sm text-gray-600 '>Unit Price {" "} <span className='font-semibold text-amazon_gray'><FormattedPrice amount={item.price} /></span></p>
                    </div>
                    <div className='flex items-center gap-6'>
                        <div className='flex items-center justify-between m-5 border-gray-300 px-4 rounded-full py-1 w-28 shadow-lg shadow-gray-300'>
                                <span onClick={() => dispatch(increaseQuantity({
                                    _id: item._id,
                                    title: item.title,
                                    description: item.description,
                                    brand: item.brand,
                                    category: item.category,
                                    image: item.image,
                                    price: item.price,
                                    quantity: 1
                                }))} className='w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent cursor-pointer hover:bg-gray-300 decorayion-purple-300'><LuPlus /></span>
                                <span>{item.quantity}</span>
                                <span onClick={() => dispatch(decreaseQuantity({
                                    _id: item._id,
                                    title: item.title,
                                    description: item.description,
                                    brand: item.brand,
                                    category: item.category,
                                    image: item.image,
                                    price: item.price,
                                    quantity: 1
                                }))} className='w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent cursor-pointer hover:bg-gray-300 decorayion-purple-300'><LuMinus /></span>
                        </div>
                        <div onClick={() => dispatch(deleteProduct(item._id))} className='flex items-center text-sm font-medium text-gray-400 hover:text-red-600 cursor-pointer duration-300'>
                        <FaTrashAlt className='mt-[2px] ' /> <p>remove</p>
                        </div>
                    </div>
                    <div className='text-lg font-semibold text-amazon_gray'>
                        <FormattedPrice amount={item.price * item.quantity} />
                        </div>
            </div>
        </div>
    )
}

export default CartProduct
