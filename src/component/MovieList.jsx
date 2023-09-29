import React, { useEffect,useRef, useState } from 'react'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import Api from '../services/Api'
const ImageUrl='https://image.tmdb.org/t/p/original';
function MovieList({genre,index}) {
    const [movie,setMovie]=useState([]);
    useEffect(()=>{
        getMovieByGenre();
    },[])
    const getMovieByGenre=()=>{
        Api.getMovieByGenre(genre).then(res=>{
            console.log(res.data.results);
            setMovie(res.data.results);
        })
    }
    const elementRef = useRef();

    const slideleft=(element)=>{
      element.scrollLeft-=222;
  }
  const slideRight=(element)=>{
      element.scrollLeft+=222;
  }
  return (
    <div className='flex transition-all ease-linear duration-200 scroll-smooth items-center justify-center'>
      <FaChevronLeft className='absolute left-0 ml-2 text-[#0F1014] text-xl cursor-pointer ' onClick={()=>slideleft(elementRef.current)} />
      <div className='flex gap-2 overflow-auto scrollbar-hide' ref={elementRef}>
          {movie.map((item)=>(
            <img src={(index+1)%3==0 && index!=0 ?ImageUrl+item.backdrop_path:ImageUrl+item.poster_path} alt="" className=' m-2 ml-0 transition-all duration-150 shadow-md shadow-gray-600 ease-in-out hover:border-[1px] border-gray-500 hover:scale-110 object-cover w-[210px]' />
          ))}
      </div>
      <FaChevronRight className='absolute right-0 text-[#0F1014] text-xl mr-2 cursor-pointer' onClick={()=>slideRight(elementRef.current)}/>
    </div>
  )
}

export default MovieList