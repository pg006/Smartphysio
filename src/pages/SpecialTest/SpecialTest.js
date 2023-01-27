import React, { Fragment, useState } from 'react'
import { Card, Col, Nav, Row, Tab, TabContainer } from 'react-bootstrap'
import CustomInput from '../../Common/CustomInput/CustomInput'
import { TableData } from '../../component/TableContainer/TableData'
import "./SpecialTest.scss"
const SpecialTest = () => {

  const [tab, SetTab] = useState([]);
  const [key, setKey] = useState("one");

  const Data = [
    {
      REGISTER_ID: 1,
      DATE: "25/1/23",
      PATIENT_NAME: "Oliviya",
      MOBILE_NO: "1234567891",
      ADDRESS: "101,STREET",
      LOCATION: "US"

    },
    {
      REGISTER_ID: 2,
      DATE: "25/1/23",
      PATIENT_NAME: "Nikki",
      MOBILE_NO: "4578894512",
      ADDRESS: "101,STREET",
      LOCATION: "US"

    },
    {
      REGISTER_ID: 3,
      DATE: "25/1/23",
      PATIENT_NAME: "Vlad",
      MOBILE_NO: "1245785623",
      ADDRESS: "101,STREET",
      LOCATION: "US"

    },
    {
      REGISTER_ID: 4,
      DATE: "25/1/23",
      PATIENT_NAME: "Devil",
      MOBILE_NO: "1223455689",
      ADDRESS: "101,STREET",
      LOCATION: "US"

    },
    {
      REGISTER_ID: 5,
      DATE: "25/1/23",
      PATIENT_NAME: "Roma",
      MOBILE_NO: "5689231245",
      ADDRESS: "101,STREET",
      LOCATION: "US"

    },
  ];
  const columns = [
    {
      name: "REGISTER ID",
      selector: (row) => [row.REGISTER_ID],
      sortable: true,
    },
    {
      name: "DATE",
      selector: (row) => [row.DATE],
      sortable: true,
    },
    {
      name: "PATIENT NAME",
      selector: (row) => [row.PATIENT_NAME],
      sortable: true,
    },
    {
      name: "MOBILE NO",
      selector: (row) => [row.MOBILE_NO],
      sortable: true,
    },
    {
      name: "ADDRESS",
      selector: (row) => [row.ADDRESS],
      sortable: true,
    },
    {
      name: "LOCATION",
      selector: (row) => [row.LOCATION],
      sortable: true,
    }

  ];

  return (

    <Fragment>
      <h3>Special Test</h3>
      <div className='mt-5'>
        <div className='first-row'>
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
        </div>
        <div className='second-row'>
          <Row>
            <Col xl={12}>
              <Card className='card'>
                <Card.Body>
                  <Tab.Container
                    id="left-tabs-example"
                    onSelect={(k) => setKey(k)}
                    activeKey={key}
                  >
                    <div className="tab-name mt-3">
                      <Nav
                        variant="pills"
                        className="panel-tabs nav-tabs panel-secondary"
                      >
                        <Nav.Item>
                          <Nav.Link eventKey="one">
                            Carical Spine
                          </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                          <Nav.Link eventKey="two">
                            Shoulder
                          </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                          <Nav.Link eventKey="three">
                            Elbow
                          </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                          <Nav.Link eventKey="four">
                            Forearm, Wrist & Hand
                          </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                          <Nav.Link eventKey="five">
                            Thoracic & Lumbar
                          </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                          <Nav.Link eventKey="six">
                            Pelvis
                          </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                          <Nav.Link eventKey="saven">
                            Hip
                          </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                          <Nav.Link eventKey="eight">
                            Knee
                          </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                          <Nav.Link eventKey="nine">
                            Ankle & Foot
                          </Nav.Link>
                        </Nav.Item>


                      </Nav>
                    </div>

                    <div className='Tbl-data'>
                      <Tab.Content>

                        <Tab.Pane eventKey="one">

                        </Tab.Pane>

                        <Tab.Pane eventKey="two">

                        </Tab.Pane>

                        <Tab.Pane eventKey="three">

                        </Tab.Pane>

                        <Tab.Pane eventKey="four">

                        </Tab.Pane>

                        <Tab.Pane eventKey="five">

                        </Tab.Pane>

                        <Tab.Pane eventKey="six">

                        </Tab.Pane>

                        <Tab.Pane eventKey="saven">

                        </Tab.Pane>

                        <Tab.Pane eventKey="eight">

                        </Tab.Pane>

                        <Tab.Pane eventKey="nine">

                        </Tab.Pane>


                      </Tab.Content>
                    </div>

                  </Tab.Container>
                </Card.Body>
              </Card>

            </Col>
          </Row>

        </div>

        <div className='third-row'>
          <Row>
            <Col lg={12}>
              <TableData
                resTableDataItems={Data}
                isPagination={true}
                isSelectable={false}
                columns={columns}
              />
            </Col>
          </Row>
        </div>

      </div>

    </Fragment>

  )
}

export default SpecialTest
