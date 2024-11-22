import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from '../utils/constants';

const useNowPlayingMovies = () => { 
    const dispatch = useDispatch();
    const getNowPlaying = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const json = await data.json();
        console.log(json.results, "json.results");
        dispatch(addNowPlayingMovies(json.results));
      }
      useEffect(() => {
        getNowPlaying();
      }, [])
};

export default useNowPlayingMovies;