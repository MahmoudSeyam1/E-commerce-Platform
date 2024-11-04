import React from 'react';
import { ProductProps } from "../../type";
import Image from 'next/image';
import { MdShoppingCart } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import FormattedPrice from './FormattedPrice';
import { useDispatch } from 'react-redux';
import { addToCart, addToFavorite } from '@/store/nextSlice';


const Product = ({ productData }: { productData: ProductProps[] }) => {
    const dispatch = useDispatch()
    return (
        <div className='w-full px-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'>
            {productData.map(
                ({ _id, title, brand, category, description, image, isNew, oldPrice, price }) => (
                    <div key={_id} className='w-full bg-white  text-black p-4 border border-gray-300 rounded-lg group'>
                        <div className='w-full h-[260px]  relative overflow-hidden'>
                        <Image className='w-full h-full object-cover scale-90 hover:scale-100 transition-transform duration-300 cursor-pointer' width={300} height={300} src={image} alt=''/>
                        <div className='w-12 h-24 absolute bottom-10 right-0 border-[1px] border-gray-400 bg-white rounded-md flex flex-col translate-x-20 group-hover:translate-x-0 duration-300 transition-transform'>
                            <span onClick={()=> dispatch(addToCart({
                                _id: _id,
                                title: title,
                                description: description,
                                brand: brand,
                                category: category,
                                image: image,
                                price: price,
                                quantity: 1
                            }))} className='w-full h-full border-b-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300'><MdShoppingCart /></span>
                            <span onClick={()=> dispatch(addToFavorite({
                                _id: _id,
                                title: title,
                                brand: brand,
                                category: category,
                                image: image,
                                price: price,
                                quantity: 1
                            }))} className='w-full h-full border-b-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300'><FaHeart /></span>
                        </div>
                            {isNew && <p className='absolute top-0 right-0 text-amazon_gray font-medium text-xs tracking-wide animate-bounce '>!save <FormattedPrice amount={oldPrice - price} /> 
                            </p>}
                        </div>
                        <hr />
                        <div className='px-4 py-3 flex flex-col gap-1'>
                            <p className='text-xs text-gray-500 tracking-wide'>{category}</p>
                            <p className='text-base font-medium'>{title}</p>
                            <p className='flex items-center gap-2'>
                                <span className='text-sm line-through'><FormattedPrice  amount={oldPrice}/></span>
                                <span className='font-semibold text-amazon_gray'><FormattedPrice  amount={price}/></span>
                            </p>
                            <p className='text-xs text-gray-600 justify-center'>{description .substring(0, 120)}</p>
                            <button onClick={()=> dispatch(addToCart({
                                _id: _id,
                                title: title,
                                description: description,
                                brand: brand,
                                category: category,
                                image: image,
                                price: price,
                                quantity: 1
                            }))} className='h-10 font-medium bg-amazon_gray text-white rounded-md hover:bg-amazon_yellow hover:text-black duration-300 mt-2'>Add to Cart</button>
                        </div>
                    </div>
                    
                )
            )}
        </div>
    );
};

export default Product
