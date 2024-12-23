import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  return (
    <div className='-mt-14 sm:-mt-44 lg:-mt-72 scrollbar-hide'>
       <MovieList title = {"Now Playing"} movie={movies?.nowPlayingMovies}/>
       <MovieList title = {"Popular"} movie={movies?.popularMovies}/>
       <MovieList title = {"Top Rated"} movie={movies?.topRatedMovies}/>
       <MovieList title = {"Upcoming"} movie={movies?.upcomingMovies}/>
    </div>
  )
}

export default SecondaryContainer;        