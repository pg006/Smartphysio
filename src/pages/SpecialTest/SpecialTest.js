import React, { Fragment, useState, useEffect } from 'react'
import { Card, Col, Form, Nav, Row, Tab } from 'react-bootstrap'
import CommonChip from '../../Common/Chips/CommonChip'
import CustomInput from '../../Common/CustomInput/CustomInput'
import { TableData } from '../../component/TableContainer/TableData'
import "./SpecialTest.scss"

const PatientData = [
  {
    REGISTER_ID: 1,
    DATE: "25/1/23",
    values: []
  },
  {
    REGISTER_ID: 2,
    DATE: "25/1/23",
  },
];

const SpecialTest = () => {
  const [chips, setChips] = useState(["Carical Spine", "Solder"])
  const [tableData, setTableData] = useState([])


  const onChipsChange = (data) => {
    setChips(data)
  }

  const onChipDelete = (name) => {
    const del = chips.findIndex((val) => val == name)
    console.log(del, "hgfshjdg");
    if (del > -1) {
      let deltbl = Object.assign([], chips)
      deltbl.splice(del, 1)
      setChips(deltbl)
    }
  }
  const handleChange = (checked, id) => {
    let newData = tableData?.map((val) => {
      return {
        ...val,
        checked: val?.id == id ? checked : val?.checked
      }
    })
    setTableData(newData)
  }

  useEffect(() => {
    let newData = chips?.map((data, index) => {
      return {
        values: data,
        id: index
      }
    })
    setTableData(newData)
  }, [chips])

  const columns = [
    {
      name: "TEST",
      cell: (row) => {
        return (
          <>
            {row?.values}
          </>
        )
      },
      sortable: true
    },
    {
      name: "RESULT",
      cell: (row) => {
        const id = row.id
        const checked = !!row?.checked
        return (
          <>
            <Form className='d-flex'>
              <Form.Check
                value="design"
                type="radio"
                label="Positive"
                onChange={(e) => handleChange(true, id)}
                checked={checked}
              />
              <Form.Check
                value="food"
                type="radio"
                label="Negative"
                onChange={(e) => handleChange(false, id)}
                checked={!checked}
              />
            </Form>
          </>
        )
      },
      sortable: true,
    },
    {
      cell: (row) => {
        const name = row.values
        return (
          <>
            <button onClick={() => onChipDelete(name)}>delete</button>
          </>
        )
      },
      sortable: true
    },
  ];

  return (
    <Fragment>
      <h3>Special Test</h3>
      <div className='mt-5'>
        <Row>
          <Col lg={3} md={3} sm={3}>
            <CustomInput
              type="number"
              placeholder="Enter Treatment Id"
              name="mobilenumber"
              label="Treatment Id"
            //  onBlur={handleBlur}
            //  value={values.mobilenumber}
            //  onChange={handleChange}
            //  errors={errors}
            //  touched={touched}
            //  required
            />
          </Col>
          <Col lg={3} md={3} sm={3}>
            <CustomInput
              type="number"
              placeholder="Enter Register Id"
              name="mobilenumber"
              label="Register Id"
            //  onBlur={handleBlur}
            //  value={values.mobilenumber}
            //  onChange={handleChange}
            //  errors={errors}
            //  touched={touched}
            //  required
            />
          </Col>
          <Col lg={3} md={3} sm={3}>
            <CustomInput
              type="text"
              placeholder="Enter Your Name"
              name="name"
              label="Name"
            //  onBlur={handleBlur}
            //  value={values.mobilenumber}
            //  onChange={handleChange}
            //  errors={errors}
            //  touched={touched}
            //  required
            />
          </Col>
          <Col lg={3} md={3} sm={3}>
            <CustomInput
              type="date"
              placeholder="Enter Date"
              name="date"
              label="Date"
            //  onBlur={handleBlur}
            //  value={values.mobilenumber}
            //  onChange={handleChange}
            //  errors={errors}
            //  touched={touched}
            //  required
            />
          </Col>
        </Row>
        <Row>
          <Col xl={12}>
            <CommonChip chips={chips} onChange={(data) => onChipsChange(data)} />
            <TableData
              resTableDataItems={tableData}
              isPagination={true}
              isSelectable={false}
              columns={columns}
            />
          </Col>
        </Row>
      </div>

    </Fragment>

  )
}

export default SpecialTest
