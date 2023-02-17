import React from 'react'

function OverviewForm() {
  return (
    <div>
        <form>
    <div className="grid gap-6 mb-6 md:grid-cols-2  pt-10 pl-10">
        <div>
            <label htmlFor="first_name" className=" text-sm  text-gray-900 dark:text-white font-medium">Company name</label>
            <input type="text" id="first_name" className="bg-grayy   border-none  text-sm rounded-md focus:outline-none  block w-72 p-2.5 text-white " placeholder="enter here" required>
              </input>
        </div>
        </div>

        <div className="grid gap-6 mb-6 md:grid-cols-2  pt-2 pl-10">
        <div>
            <label htmlFor="Acess Code" className=" text-sm   font-medium text-gray-900 dark:text-white">Acess Code</label>
            <input type="text" id="first_name" className="bg-grayy   border-none rounded-md text-sm  focus:outline-none  block w-72 p-2.5 text-white " placeholder="12345678" required>
              </input>
        </div>
        </div>
        </form>

    </div>
   )
}

export default OverviewForm
