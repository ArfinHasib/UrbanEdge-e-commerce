import React from 'react';
import Slider from 'react-slick';

const TestimonialData = [
   {
      id: 1,
      name: 'Victor',
      text: 'Shopsy is my go-to online shopping destination! The platform offers a seamless experience from start to finish. I love how user-friendly the website is, making it easy to find exactly what I need. Whether Im browsing for fashion, electronics, or home essentials, Shopsy has a wide range of products to choose from.',
      img: 'https://picsum.photos/101/101',
   },
   {
      id: 2,
      name: 'Narmin Johns',
      text: 'What I appreciate most about Shopsy is the quality of their customer service. Whenever Ive had a question or needed assistance, their support team has been incredibly responsive and helpful. Its reassuring to know that I can rely on them for any concerns I may have. Definitely going to shop again',
      img: 'https://picsum.photos/102/102',
   },
   {
      id: 3,
      name: 'John Kent',
      text: 'Another standout feature of Shopsy is their fast and efficient delivery. Ive always received my orders promptly, which is especially important when Im shopping for gifts or essentials. The packaging is also top-notch, ensuring that my items arrive in perfect condition',
      img: 'https://picsum.photos/104/104',
   },
   {
      id: 5,
      name: 'Sarah Williams',
      text: 'Overall, I highly recommend Shopsy to anyone looking for a convenient and reliable online shopping experience. With their extensive product selection, excellent customer service, and quick delivery, Shopsy has become my favorite place to shop online. Try it out for yourself—you wont be disappointed',
      img: 'https://picsum.photos/103/103',
   },
];

const Testimonials = () => {
   var settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: 'linear',
      pauseOnHover: true,
      pauseOnFocus: true,
      responsive: [
         {
            breakpoint: 10000,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
               infinite: true,
            },
         },
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               initialSlide: 2,
            },
         },
         {
            breakpoint: 640,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   };

   return (
      <div className='py-10 mb-10'>
         <div className='container'>
            {/* header section */}
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
               <p data-aos='fade-up' className='text-xl text-primary'>
                  What our customers are saying
               </p>
               <h1 data-aos='fade-up' className='text-4xl font-bold py-3'>
                  Testimonials
               </h1>
               <p data-aos='fade-up' className='text-xl text-gray-400'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                  asperiores modi Sit asperiores modi
               </p>
            </div>

            {/* Testimonial cards */}
            <div data-aos='zoom-in'>
               <Slider {...settings}>
                  {TestimonialData.map((data) => (
                     <div className='my-6' key={data.id}>
                        <div
                           key={data.id}
                           className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative'
                        >
                           <div className='mb-4'>
                              <img
                                 src={data.img}
                                 alt=''
                                 className='rounded-full w-20 h-20'
                              />
                           </div>
                           <div className='flex flex-col items-center gap-4'>
                              <div className='space-y-3'>
                                 <p className='text-[16px] text-[#c2c1c1]'>
                                    {data.text}
                                 </p>
                                 <h1 className='text-xl font-bold text-black/80 dark:text-white'>
                                    {data.name}
                                 </h1>
                              </div>
                           </div>
                           <p className='text-[#c2c2c2] text-6xl font-serif absolute top-0 right-5'>
                              ,,
                           </p>
                        </div>
                     </div>
                  ))}
               </Slider>
            </div>
         </div>
      </div>
   );
};

export default Testimonials;
