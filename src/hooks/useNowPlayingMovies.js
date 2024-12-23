import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from '../utils/constants';
import { useSelector } from "react-redux";

const useNowPlayingMovies = () => { 
    const dispatch = useDispatch();
    const nowPlaying = useSelector((store) => store.movie?.nowPlayingMovies);
    const getNowPlaying = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const json = await data.json();
        // console.log(json.results, "json.results");
        dispatch(addNowPlayingMovies(json.results));
      }
      useEffect(() => {
       !nowPlaying && getNowPlaying();
      }, [])
};

export default useNowPlayingMovies;