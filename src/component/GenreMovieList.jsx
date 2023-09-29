import React from 'react'
import genre from '../constant/GenreList'
import MovieList from './MovieList'

function GenreMovieList() {
  return (
    <div>
        {genre.map((item,index)=>(
            
            <div className='p-8 px-8 md:px-16'>
                <h2 className='text-[20px] font-bold'>{item.name}</h2>
                <MovieList genre={item.id} index={index}/>
                
            </div>
        ))}
    </div>
  )
}

export default GenreMovieList