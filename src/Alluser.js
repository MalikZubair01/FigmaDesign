import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Alluserdata } from "./Alluserdata";
import image from "./Assets/PersonImg.png";
import NavHeader from "./NavHeader";

function Alluser(props) {
  return (
    <div className="my-3">
      <NavHeader title={props.title} />
      <div className="m-10">
      <Container>
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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
            className="bg-grayy  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required
          />
        </div>
        <Row className=" ">
          {Alluserdata.map((data, index) => (
            <Col
              sm={12}
              md={6}
              lg={4}
              className="rounded-lg flex p-2 mb-4 shadow-md "
            >
              <img src={image} alt="" className="w-10  pr-3" />
              <div>{data.title}</div>
            </Col>
          ))}
        </Row>
      </Container>
      </div>
    </div>
  );
}

export default Alluser;
