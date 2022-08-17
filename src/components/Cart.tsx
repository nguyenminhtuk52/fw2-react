import React, { useEffect, useState } from 'react'
import { PageHeader } from 'antd';

import { useAppDispatch, useAppSelector } from '../app/hook';
import { decreaseQuantity, getTotalItems, increaseQuantity, removeItem } from '../features/cartSlice';

const CartPage = () => {
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector(state => state.cart.items)
    const total = useAppSelector(state => state.cart.total)
    useEffect(() => {
        dispatch(getTotalItems())
    }, [cartItems])
    return (
        <div className="bg-white">
            <h1>
                <PageHeader
                    className="site-page-header"
                    onBack={() => null}
                    title="Cart"
                    subTitle=""
                />
            </h1>
            <div>
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full">
                                    <thead className="bg-white border-b">
                                        <tr>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">

                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                Tên sản phẩm
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                Số Lượng
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                Giá
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">

                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className='bg-white'>
                                        {cartItems?.map(item => {
                                            return (
                                                <tr key={item.id} className="bg-gray-100 border-b bg-white">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-white">
                                                        <img src={item.image} alt="" width="70px" />
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap bg-white">
                                                        {item.name}
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap bg-white">
                                                        <div className="flex items-center bg-white">
                                                            <div className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg bg-white" role="group">
                                                                <button onClick={() => dispatch(increaseQuantity(item.id))} type="button" className="rounded-l inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out bg-white">+</button>
                                                                <button type="button" className=" inline-block px-6 py-2.5 bg-white text-black font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out bg-white">{item.quantity}</button>
                                                                <button onClick={() => dispatch(decreaseQuantity(item.id))} type="button" className=" rounded-r inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out bg-white">-</button>
                                                            </div>
                                                        </div>



                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap bg-white">
                                                        {item.price}
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap bg-white">
                                                        <button onClick={() => dispatch(removeItem(item.id))} type="button" className="inline-block px-2 py-2 border-2 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out bg-white">X</button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                                <div>
                                    <p className='text-2xl text-700 text-right pr-[80px] pt-[20px]'>Tổng Giá : {total}đ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CartPage