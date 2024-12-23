import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='hidden lg:block mx-7 text-white absolute z-10 max-w-xl top-1/4 px-4
     '>
        <h1 className='text-2xl lg:text-4xl font-bold mb-6'>{title}</h1>
        <p className='text-lg leading-relaxed'>{overview}</p>
        <div className='my-8 md:text-xl font-bold'>
          <button className='bg-blue-500 px-6 py-3 md:py-4 md:px-8 rounded-lg mr-4'>Play</button>
          <button className='bg-blue-500 px-6 py-3 md:py-4 md:px-8 rounded-lg'>More info</button>
        </div>
    </div>
  )
}

export default VideoTitle;