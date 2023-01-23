import React, { useFormik } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import CustomInput from '../../../Common/CustomInput/CustomInput'

const PatientRegister = () => {

    // const {
    //     handleSubmit,
    //     handleChange,
    //     values,
    //     setValues,
    //     resetForm,
    //     setFieldValue,
    //     errors,
    //     touched,
    //     handleBlur,
    // } = useFormik({
    //     enableReinitialize: true,
    //     initialValues,
    //     validationSchema,
    //     onSubmit,
    // });

    return (

        <div className='main-div'>
            <h3>Patient Register</h3>

            <Row className='main-div'>
                <Col className='m-0' lg={6} md={6} sm={6}>
                    <CustomInput
                        type="text"
                        placeholder="Enter Id"
                        name="registerid"
                        label="Register Id"
                        // onBlur={handleBlur}
                        // value={values.bankName}
                        // onChange={handleChange}
                        // errors={errors}
                        // touched={touched}
                        // required
                        style={{ width: "50%" }}
                    />

                    <CustomInput
                        type="text"
                        placeholder="Enter Your Name"
                        name="name"
                        label="Name"
                        // onBlur={handleBlur}
                        // value={values.bankName}
                        // onChange={handleChange}
                        // errors={errors}
                        // touched={touched}
                        // required
                        style={{ width: "50%" }}
                    />

                    <CustomInput
                        type="textarea"
                        placeholder="Enter Your Address"
                        name="address"
                        label="Address"
                        // onBlur={handleBlur}
                        // value={values.bankName}
                        // onChange={handleChange}
                        // errors={errors}
                        // touched={touched}
                        // required
                        style={{ width: "50%" }}
                    />

                    <CustomInput
                        type="number"
                        placeholder="Enter Your Mobile No"
                        name="mobilenumber"
                        label="Mobile Number"
                        // onBlur={handleBlur}
                        // value={values.bankName}
                        // onChange={handleChange}
                        // errors={errors}
                        // touched={touched}
                        // required
                        style={{ width: "50%" }}
                    />

                    {/* <CustomInput
                        type="number"
                        placeholder="Enter Your Phone No"
                        name="phoneno"
                        label="Phone No"
                        // onBlur={handleBlur}
                        // value={values.bankName}
                        // onChange={handleChange}
                        // errors={errors}
                        // touched={touched}
                        // required
                        style={{ width: "50%" }}
                    /> */}

                    <CustomInput
                        type="email"
                        placeholder="Enter Your Email"
                        name="email"
                        label="Email"
                        // onBlur={handleBlur}
                        // value={values.bankName}
                        // onChange={handleChange}
                        // errors={errors}
                        // touched={touched}
                        // required
                        style={{ width: "50%" }}
                    />

                    <CustomInput
                        type="text"
                        placeholder="Enter Your Location"
                        name="location"
                        label="Location"
                        // onBlur={handleBlur}
                        // value={values.bankName}
                        // onChange={handleChange}
                        // errors={errors}
                        // touched={touched}
                        // required
                        style={{ width: "50%" }}
                    />

                    <CustomInput
                        type="text"
                        placeholder="Enter Your City"
                        name="city"
                        label="City"
                        // onBlur={handleBlur}
                        // value={values.bankName}
                        // onChange={handleChange}
                        // errors={errors}
                        // touched={touched}
                        // required
                        style={{ width: "50%" }}
                    />

                    <CustomInput
                        type="text"
                        placeholder="Person Name"
                        name="contactperson"
                        label="Contact Person"
                        // onBlur={handleBlur}
                        // value={values.bankName}
                        // onChange={handleChange}
                        // errors={errors}
                        // touched={touched}
                        // required
                        style={{ width: "50%" }}
                    />
                    <div className='d-flex'>
                        <Button className='m-2' variant='dark'>Save</Button>
                        <Button className='m-2' variant='dark'>Save/Next</Button>
                        <Button className='m-2' variant='dark'>Clear</Button>
                        <Button className='m-2' variant='dark'>Exit</Button>
                    </div>
                </Col>



                <Col className='m-0' lg={6} md={6} sm={6}>
                    <CustomInput
                        type="date"
                        placeholder="Enter Your Name"
                        name="date"
                        label="Date"
                        // onBlur={handleBlur}
                        // value={values.bankName}
                        // onChange={handleChange}
                        // errors={errors}
                        // touched={touched}
                        // required
                        style={{ width: "50%" }}
                    />

                    <CustomInput
                        type="select"
                        placeholder=""
                        name=""
                        label="Patient Type"
                        // onBlur={handleBlur}
                        // value={values.bankName}
                        // onChange={handleChange}
                        // errors={errors}
                        // touched={touched}
                        // required
                        style={{ width: "50%" }}
                    />

                    <CustomInput
                        type="date"
                        placeholder=""
                        name="dob"
                        label="DOB"
                        // onBlur={handleBlur}
                        // value={values.bankName}
                        // onChange={handleChange}
                        // errors={errors}
                        // touched={touched}
                        // required
                        style={{ width: "50%" }}
                    />

                    <CustomInput
                        type="number"
                        placeholder="Enter You Age"
                        name="age"
                        label="Age"
                        // onBlur={handleBlur}
                        // value={values.bankName}
                        // onChange={handleChange}
                        // errors={errors}
                        // touched={touched}
                        // required
                        style={{ width: "50%" }}
                    />

                    <CustomInput
                        type="select"
                        placeholder=""
                        name=""
                        label="Gender"
                        // onBlur={handleBlur}
                        // value={values.bankName}
                        // onChange={handleChange}
                        // errors={errors}
                        // touched={touched}
                        // required
                        style={{ width: "50%" }}
                    />

                    <CustomInput
                        type="select"
                        placeholder=""
                        name=""
                        label="Marital Status"
                        // onBlur={handleBlur}
                        // value={values.bankName}
                        // onChange={handleChange}
                        // errors={errors}
                        // touched={touched}
                        // required
                        style={{ width: "50%" }}
                    />
                    <Row>
                        <Col lg={3} sm={6} md={6}>
                            <CustomInput
                                type="number"
                                placeholder="Enter Your Height"
                                name="height"
                                label="Height"
                                // onBlur={handleBlur}
                                // value={values.bankName}
                                // onChange={handleChange}
                                // errors={errors}
                                // touched={touched}
                                // required
                                // style={{ width: "70%" }}
                            />
                        </Col>

                        <Col lg={3} sm={6} md={6}>
                            <CustomInput
                                type="number"
                                placeholder="Enter Your Weight"
                                name="weight"
                                label="Weight"
                                // onBlur={handleBlur}
                                // value={values.bankName}
                                // onChange={handleChange}
                                // errors={errors}
                                // touched={touched}
                                // required
                                // style={{ width: "70%" }}
                            />
                        </Col>
                    </Row>
                    <CustomInput
                        type="text"
                        placeholder=""
                        name="bmi"
                        label="BMI"
                        // onBlur={handleBlur}
                        // value={values.bankName}
                        // onChange={handleChange}
                        // errors={errors}
                        // touched={touched}
                        // required
                        style={{ width: "50%" }}
                    />

                    <CustomInput
                        type="select"
                        placeholder=""
                        name="rereralsource"
                        label="Referal Source"
                        // onBlur={handleBlur}
                        // value={values.bankName}
                        // onChange={handleChange}
                        // errors={errors}
                        // touched={touched}
                        // required
                        style={{ width: "50%" }}
                    />

                </Col>

            </Row>

        </div>

    )
}

export default PatientRegister