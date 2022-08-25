import React, { useEffect, useState } from 'react';
import { AiTwotoneTags } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import useProducts from '../../hook/useProducts';
const OverView = () => {
    const [purchases, setPurchase] = useState([]);
    const [product] = useProducts([])
    useEffect(() => {
        fetch(`https://hexatech-server.herokuapp.com/purchase`)
            .then(res => res.json())
            .then(data => setPurchase(data))
    }, [])

    

    return (
        <div>
            <div>
                <div className="mx-5 mb-10">
                    <div className="grid lg:grid-cols-2 gap-5 items-center justify-center h-full">
                        <div className="bg-white shadow-2xl p-6 rounded-2xl border-2 border-gray-50">
                            <div className="flex flex-col">
                                <div>
                                    <h2 className="font-bold text-gray-600 text-center">Purchase Item</h2>
                                </div>
                                <div className="my-2">
                                    <div className="flex flex-row space-x-4 justify-center items-center">
                                         <div id="icon">
                                            <span className='text-5xl text-orange-400'>
                                                <AiTwotoneTags/>
                                            </span>
                                        </div> 
                                        <div id="temp">
                                            <h4 className="text-4xl">{purchases.length}</h4>
                                            <p className="text-xs text-gray-500"></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
                                    <Link to="#" className="text-indigo-600 text-xs font-medium">View more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white shadow-2xl p-6 rounded-2xl border-2 border-gray-50">
                            <div className="flex flex-col">
                                <div>
                                    <h2 className="font-bold text-gray-600 text-center">Inventory Item</h2>
                                </div>
                                <div className="my-2">
                                    <div className="flex flex-row justify-center space-x-4 items-center">
                                    <div id="icon">
                                            <span className='text-5xl text-green-200'>
                                                <AiTwotoneTags/>
                                            </span>
                                        </div> 
                                        <div id="temp">
                                            <h4 className="text-4xl">{product.length}</h4>
                                            <p className="text-xs text-gray-500"></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
                                    <Link to="#" className="text-indigo-600 text-xs font-medium">View more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white shadow-2xl p-6 rounded-2xl border-2 border-gray-50">
                            <div className="flex flex-col">
                                <div>
                                    <h2 className="font-bold text-gray-600 text-center">Sales Item</h2>
                                </div>
                                <div className="my-2">
                                    <div className="flex flex-row justify-center space-x-4 items-center">
                                    <div id="icon">
                                            <span className='text-5xl text-green-300'>
                                                <AiTwotoneTags/>
                                            </span>
                                        </div> 
                                        <div id="temp">
                                            <h4 className="text-4xl">0</h4>
                                            <p className="text-xs text-gray-500"></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
                                    <Link to="#" className="text-indigo-600 text-xs font-medium">View more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white shadow-2xl p-6 rounded-2xl border-2 border-gray-50">
                            <div className="flex flex-col">
                                <div>
                                    <h2 className="font-bold text-gray-600 text-center">Invoice</h2>
                                </div>
                                <div className="my-2">
                                    <div className="flex flex-row justify-center space-x-4 items-center">
                                    <div id="icon">
                                            <span className='text-5xl text-red-200'>
                                                <AiTwotoneTags/>
                                            </span>
                                        </div>
                                        <div id="temp">
                                            <h4 className="text-4xl">0</h4>
                                            <p className="text-xs text-gray-500"></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
                                    <Link to="#" className="text-indigo-600 text-xs font-medium">View more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverView;