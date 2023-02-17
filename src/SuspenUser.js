import React from "react";
import { SuspendedUserdata } from "./SuspendedUserdata";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image from "./Assets/PersonImg.png";
import NavHeader from "./NavHeader";

function SuspenUser(props) {
  return (
    <div className="">
      <NavHeader title={props.title} />
      <Container>
        <div className="mr-28 ml-28 relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>

          <input
            type="text"
            className="w-full rounded-lg bg-grayy focus:outline-none h-12 pl-12 pr-12"
          />
        </div>
        <div className="flex w-full">
          {/* <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-grayy border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
            placeholder="Search"
            required
          />
        </div> */}
        </div>
        <div className="w-full mt-4">
          <Row className="flex justify-center">
            {SuspendedUserdata.map((data, index) => (
              <>
                <Col
                  sm={12}
                  md={6}
                  lg={3}
                  className="rounded-lg flex justify-between items-center p-4 mb-2 m-2 shadow-md "
                >
                  <img src={image} alt="" className="w-14 pr-3" />
                  <div className="flex flex-col">
                    <div>{data.title}</div>
                    <div className="w-full bg-purples2 rounded-md h-1.5 dark:bg-gray-700">
                      <div
                        className="bg-purples h-1.5 rounded-full"
                        style={{ width: "45%" }}
                      ></div>
                    </div>
                  </div>
                </Col>
              </>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default SuspenUser;
