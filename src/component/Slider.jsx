import React, { useEffect, useRef, useState } from 'react'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import Api from "./../services/Api"
const BACKDROP='https://image.tmdb.org/t/p/original';
const screenWidth = window.innerWidth;
function Slider() {

    useEffect(()=>{
        getTrending();
    },[])

    const [movieList,setMovieList] = useState([]);
    const elementRef = useRef();
    const getTrending = ()=>{
        Api.getTrending.then(res=>{
            console.log(res.data.results);
            setMovieList(res.data.results);
        })
    }
    const slideleft=(element)=>{
        element.scrollLeft-=screenWidth-105;
    }
    const slideRight=(element)=>{
        element.scrollLeft+=screenWidth-105;
    }
  return (
    <div className='flex items-center justify-center scrollbar-hide '>
        <FaChevronLeft className='absolute left-0 mr-2 text-white text-3xl cursor-pointer ' onClick={()=>slideleft(elementRef.current)} />
        
        <div className='flex flex-grow scrollbar-hide scroll-smooth duration-200 w-full px-16 py-4 overflow-x-auto text-white' ref={elementRef}>
            {movieList.map((item) => (
                <img
                    src={BACKDROP + item.backdrop_path}
                    alt=""
                    className='rounded-md mr-5 min-w-full md:h-[330px] object-left-top object-cover transition-all  duration-300 ease-in-out hover:border-2 '
                />
            ))}
        </div>

        <FaChevronRight className='absolute right-0 text-white text-3xl mr-2 cursor-pointer' onClick={()=>slideRight(elementRef.current)}/>
    </div>

    
  )
}

export default Slider