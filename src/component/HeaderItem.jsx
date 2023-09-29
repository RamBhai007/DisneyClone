import React from 'react'

function HeaderItem({name,Icon}) {
  return (
    <div className='text-white flex hover:underline underline-offset-4 mb-1 items-center gap-3 text-[16px] cursor-pointer'>
        <Icon/>
        <h2 className='md:block'>{name}</h2>

    </div>
  )
}

export default HeaderItem