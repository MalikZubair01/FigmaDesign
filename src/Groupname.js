import React, { useState } from 'react'
import NavHeader from "./NavHeader";
import { Link } from "react-router-dom";





function Groupname(props) {
  const [block, setBlock]=useState("Block")
  const handleButtn =()=>{
    setBlock("Active")
  }

  return (
    

    <div>
      <NavHeader title={props.title} />
      
      
       
                <div className=" flex flex-col p-2 border-2 border-grayy rounded-lg w-96 m-4">
                  <div className='mb-2 font-semibold'> Group Name </div>
                 <div className='text-graytext'>
                 <div > Status Active </div>
                  <div> Noumber of Members : 120</div>
                  <div className='mt-2 flex items-center'>
  <span className="text-graytext ">Restricted</span>
  <label class="relative inline-flex items-center cursor-pointer ml-2">
  <input type="checkbox" value="" class="sr-only peer" />
  <div class="w-9 h-5 bg-grayy peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-grayy peer-checked:bg-grayy"></div>
</label>

</div>
                 </div>

                </div>


                <Link  to ="/GroupBlock" className="text-white no-underline">
            <button className="bg-purples w-44 text-white rounded-md p-2 ml-4" onClick={handleButtn}>
              {block}
            </button>
            </Link>
                </div>


    
  )
}

export default Groupname
