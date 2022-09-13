import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";

const Company = () => {
  const [partnerList, setPartnerList] = useState([]);
  const fetchPartners = async () => {
    const res = await axios.get("http://localhost:5000/api/partners");
    setPartnerList(res.data.data);
  };
  useEffect(() => {
    fetchPartners();
  }, []);
  console.log(partnerList);
  return (
    <section>
      <Container>
        <Row>
          {partnerList?.map((partner) => {
            return (
              <Col lg="2" md="3" sm="4" xs="6">
                <h3 className=" d-flex align-items-center gap-1">
                  {/* <i className="ri-apple-fill"></i> */}
                  <img
                    src={partner.logo}
                    class="rounded"
                    alt="logo"
                    height="50px"
                    width="50px"
                  />
                  {partner.name}
                </h3>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Company;
