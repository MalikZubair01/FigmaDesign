import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Complaindata } from "./Complainddata";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import image from "./Assets/PersonImg.png";
import image2 from "./Assets/Jonedoe.png";
import NavHeader from "./NavHeader";


function Complains(props) {
  return (
    <>
      <NavHeader title={props.title} />
      <Container className="mt-8">
        <Row className="flex justify-center">
          {Complaindata.map((data) => (
            <Col sm={12} md={12} lg={5} className="p-2 mb-4 mr-5 shadow-md  rounded-md ">

              <div className="flex flex-col">
                <div className="flex">
                  <div className="flex flex-row">
                    <img src={image} alt="" className="w-16 h-10 pr-3" />
                    <div className="ml-4 flex items-center">{data.name}</div>
                  </div>

                  <div style={{ color: 'red' }} className=" flex items-center ml-6 mr-6">

                    <ArrowRightAltOutlinedIcon style={{ width: "50px", height: "50px" }} />
                  </div>
                  <img src={image2} alt="" className="w-10 mr-6  h-10 flex items-center " />
                  <div className=" flex items-center">{data.name}</div>
                </div>

                <div className="ml-2 flex-col">{data.title}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Complains;
