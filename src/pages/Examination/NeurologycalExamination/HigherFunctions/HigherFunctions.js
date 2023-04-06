import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import './HigherFunctions.scss'

const HigherFunctions = () => {
  const fundata = [
    {
      NAME: "Eye Opining",
    },
    {
      NAME: "Motor Response",
    },
    {
      NAME: "Verbal Response",
    },
  ];

  return (
    <React.Fragment>
      <div className="higher-fun-main-div">
        <Row>
          <Form>
            {["radio"].map((type) => (
              <div className="item-1 d-flex" key={`inline-${type}`}>
                <Col lg={4}>
                  <Form.Label className="mt-3 mx-2">Eye Opining</Form.Label>
                </Col>
                <Col lg={2} className="mt-3">
                  <Form.Check
                    inline
                    name="group1"
                    type={type}
                    id={`default-${type}`}
                    label="1"
                  />
                </Col>
                <Col lg={2} className="mt-3">
                  <Form.Check
                    inline
                    name="group1"
                    type={type}
                    id={`default-${type}`}
                    label="2"
                  />
                </Col>
                <Col lg={2} className="mt-3">
                  <Form.Check
                    inline
                    name="group1"
                    type={type}
                    id={`default-${type}`}
                    label="3"
                  />
                </Col>
                <Col lg={2} className="mt-3">
                  <Form.Check
                    className="mx-2"
                    inline
                    name="group1"
                    type={type}
                    id={`default-${type}`}
                    label="4"
                  />
                </Col>
              </div>

            ))}
          </Form>
        </Row>
        <Row>
        <Form>
          {["radio"].map((type) => (
            <div className="item-1 d-flex" key={`inline-${type}`}>
              <Col lg={4}>
                <Form.Label className="mt-3 mx-2">Time</Form.Label>
              </Col>
              <Col lg={2} className="mt-3">
                <Form.Check
                  inline
                  name="group1"
                  type={type}
                  id={`default-${type}`}
                  label="Normal"
                />
              </Col>
              <Col lg={2} className="mt-3">
                <Form.Check
                  inline
                  name="group1"
                  type={type}
                  id={`default-${type}`}
                  label="Abnormal"
                />
              </Col>
        
            </div>

          ))}
        </Form>
      </Row>
      <Row>
      <Form>
        {["radio"].map((type) => (
          <div className="item-1 d-flex" key={`inline-${type}`}>
            <Col lg={4}>
              <Form.Label className="mt-3 mx-2">Memory</Form.Label>
            </Col>
            <Col lg={2} className="mt-3">
              <Form.Check
                inline
                name="group1"
                type={type}
                id={`default-${type}`}
                label="Normal"
                className="pt-2"
              />
            </Col>
            <Col lg={3} className="mt-3">
              <Form.Check
                inline
                name="group1"
                type={type}
                id={`default-${type}`}
                label="Short Term"
              />
            </Col>
            <Col lg={3} className="mt-3">
            <Form.Check
              inline
              name="group1"
              type={type}
              id={`default-${type}`}
              label="Long Term"
            />
          </Col>
          </div>

        ))}
      </Form>
    </Row>
      </div>
    </React.Fragment>
  );
};

export default HigherFunctions;
