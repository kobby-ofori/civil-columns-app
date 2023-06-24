import React, { useState } from "react";
import "./Reviews.css"
import { usersReviewsData } from "../data/usersReviewsData";
import { Col, Container, Row } from "react-bootstrap";

const Reviews = () => {
  const [selected, setSelected] = useState(0);
  const tLength = usersReviewsData.length;

  return (
    <div className="Reviews" id="reviews">
      <Container>
        <Row>
          <Col className="left-t">
            <span>Reviews</span>
            <span className="stroke-text">What they</span>
            <span>said</span>
            <span>{usersReviewsData[selected].review}</span>
            <span>
              <span>{usersReviewsData[selected].name}</span>-{" "}
              {usersReviewsData[selected].status}
            </span>{" "}
          </Col>
          <Col className="right-t">
            <div></div>
            <div></div>
            <img
              src={usersReviewsData[selected].image}
              alt=""
              className="img-fluid"
            />

            <div className="arrows">
              <img
                onClick={() =>
                  selected === 0
                    ? setSelected(tLength - 1)
                    : setSelected((prev) => prev - 1)
                }
                src=""
                alt="<"
                className="img-fluid"
              />
              <img
                onClick={() =>
                  selected === tLength - 1
                    ? setSelected(0)
                    : setSelected((prev) => prev + 1)
                }
                src=""
                alt=">"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Reviews;
