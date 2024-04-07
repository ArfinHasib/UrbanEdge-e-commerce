import React from 'react';
import Img1 from '../../assets/shirt/shirt.png';
import Img2 from '../../assets/shirt/shirt2.png';
import Img3 from '../../assets/shirt/shirt3.png';
import { FaStar } from 'react-icons/fa';

const ProductsData = [
   {
      id: 1,
      img: Img1,
      title: 'Casual Wear',
      description:
         'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
   },
   {
      id: 2,
      img: Img2,
      title: 'Printed shirt',
      description:
         'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
   },
   {
      id: 3,
      img: Img3,
      title: 'Women shirt',
      description:
         'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
   },
];
const TopProducts = ({ handleOrderPopup }) => {
   return (
      <div>
         <div className='container'>
            {/* Header section */}
            <div className='text-left mb-24'>
               <p data-aos='fade-up' className='text-xl text-primary py-2'>
                  Top Rated Products for you
               </p>
               <h1 data-aos='fade-up' className='text-4xl font-bold'>
                  Best Products
               </h1>
               <p data-aos='fade-up' className='text-xl text-gray-400 py-2'>
                  Buy the products that people love and enjoyed
               </p>
            </div>
            {/* Body section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
               {ProductsData.map((data) => (
                  <div
                     key={data.id}
                     data-aos='zoom-in'
                     className='rounded-2xl bg-white dark:bg-gray-800 relative shadow-xl duration-300 group max-w-[300px]'
                  >
                     {/* image section */}
                     <div className='h-[100px]'>
                        <img
                           src={data.img}
                           alt=''
                           className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-125 duration-300 drop-shadow-md'
                        />
                     </div>
                     {/* details section */}
                     <div className='p-4 text-center'>
                        {/* star rating */}
                        <div className='w-full flex items-center justify-center gap-1'>
                           <FaStar className='text-yellow-500' />
                           <FaStar className='text-yellow-500' />
                           <FaStar className='text-yellow-500' />
                           <FaStar className='text-yellow-500' />
                        </div>
                        <h1 className='text-xl font-bold'>{data.title}</h1>
                        <p className='text-gray-500 duration-300 text-sm line-clamp-2'>
                           {data.description}
                        </p>
                        <button
                           className='text-center mt-10 cursor-pointer bg-primary text-white py-2 px-5 rounded-full font-bold hover:scale-110 transition-all hover:bg-white hover:text-black'
                           onClick={handleOrderPopup}
                        >
                           Order Now
                        </button>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default TopProducts;
