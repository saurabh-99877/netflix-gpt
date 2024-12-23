import React, { useEffect } from 'react';
import useMoviesTrailer from '../hooks/useMoviesTrailer';
import { useSelector } from 'react-redux';
const VideoBackground = ({id}) => {
  useMoviesTrailer(id);
  const trailerVideo = useSelector((store) => store.movie?.trailerVideo);
  return (
    <div className=''>
    <div className='relative -top-6 sm:-top-12 md:-top-20 lg:-top-24 xl:-top-28'>
    <iframe className='w-screen aspect-video'
     src={'https://www.youtube.com/embed/' + 
      trailerVideo?.key + "?&autoplay=1&mute=1"}
       title="YouTube video player"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       referrerpolicy="strict-origin-when-cross-origin" allowFullScreen>
       </iframe>
    </div>
    </div>
  )
}

export default VideoBackground;