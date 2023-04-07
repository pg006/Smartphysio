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
                  className="d-flex "
                  key={`inline-${type}`}
                >
                  <div className="mt-3">
                    <Form.Check
                      inline
                      name="group1"
                      type={type}
                      id={`default-${type}`}
                      label="Normal"
                    />
                  </div>
                  <div className="mt-3">
                    <Form.Check
                      inline
                      name="group1"
                      type={type}
                      id={`default-${type}`}
                      className=""
                      label="Abmormal"
                    />
                  </div>
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
