import React, { useEffect } from 'react';
import useMoviesTrailer from '../hooks/useMoviesTrailer';
import { useSelector } from 'react-redux';
const VideoBackground = ({id}) => {
  useMoviesTrailer(id);
  const trailerVideo = useSelector((store) => store.movie?.trailerVideo);
  return (
    <div className='w-screen'>
    <iframe className='w-screen  aspect-video absolute -top-14 '
     src={'https://www.youtube.com/embed/' + trailerVideo?.key + "?&autoplay=1&mute=1"} title="YouTube video player"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       referrerpolicy="strict-origin-when-cross-origin" allowFullScreen>
       </iframe>
    </div>
  )
}

export default VideoBackground;