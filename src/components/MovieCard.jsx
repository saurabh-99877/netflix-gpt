import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';
 const MovieCard = ({poster}) => {
    // console.log(poster, "poster");
  return (
    <div className='shrink-0 '>
        <img src= {IMG_CDN_URL + "w200" + poster}
        alt="Movie Card"
        className='' />
    </div>
  )
};

export default MovieCard;
