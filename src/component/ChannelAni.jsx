import React, { useState } from 'react'
import Channel from './Channel'

function ChannelAni() {

    const list=[
        {image:"3776/1443776-h-993a8447aed1",
        video:"qh3yh_1587393133132"
        },
        {image:"3793/1443793-h-7aacf32a2124",
        video:"a6lr0r_1587393331483"
        },
        {image:"3782/1443782-h-afdfe6e7c6cb",
        video:"1on5cf_1587393232549"
        },
        {image:"3794/1443794-h-96534e1745fa",
        video:"utwmfd_1587393376512"
        },
        {image:"3790/1443790-h-f4c6cb8892d1",
        video:"ojerhm_1587393280208"
        }
    ]
  return (
    <div className='flex my-2 gap-4 px-5 md:px-16 justify-between'>
        {list.map((item)=>(
            <Channel item={item}/>
    ))}

    </div>
  )
}

export default ChannelAni