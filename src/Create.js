import React from "react";
import CameraEnhanceOutlinedIcon from "@mui/icons-material/CameraEnhanceOutlined";
import NavHeader from "./NavHeader";

function Create(props) {
  return (
    <div>
      <NavHeader title={props.title} />
      <form className=" ">
        <div className="flex flex-col mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className=" tracking-wide text-gray-700 text-xs  mb-2 font-semibold"
              htmlFor="grid-first-name">
            
              Name
            </label>
            <input
              className=" block w-full bg-grayy  text-gray-700  border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="enter here"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className=" tracking-wide text-gray-700 text-xs font-semibold mb-2"
              htmlFor="grid-last-name"
            >
              Theme
            </label>
            <input
              className=" block w-full bg-grayy  text-gray-700  border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="enter here"
            />
          </div>
          <div className="ml-4 mt-3 mb-3">
            <span className="pr-3">Price Ticket:</span>
            <a href="#" className="text-purple-800 ">
              http://www.ticket.com
            </a>
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className=" tracking-wide text-gray-700 text-xs  mb-2 font-semibold"
              htmlFor="grid-first-name">
            
              Location
            </label>
            <input
              className=" block w-full bg-grayy  text-gray-700  border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="enter here"
            />
          </div>

          <div className="flex mt-4 ml-4 mb-4">
            <div className=" px-3 bg-purples w-10 h-10 rounded-full  flex justify-center items-center">
              <CameraEnhanceOutlinedIcon />
            </div>
            <p className="flex flex-row  text-purples ml-3">
              {" "}
              upload picture here{" "}
            </p>
          </div>

          <div className="flex flex-row ml-4 mb-2">
            <div className="flex flex-col w-72  mr-3">
              <label
                className="block uppercase tracking-wide text-gray-700 bg- text-xs font-semibold mb-2"
                htmlFor="grid-city"
              >
                Start Time / Time
              </label>
              <input
                className="appearance-none block w-64 bg-grayy  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="date"
                placeholder="xx/x/xxxx    xx:xx"
              />
            </div>

            <div className=" flex flex-col w-72   ">
              <label
                className="  tracking-wide text-gray-700 text-xs font-semibold mb-2"
                htmlFor="grid-city"
              >
                End Time / Time
              </label>
              <input
                className="appearance-none block w-64 bg-grayy  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="date"
                placeholder="xx/x/xxxx    xx:xx"
              />
            </div>
          </div>

          <div className="flex flex-col mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className=" tracking-wide text-gray-700 text-xs font-semibold mb-2"
                htmlFor="grid-first-name"
              >
                Description
              </label>
              <input
                className="appearance-none block w-full bg-grayy  text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="enter here"
              />
            </div>

            <div className="flex flex-col mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className=" tracking-wide text-gray-700 text-xs font-semibold mb-2"
                  htmlFor="grid-first-name"
                >
                  Primary point of Contact
                </label>
                <input
                  className="appearance-none block w-full bg-grayy  text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="enter here"
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className=" tracking-wide text-gray-700 text-xs font-semibold mb-2"
                  htmlFor="grid-first-name"
                >
                  Secoundry point of Contact
                </label>
                <input
                  className="appearance-none block w-full bg-grayy  text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="enter here"
                />
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className=" tracking-wide text-gray-700 text-xs font-semibold mb-2"
                  htmlFor="grid-first-name"
                >
                  Invite User
                </label>
                <input
                  className="appearance-none block w-full bg-grayy  text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="enter here"
                />
              </div>
            </div>

            <button class="bg-purples ml-4  700 text-white font-semibold py-2  border border-blue-700  rounded-md md:w-1/2 px-3 mb-6 md:mb-0">
              Post Event
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Create;
