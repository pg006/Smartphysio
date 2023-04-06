import React from "react";
import "./SensoryExamination.scss";
import { Col, Form, Table } from "react-bootstrap";
import { TableData } from "../../../component/TableContainer/TableData";

const SensoryExamination = () => {
  
  const data = [
    {
      NAME: "C1 [Occipital protruberance]",
    },
    {
      NAME: "C2 [1 cm Lateral to Occipital Protrubernce]",
    },
    {
      NAME: "C3 [Lateral Anticubital Fossa]",
    },
  ];
  const columns = [
    {
      name: "",
      selector: (row) => [row.NAME],
      sortable: true,
    },
    {
      name: "",
      cell: (row) => {
        return (
          <Form>
          {['radio'].map((type) => (
              <>
                  <div className='item-1 d-flex justify-content-end' key={`inline-${type}`}>
                     
                      <Col lg={2} className='mt-3'>
                          <Form.Check
                              inline
                              name="group1"
                              type={type}
                              id={`default-${type}`}

                              // label='Intact'
                               />

                      </Col>
                      <Col lg={2} className='mt-3'>
                          <Form.Check
                              inline
                              name="group1"
                              type={type}
                              id={`default-${type}`}
                            className="px-4"

                              // label='Impaired'
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
      <div className="orination-main-div">
        <div className="Table-container">
          <TableData
            resTableDataItems={data}
            isSelectable={false}
            columns={columns}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SensoryExamination;
