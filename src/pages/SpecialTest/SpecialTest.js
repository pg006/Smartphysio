import React, { Fragment, useState, useEffect } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import CommonChip from '../../Common/Chips/CommonChip'
import CustomInput from '../../Common/CustomInput/CustomInput'
import { TableData } from '../../component/TableContainer/TableData'
import "./SpecialTest.scss"
import { BsTrash } from "react-icons/bs";


const SpecialTest = () => {
  const [chips, setChips] = useState(["Carical Spine", "Shoulder", "Elbow", "Forearm, Wrist & Hand", "Thoracic & Lumbar", "Knee", "Ankle & Foot"])
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

          <Form className='d-flex'>
            <div className='fistr-div'>
              <Form.Check
                value="design"
                type="radio"
                label="Positive"
                onChange={(e) => handleChange(true, id)}
                checked={checked}
                style={{ paddingRight: "20px" }}
              />
            </div>

            <div className='second-div'>
              <Form.Check
                value="food"
                type="radio"
                label="Negative"
                onChange={(e) => handleChange(false, id)}
                checked={!checked}
              />
            </div>

          </Form>

        )
      },
      sortable: true,
    },
    {
      cell: (row) => {
        const name = row.values
        return (
          <div className='d-flex justify-content-center w-100'>
            <div onClick={() => onChipDelete(name)} >
              <BsTrash />
            </div>
          </div>
        )
      },
      sortable: true
    },
  ];

  return (
    <Fragment>

      <div className='special-test'>
        <h3>Special Test</h3>
        <Row>
          <Col lg={6} md={6} sm={6}>
            <CustomInput
              type="number"
              placeholder="Enter Treatment Id"
              name="mobilenumber"
              label="Treatment Id"
              className="st-label"
            //  onBlur={handleBlur}
            //  value={values.mobilenumber}
            //  onChange={handleChange}
            //  errors={errors}
            //  touched={touched}
            //  required
            />
          </Col>
          <Col lg={6} md={6} sm={6}>
            <CustomInput
              type="number"
              placeholder="Enter Register Id"
              name="mobilenumber"
              label="Register Id"
              className="st-label"
            //  onBlur={handleBlur}
            //  value={values.mobilenumber}
            //  onChange={handleChange}
            //  errors={errors}
            //  touched={touched}
            //  required
            />
          </Col>
          <Col lg={6} md={6} sm={6}>
            <CustomInput
              type="text"
              placeholder="Enter Your Name"
              name="name"
              label="Name"
              className="st-label"
            //  onBlur={handleBlur}
            //  value={values.mobilenumber}
            //  onChange={handleChange}
            //  errors={errors}
            //  touched={touched}
            //  required
            />
          </Col>
          <Col lg={6} md={6} sm={6}>
            <CustomInput
              type="date"
              placeholder="Enter Date"
              name="date"
              label="Date"
              className="st-label"
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
          <Col xl={12} className="pt-3">
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
