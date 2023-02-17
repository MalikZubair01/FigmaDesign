import React from 'react'
import image from './Assets/Navimage.png';
function NavHeader(props) {
  return (
      <div className=''>
        <div className='flex justify-between  items-center ml-10 mt-3'>
        <div className='  text-3xl font-medium '>
          {props.title}
        </div>
          <div className='flex flex-row items-center '>
            <img src={image} alt="not avaliable" className='w-10 ' />
            <p className='ml-2 mt-3 font-semibold'>Jone doe</p>
          </div>
      </div >
          <hr />
      </div>
  )
}
export default NavHeader;