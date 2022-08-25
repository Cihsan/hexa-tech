import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Rating from 'react-rating';
const Reviews = () => {
    return (
        <div>
            <h1 className='my-12 text-center text-5xl font-bold'>Reviews</h1>
            <div className="flex items-center justify-center">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    <div className="relative bg-white py-6 px-6 rounded-xl my-4 shadow-xl">
                        <div className="mt-8">
                            <div className='flex items-center'>
                                <img src=''
                                    className="w-6 h-6 rounded-full " alt='' />
                                <p className="text-xl font-semibold my-2 ml-2">Name</p>
                            </div>
                            <div className="text-gray-400 text-md mb-3">
                                <p>Reveiws</p>
                            </div>
                            <div className="border-t-2">Reveiw</div>

                            <div className="flex justify-between">
                                <div className="my-2">
                                    <p className="font-semibold text-base mb-2">Rating</p>
                                </div>
                                <div className="my-2">
                                    <Rating initialRating='4.5' emptySymbol={<AiOutlineStar />} fullSymbol={<AiFillStar className='text-yellow-500' />} readonly
                                    ></Rating>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;