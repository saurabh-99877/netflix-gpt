import React, { useRef } from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movie }) => {
  const scrollContainerRef = useRef(null); // Ref for the scrollable container
// console.log(scrollContainerRef, "scrollContainerRef");
  function handleNext() {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += scrollContainerRef.current.offsetWidth;
    }
  }

  function handlePrev() {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= scrollContainerRef.current.offsetWidth;
    }
  }

  return (
    <div className='p-2 bg-black relative'>
      <h1 className='text-2xl py-4 text-white'>{title}</h1>
      {/* Arrows */}
      <span
        className='text-white text-2xl absolute top-1/2 left-2 transform  cursor-pointer 
         bg-black rounded-full p-2 hover:bg-red-500'
        onClick={handlePrev}
      >
        &#10094;
      </span>
      <span
        className='text-white text-2xl absolute top-1/2 right-5 transform  cursor-pointer z-10
        bg-black rounded-full p-2 hover:bg-red-500'
        onClick={handleNext}
      >
        &#10095;
      </span>
      {/* Scrollable content */}
      <div
        className='flex space-x-2 overflow-x-scroll scrollbar-hide'
        ref={scrollContainerRef}
      >
        {movie?.map((mov) => (
          <MovieCard key={mov?.id} poster={mov?.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
