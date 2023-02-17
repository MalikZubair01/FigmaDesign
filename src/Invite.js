import React from "react";
import NavHeader from './NavHeader'
function Invite(props) {
  return (
    <div>
      <NavHeader title={props.title}/>
      <form className=" ">
        <div className="flex flex-col mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className=" tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Name
            </label>
            <input
              className=" block  w-96  text-gray-700 border  rounded py-3 px-4 mb-3   bg-grayy  focus:outline-none"
              id="grid-first-name"
              type="text"
              placeholder="enter here"
            />
          </div>

          <div className=" w-96 md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className=" tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Team Group Code
            </label>
            <input
              className="block  w-96  text-gray-700 border  rounded py-3 px-4 mb-3   bg-grayy  focus:outline-none"
              id="grid-first-name"
              type="text"
              placeholder="xyz 432"
            />
          </div>

          <div className=" w-96 md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className=" tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Personal Company ID Number
            </label>
            <input
              className="block  w-96  text-gray-700 border  rounded py-3 px-4 mb-3   bg-grayy  focus:outline-none"
              id="grid-first-name"
              type="text"
              placeholder="**************"
            />
          </div>

          <div className="flex m-4">
            <button className="bg-purples w-44 text-white rounded-md p-2 mr-6">
              Send
            </button>
            <button className="text-purples border-purples border-2 w-44 bg-white rounded-md p-2">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Invite;
