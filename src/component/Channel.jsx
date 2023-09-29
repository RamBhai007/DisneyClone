import React, { useState } from 'react'
const videoUrl = 'https://img10.hotstar.com/video/upload/sources/r1/cms/animations/'
const imageUrl='https://img10.hotstar.com/image/upload/f_auto,q_90,w_128/sources/r1/cms/prod/'

function Channel({item}) {

    const [hover,setHover] = useState(null);
  return (
    <div onMouseEnter={()=>{setHover("index")}} onMouseLeave={()=>{setHover(null)}}>
        {hover === "index" ?
        (<video src={videoUrl + item.video} className='rounded-xl opacity-100 hover:opacity-90 shadow-lg shadow-gray-700 w-[250px]' autoPlay loop/>):
        (<img src={imageUrl + item.image} className=' border-2 shadow-lg shadow-gray-500 border-gray-600 rounded-xl z-[1] w-[250px]' alt="" />)
    }
    </div>
  )
}

export default Channel