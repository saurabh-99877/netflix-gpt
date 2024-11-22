import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='max-w-2xl mx-14 absolute top-1/2 z-10'>
        <h1 className='text-4xl font-bold mb-6'>{title}</h1>
        <p className='text-xl leading-relaxed'>{overview}</p>
        <div className='my-10 text-3xl font-bold'>
          <button className='bg-blue-500 py-4 px-8 rounded-lg mr-4'>Play</button>
          <button className='bg-blue-500 py-4 px-8 rounded-lg'>More info</button>
        </div>
    </div>
  )
}

export default VideoTitle