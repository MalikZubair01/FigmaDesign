import React from "react";
import Container from "react-bootstrap/Container";
import NavHeader from "./NavHeader";
 import { Link } from "react-router-dom";



function AddGroup(props) {
  return (
    <div>
      <NavHeader title={props.title} />

      <Container>
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

            <div className="flex flex-col mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className=" tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Email
                </label>
                <input
                  className=" block  w-96  text-gray-700 border  rounded py-3 px-4 mb-3   bg-grayy  focus:outline-none"
                  id="grid-first-name"
                  type="text"
                  placeholder="jonedoe@gmail.com"
                />
              </div>

              <div className="flex flex-col mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className=" tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Asscess Code
                  </label>
                  <input
                    className=" block  w-96  text-gray-700 border  rounded py-3 px-4 mb-3   bg-grayy  focus:outline-none"
                    id="grid-first-name"
                    type="text"
                    placeholder="1234567895"
                  />
                </div>
              </div>

              <div className="flex flex-col mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className=" tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Confirm Asscess Code
                  </label>
                  <input
                    className=" block  w-96  text-gray-700 border  rounded py-3 px-4 mb-3   bg-grayy  focus:outline-none"
                    id="grid-first-name"
                    type="text"
                    placeholder="1234567895"
                  />
                </div>
              </div>
            </div>

            <div className="flex m-4">
              <Link  to ="/Groupname" className="text-white no-underline">
            <button className="bg-purples w-44 text-white rounded-md p-2 mr-6">
              Send
             
            </button>
            </Link>

            <button className="text-purples border-purples border-2 w-44 bg-white rounded-md p-2">
              Cancel
            </button>
          </div>

          </div>
        </form>
      </Container>
    </div>
  );
}

export default AddGroup;
