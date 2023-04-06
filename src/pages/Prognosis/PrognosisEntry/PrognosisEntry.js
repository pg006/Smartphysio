import React from "react";
import CustomInput from "../../../Common/CustomInput/CustomInput";
import { Col, Row } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";
import { TableData } from "../../../component/TableContainer/TableData";
import CustomSelect from "../../../Common/CustomSelect/CustomSelect";

const PrognosisEntry = () => {
  const proentryData = [
    {
      DATE: "19/03/19",
      PROGNOSIS: "Prognosis",
      TREATMENT: "Treatment",
    },
    {
      DATE: "19/03/19",
      PROGNOSIS: "Prognosis",
      TREATMENT: "Treatment",
    },
    {
      DATE: "19/03/19",
      PROGNOSIS: "Prognosis",
      TREATMENT: "Treatment",
    },
  ];
  const columns = [
    {
      name: "Date",
      cell: (row, index) => {
        return (
        <CustomInput/>
        );
      },
      sortable: true,
    },
    {
        name: "Prognosis",
        cell: (row, index) => {
            return (
            <CustomInput/>
            );
          },
        sortable: true,
      },
      {
        name: "Treatment",
        cell: (row, index) => {
            return (
            <CustomInput/>
            );
          },
        sortable: true,
      },
    {
      sortable: true,
      cell: (row, index) => {
        return (
          <div className="d-flex justify-content-center w-50">
            <BsTrash className="i-1" />
          </div>
        );
      },
    },
  ];
  return (
    <React.Fragment>
      <div className="prognosis-entry-main-div">
        <div className="">
          <h3>Prognosis</h3>
          <hr />
          <Row>
            <Col lg={6}>
              <CustomInput
                type="text"
                placeholder="Enter Treatment Id"
                name="treatmentid"
                label="Treatment Id"
                className="input w-60"
              />
            </Col>
            <Col lg={6}>
              <CustomInput
                type="text"
                placeholder="Enter Patient Id"
                name="patientid"
                label="Patient Id"
                className="input w-60"
              />
            </Col>
            <Col lg={6}>
              <CustomInput
                type="text"
                placeholder="Enter Name"
                name="name"
                label="Name"
                className="input w-60"
              />
            </Col>
          </Row>
        </div>
        <div className="Table-container">
          <TableData
            resTableDataItems={proentryData}
            isSelectable={false}
            columns={columns}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default PrognosisEntry;
