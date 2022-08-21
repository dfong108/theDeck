import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({movie: {Title, Year, Poster, imdbID}}) => {
  return (
    // <Link to={`/${imdbID}`}>
        <div className='h-60 w-40 flex flex-col rounded-lg bg-black relative cursor-pointer'>
            <div className='absolute z-[10] hover:hidden bg-gray-800/40 w-full h-full'></div>
            <div className='h-[60%] w-full relative border-b-2 overflow-hidden'>
                <img src={Poster} />
            </div>
            <div className='flex text-[1rem]'>
                <h3>{Title}</h3>
                <p className='text-yellow'>{Year}</p>
            </div>
        </div>
    // </Link>
  )
}

export default MovieCard