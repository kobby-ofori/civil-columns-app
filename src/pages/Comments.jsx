import React from "react";
import TrackerForm from "../components/TrackerForm";
import TrackerList from "../components/TrackerList";
import { Col, Container } from "react-bootstrap";
import "./Comments.css";

const Comments = () => {
  return (
    <>
      <Container className="Comments" id="comments">
        <span>Comment</span>
        <Col md="4">
          <TrackerForm />
        </Col>
        <Col md="4">
          <TrackerList />
        </Col>
      </Container>
    </>
  );
};

export default Comments;
