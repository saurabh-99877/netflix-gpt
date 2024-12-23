import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/movieSlice";
const useUpcomingMovies = () => {
 const dispatch = useDispatch();
 const upcoming = useSelector((store) => store.movie?.upcomingMovies);
 const getUpcomingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming',API_OPTIONS)
    const json = await data.json();
   //  console.log(json, 'json is here');
    dispatch(addUpcomingMovies(json.results));
 }
 useEffect(() => {
   !upcoming && getUpcomingMovies();
 })
};

export default useUpcomingMovies;