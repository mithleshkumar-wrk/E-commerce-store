import React from 'react'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const RatingStar = ({starRating}) => {
    const fullStars = Math.floor(starRating);
    const halfStar = starRating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1: 0);

    const stars = [];

    // full star
    for(let i=0; i<fullStars; i++){
        stars.push(<span key={`full-${i}`}><FaStar/></span>)
    }

    // half star
    if(halfStar){
        stars.push(<span key={"half"}><FaStarHalfAlt/></span>)
    }

    //empty stars
    for(let i=0; i<emptyStars; i++){
        stars.push(<span key={`Empty-${i}`}><FaRegStar/></span>)
    }

  return <div className='flex text-yellow-500'>{stars}</div>
  
}

export default RatingStar