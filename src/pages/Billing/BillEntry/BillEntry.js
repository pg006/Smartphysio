import React from "react";
import "./BillEntry.scss";
import CustomInput from "../../../Common/CustomInput/CustomInput";
import { Col, Row } from "react-bootstrap";
import { BsSearch, BsTrash } from "react-icons/bs";
import CustomSelect from "../../../Common/CustomSelect/CustomSelect";
import { TableData } from "../../../component/TableContainer/TableData";

const BillEntry = () => {
  const billData = [
    {
      NUMBER: "1",
      AMOUNT: "0.00",
    },
  ];
  const columns = [
    {
      name: "S/N",
      selector: (row) => [row.NUMBER],
      sortable: true,
    },
    {
      name: "Description",
      sortable: true,
      cell: (row, index) => {
        return (
          <div className="w-90">
            <CustomSelect />
          </div>
        );
      },
    },
    {
      className: "d-flex justify-content-center",
      name: "Amount",
      selector: (row) => [row.AMOUNT],
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
      <div className="billentry-main-div">
        <div className="">
          <h3>Bill Entry</h3>
          <hr />
          <Row>
            <Col lg={6} className="d-flex">
              <CustomInput
                type="text"
                placeholder="Enter Bill No"
                name="billno"
                label="Bill No"
                className="input"
              />
              <div className="d-flex justify-content-center align-items-center mt-4 mx-2">
                <BsSearch className="icon" />
              </div>
            </Col>
            <Col lg={6}>
              <CustomInput
                type="text"
                placeholder="Enter Date"
                name="date"
                label="Date"
                className="input w-60"
              />
            </Col>
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
                className="input"
              />
            </Col>
          </Row>
        </div>
        <div className="Table-container">
          <TableData
            resTableDataItems={billData}
            isSelectable={false}
            columns={columns}
          />
        </div>
        <Row className="d-flex justify-content-between mx-2">
          <Col lg={6} className="">
            <CustomInput
              textArea
              placeholder="Notes"
              rows="3"
              className="w-80"
            />
            <div className="btn-div d-flex justify-content-center">
              <button className="btns m-2" type="submit">
                Save
              </button>
              <button className="btns m-2">Print</button>
              <button className="btns m-2">Exit</button>
            </div>
          </Col>
          <Col lg={6} className="">
            <div className="d-flex">
              <CustomInput
                type="text"
                placeholder="Enter Amount"
                name="amount"
                label="Total Amount"
                className="input mx-2"
              />
              <CustomInput
                type="text"
                placeholder="Enter Discount"
                name="discount"
                label="Discount"
                className="input-mx-2"
              />
            </div>
            <div className="d-flex">
              <CustomInput
                type="text"
                placeholder="Enter Amount"
                name="netamount"
                label="Net Amount"
                className="input mx-2"
              />
              <CustomSelect
                type="text"
                placeholder=""
                name="payment"
                label="Payment Mode"
                className="input mx-2 w-100"
              />
            </div>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default BillEntry;
