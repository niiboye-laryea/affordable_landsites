
import { ChevronsLeft, ChevronsRight, LucideArrowBigRight } from 'lucide-react';
import React, { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste 
    magnam repudiandae neque repellat quasi officiis exercitationem ipsa fugit, 
    corporis sequi veritatis inventore dolore, aliquam ipsum porro quas 
    consequatur totam nihil.`,
    `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est ducimus voluptatem 
    vitae quia esse ut iste laudantium nisi laboriosam unde atque quisquam eveniet, 
    accusantium culpa voluptate, fugiat facilis illum. Suscipit?`,
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quis aspernatur ex 
    delectus incidunt ea commodi culpa quos, corporis temporibus non inventore minus 
    libero hic consequatur perspiciatis tempora architecto itaque!`,
    // Add more testimonials if needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full pt-10 px-10">
      <p className="font-bold text-5xl text-wrap text-sky-500 text-center mb-8">What customers say</p>
      <div className="relative w-fit border-2 px-20">
        <button
          onClick={prevSlide}
          className="absolute left-0 p-2 transform -translate-y-1/2 top-1/2 z-10 bg-white bg-opacity-75 hover:bg-opacity-100"
        >
          <span><ChevronsLeft color="#00a6f4" /></span>
        </button>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-full text-center px-4 py-4 transition-opacity duration-500">
                {testimonial}
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-0 p-2 transform -translate-y-1/2 top-1/2 z-10 bg-white bg-opacity-75 hover:bg-opacity-100"
        >
          <span><ChevronsRight color="#00a6f4" /></span>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;