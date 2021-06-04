import React from "react";
import { Col, Row, Jumbotron, Container } from "react-bootstrap";
import Layout from "../../components/layout/index";
import './style.css';

/**
 * @author
 * @function Home
 **/

const Home = (props) => {
  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col md={2} className="sidebar">Side bar</Col>
          <Col md={10} style={{marginLeft: 'auto'}}>Container</Col>
        </Row>
      </Container>

      {/* <Jumbotron style={{ margin: "5rem" }} className="text-center bg-white">
        <h1>Welcome to Admin Dashboard</h1>
      </Jumbotron> */}
    </Layout>
  );
};

export default Home;
