import React from 'react'
import { useState , useEffect } from 'react';

const SwitchOffer = (isActive) => {
    
    const [switc, setswitch] = useState(false);
   
    console.log(isActive);

   
    
    const switch1 = async () => {
        setswitch(!switc);
    }
    
  return (
    <div>
            {
                !switc ?
                    <div className='w-[40px] h-[22px] bg-slate-400 rounded-full flex items-center cursor-pointer '>
                        <div className='size-[18px] bg-white rounded-full ml-1' onClick={switch1}></div>
                    </div> :
                    <div className='w-[40px] h-[22px] bg-green-400 rounded-full flex items-center cursor-pointer '>
                        <div className='size-[18px] bg-white rounded-full ml-5' onClick={switch1}></div>
                    </div>
            }
        </div>
  )
}

export default SwitchOffer