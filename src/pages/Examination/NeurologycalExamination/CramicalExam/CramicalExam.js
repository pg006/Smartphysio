import React from "react";
import { Col, Form } from "react-bootstrap";
import { TableData } from "../../../../component/TableContainer/TableData";
import './CramicalExam.scss'

const CramicalExam = () => {
  const examdata = [
    {
      NAME: "Olfactory",
    },
    {
      NAME: "Optic",
    },
    {
      NAME: "Fescial",
    },
  ];
  const columns = [
    {
      selector: (row) => [row.NAME],
      sortable: true,
    },
    {
      name: "",
      cell: (row) => {
        return (
          <Form>
            {["radio"].map((type) => (
              <>
                <div
                  className="item-1 d-flex justify-content-end"
                  key={`inline-${type}`}
                >
                  <Col lg={4} className="mt-3">
                    <Form.Check
                      inline
                      name="group1"
                      type={type}
                      id={`default-${type}`}
                      label="Normal"
                    />
                  </Col>
                  <Col lg={4} className="mt-3">
                    <Form.Check
                      inline
                      name="group1"
                      type={type}
                      id={`default-${type}`}
                      className="px-4"
                      label="Abmormal"
                    />
                  </Col>
                </div>
              </>
            ))}
          </Form>
        );
      },
      sortable: true,
    },
  ];
  return (
    <React.Fragment>
      <div className="cramical-main-div">
        <div className="Table-container">
          <TableData
            resTableDataItems={examdata}
            isSelectable={false}
            columns={columns}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CramicalExam;
