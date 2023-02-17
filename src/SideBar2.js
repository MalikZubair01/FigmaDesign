import React from "react";
import { Link } from "react-router-dom";
import MainLogo from "./Assets/Logo1.png";

function SideBar2() {
  return (
    <div>
      <div
        className="w-64 p-4 bg-grayy text-center flex flex-row"
        style={{ height: "1037px" }}
      >
        <div className=" ">
          <div className="   pt-2  pb-2  mb-2  w-52">
            <Link to="/" className="text-white no-underline">
              <img src={MainLogo} alt="" />
            </Link>
          </div>
          <div className="mb-3"> [Your Company Name]</div>

          <div className="bg-purples pt-2  pb-2 w-52 mb-2 rounded-md">
            <Link to="/Alluser" className="no-underline text-white text-center">
              All User
            </Link>
          </div>

          <div className="bg-purples   pt-2  pb-2 w-52 mb-2 rounded-md">
            <Link
              to="/Suspenduser"
              className="no-underline text-white text-center"
            >
              Suspend User
            </Link>
          </div>
          <div className="bg-purples    pt-2  pb-2 w-52 mb-2 rounded-md">
            <Link to="/Create" className="text-white no-underline text-center">
              Create /Aprove Event
            </Link>
          </div>
          <div className="bg-purples   pt-2  pb-2 w-52 mb-2 rounded-md">
            <Link
              to="/Complains"
              className="text-white no-underline text-center"
            >
              Complains
            </Link>
          </div>
          <div className="bg-purples   pt-2  pb-2 w-52 mb-2 rounded-md">
            <Link to="/Invite" className="text-white no-underline text-center">
              Invite
            </Link>
          </div>
          <div className="bg-purples  pt-2  pb-2  mb-2  w-52 rounded-md ">
            <Link
              to="/Verification"
              className="text-white no-underline text-center"
            >
              Verification
            </Link>
          </div>
          <div className="bg-purples  pt-2  pb-2  mb-2  w-52 rounded-md">
            <Link to="/Groups" className="text-white no-underline text-center">
              Groups
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar2;
