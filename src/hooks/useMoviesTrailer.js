import React, { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';

const useMoviesTrailer = (id) => {
    const dispatch = useDispatch();
    const trailer = useSelector((store) => store.movie?.trailerVideo);
   const getBackground = async () => {
     const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTIONS);
     const json = await data.json();
    //  console.log(json.results, "json.results");
     const filterData = json.results.filter((e) => e.type === "Trailer");
     const trailer = filterData.length ? filterData[0] : json.results[0];
     dispatch(addTrailerVideo(trailer));
}
useEffect(() => {
 !trailer && getBackground();
}, [])
}

export default useMoviesTrailer;