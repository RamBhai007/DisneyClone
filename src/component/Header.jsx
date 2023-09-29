import React, { useState } from 'react'
import logo from "../assets/logo-d-plus.webp"
import {HiPlus,HiDotsVertical} from 'react-icons/hi';
import {HiHome,HiMagnifyingGlass,HiStar,HiPlayCircle,HiTv} from 'react-icons/hi2';
import HeaderItem from './HeaderItem';
function Header() {

    const [toggle,setToggle] =useState(false);
    const menu =[
        {name:"Menu",icon:HiHome},
        {name:"Search",icon:HiMagnifyingGlass},
        {name:"WatchList",icon:HiPlus},
        {name:"Originals",icon:HiStar},
        {name:"Movies",icon:HiPlayCircle},
        {name:"Series",icon:HiTv}
    ]
  return (
    <div className='flex items-center  justify-between'>
        <div className='flex gap-6'>
            <img src={logo} className='w-[80px] md:w-[100px] p-4 object-cover' alt="" />
            <div className='hidden gap-6 md:flex'>
                {menu.map((item)=>(
                    <HeaderItem name={item.name } Icon={item.icon}/>
                ))}
            </div>
            <div className='flex gap-6 md:hidden items-center'>
                {menu.map((item,index)=>index<3 &&(
                    <HeaderItem name={item.name } Icon={item.icon}/>
                ))}
                <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
                    <HeaderItem name={""} Icon={HiDotsVertical}/>
                    {toggle ?
                    <div className='absolute mt-2 bg-[#121212]  p-2 border-2 border-gray-500'>
                        {menu.map((item,index)=>index>=3 &&(
                            <HeaderItem name={item.name} Icon={item.icon}/>
                        ))}
                    </div> :null
                    }
                    
                </div>
            </div>
        </div>
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="" className='w-[30px] h-[30px] m-4 rounded-full'/>
        
    </div>
  )
}

export default Header