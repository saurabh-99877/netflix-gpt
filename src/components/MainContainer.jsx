import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
const MainContainer = () => {
    const movies = useSelector(store => store.movie?.nowPlayingMovies);
    if(!movies)
        return;
      // console.log(movies, "from store");
  const mainMovie = movies[0];
  console.log(mainMovie, "mainMovie");
  const {overview, title, id} = mainMovie;
  // console.log(overview, title);

  return (
    <div className='overflow-hidden'>
        <VideoTitle title = {title} overview = {overview}/>
        <VideoBackground id={id}/>
    </div>
  )
}

export default MainContainer