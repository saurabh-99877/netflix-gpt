import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/movieSlice";
const useTopRatedMovies = () => {
 const dispatch = useDispatch();
 const topRated = useSelector((store) => store.movie?.topRatedMovies)
 const getTopRatedMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated',API_OPTIONS)
    const json = await data.json();
    // console.log(json, 'json is here');
    dispatch(addTopRatedMovies(json.results));
 }
 useEffect(() => {
   !topRated && getTopRatedMovies();
 })
};

export default useTopRatedMovies;