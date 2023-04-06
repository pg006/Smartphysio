import React from 'react'
import './CoOrinationExam.scss'
import { Col, Form, FormLabel, Row, Table } from 'react-bootstrap'
import { TableData } from '../../../../component/TableContainer/TableData';

const CoOrinationExam = () => {
  const coexamdata = [
    {
      NAME: "Non Equilibrium Test Right",
    },
    {
      NAME: "Non  Equilibrium Test Left",
    },
    {
      NAME: "Equilibrium Test",
    },
    {
      NAME: "ADL Fimscale",
    },
  ];
  const columns = [
    {
      selector: (row) => [row.NAME],
      sortable: true,
    },
    {
      cell: (row) => {
        return (
          <Form>
            {["radio"].map((type) => (
              <>
                <div
                  className="item-1 d-flex"
                  key={`inline-${type}`}
                >
                  <Col lg={2} className="mt-3">
                    <Form.Check
                      inline
                      name="group1"
                      type={type}
                      id={`default-${type}`}
                      label="5"
                    />
                  </Col>
                  <Col lg={2} className="mt-3">
                    <Form.Check
                      inline
                      name="group1"
                      type={type}
                      id={`default-${type}`}
                      className="px-4"
                      label="4"
                    />
                  </Col>
                  <Col lg={2} className="mt-3">
                  <Form.Check
                    inline
                    name="group1"
                    type={type}
                    id={`default-${type}`}
                    className="px-4"
                    label="3"
                  />
                </Col>
                <Col lg={2} className="mt-3">
                <Form.Check
                  inline
                  name="group1"
                  type={type}
                  id={`default-${type}`}
                  className="px-4"
                  label="2"
                />
              </Col>
              <Col lg={2} className="mt-3">
              <Form.Check
                inline
                name="group1"
                type={type}
                id={`default-${type}`}
                className="px-4"
                label="1"
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
    <div className='orination-main-div'>
    <div className="Table-container">
    <TableData
      resTableDataItems={coexamdata}
      isSelectable={false}
      columns={columns}
    />
  </div>
    </div>
    </React.Fragment>
  )
}

export default CoOrinationExam
