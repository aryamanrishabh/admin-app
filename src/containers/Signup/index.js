import React from "react";
import Layout from "../../components/layout/index";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Input from "../../components/ui/input/index";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

/**
 * @author-
 * @function Signup
 **/

const Signup = (props) => {
  const auth = useSelector((state) => state.auth);

  if (auth.authenticate) {
    return <Redirect to={`/`} />;
  }

  return (
    <Layout>
      <Container>
        <Row className="mt-5">
          <Col md={{ span: 6, offset: 3 }}>
            <Row>
              <Col md={6}>
                <Input
                  label="First Name"
                  placeholder="Enter first name"
                  value=""
                  type="text"
                  onChange={() => {}}
                />
              </Col>
              <Col md={6}>
                <Input
                  label="Last Name"
                  placeholder="Enter last name"
                  value=""
                  type="text"
                  onChange={() => {}}
                />
              </Col>
            </Row>
            <Form>
              <Input
                label="Contact Number"
                placeholder="Enter contact number"
                value=""
                type="text"
                onChange={() => {}}
                errorMessage="Please enter in the format Country code - Contact number"
              />
              <Input
                label="Email"
                placeholder="Enter email"
                value=""
                type="email"
                onChange={() => {}}
              />
              <Input
                label="Password"
                placeholder="Enter password"
                value=""
                type="password"
                onChange={() => {}}
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Signup;
