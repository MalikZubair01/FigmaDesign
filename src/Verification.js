import React from "react";
import image from "./Assets/verfication.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Verficationdata } from "./Verficationdata";
import NavHeader from './NavHeader';


function Verification(props) {


  return (
   <>
   <NavHeader  title={props.title}/>
    <Container>
      <Row className="m-4">
        {Verficationdata.map((data) => (
            <Col sm={12} md={6} lg={6} className=' shadow-md p-2 mb-2' >
              <div className="flex justify-between">

            <img src={image} alt="" className="w-12 h-12"/>
            <input type="checkbox" className='w-4 h-4 mt-8 accent-grayy bg-grayy ' />
              </div>

            <div className="flex flex-col ml-4">
            <div>{data.title}</div>
            <div>{data.mail}</div>

            <div>{data.num}</div>

            <div>{data.depart}</div>
            </div>
            </Col>
        ))}
      </Row>
    </Container>
   </>
  );
}

export default Verification;
