import React from "react";
import NavHeader from "./NavHeader";
import { GroupData } from "./GroupData";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";


function Group(props) {
  return (
    <div>
      {/* <NavHeader title={props.title} /> */}
      <Container>



      <div className="flex justify-end">
      <button className="bg-purples w-28 text-white rounded-md p-2 m-4 ">
        <Link to="/AddGroup" className="text-white no-underline">
        Add Group
        </Link>
        </button>
      </div>

      
     
      
        <Row className="flex justify-center">
          {GroupData.map((data) => (
            <Col
              className=" flex flex-col p-2 border-2 border-grayy mb-4  mr-4  rounded-lg w-full h-20"
              sm={12}
              md={6}
              lg={5}
            >
                
                <div className="font-semibold"> {data.name} </div>
                <div className=" flex flex-row justify-between text-graytext mt-3 ">
                  <div> {data.status} </div>
                  <div> {data.member} </div>
                </div>
                
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Group;
