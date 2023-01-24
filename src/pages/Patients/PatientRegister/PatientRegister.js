import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import CustomInput from '../../../Common/CustomInput/CustomInput'
import * as Yup from "yup";
import { useFormik } from "formik";
import CustomSelect from '../../../Common/CustomSelect/CustomSelect';

const PatientRegister = () => {

    const initialValues = {
        registerid: "",
        name: "",
        address: "",
        mobilenumber: "",
        email: "",
        location: "",
        city: "",
        contactperson: "",
        age: "",
        height: "",
        weight: "",
        bmi: "",
    };

    const validationSchema = Yup.object({
        // registerid: Yup.string().required("Please Enter Your Register Id"),
        // name: Yup.string().required("Please Enter Your Name"),
        // address: Yup.string().required("Please Enter Your Address"),
        // mobilenumber: Yup.string()
        // .max(10)
        // .required("Please Enter Your Mobile.No"),
        // email: Yup.string()
        // .email("Must be a valid Email")
        // .max(50)
        // .required("Please Enter Your Email Address"),
        // location: Yup.string().required("Please Enter Your Location "),
        // city: Yup.string().required("Enter Your City"),
        // contactperson: Yup.string().required("Please Enter Person Name"),
        // age: Yup.string().required("Please Enter Your Age"),
        // height: Yup.string().required("Please Enter Your Height"),
        // weight: Yup.string().required("Please Enter Your Weight"),
        // bmi: Yup.string().required("Enter Your BMI"),
    });
    const onSubmit = (values) => {
        console.log("values", values);
        resetForm()
    };


    const {
        handleSubmit,
        handleChange,
        values,
        setValues,
        resetForm,
        setFieldValue,
        errors,
        touched,
        handleBlur,
    } = useFormik({
        enableReinitialize: true,
        initialValues,
        validationSchema,
        onSubmit
    });


    return (

        <div className='main-div'>
            <h3>Patient Register</h3>

            <form onSubmit={handleSubmit}>
                <Row className='main-div'>

                    <Col lg={6} md={6} sm={6}>
                        <CustomInput
                            type="text"
                            placeholder="Enter Id"
                            name="registerid"
                            label="Register Id"
                            onBlur={handleBlur}
                            value={values.registerid}
                            onChange={handleChange}
                            errors={errors}
                            touched={touched}
                            required
                        />

                        <CustomInput
                            type="text"
                            placeholder="Enter Your Name"
                            name="name"
                            label="Name"
                            onBlur={handleBlur}
                            value={values.name}
                            onChange={handleChange}
                            errors={errors}
                            touched={touched}
                            required
                        />

                        <CustomInput
                            type="textarea"
                            placeholder="Enter Your Address"
                            name="address"
                            label="Address"
                            onBlur={handleBlur}
                            value={values.address}
                            onChange={handleChange}
                            errors={errors}
                            touched={touched}
                            required
                        />

                        <CustomInput
                            type="number"
                            placeholder="Enter Your Mobile.No"
                            name="mobilenumber"
                            label="Mobile Number"
                            onBlur={handleBlur}
                            value={values.mobilenumber}
                            onChange={handleChange}
                            errors={errors}
                            touched={touched}
                            required
                        />


                        <CustomInput
                            type="email"
                            placeholder="Enter Your Email"
                            name="email"
                            label="Email"
                            onBlur={handleBlur}
                            value={values.email}
                            onChange={handleChange}
                            errors={errors}
                            touched={touched}
                            required
                        />

                        <CustomInput
                            type="text"
                            placeholder="Enter Your Location"
                            name="location"
                            label="Location"
                            onBlur={handleBlur}
                            value={values.location}
                            onChange={handleChange}
                            errors={errors}
                            touched={touched}
                            required
                        />

                        <CustomInput
                            type="text"
                            placeholder="Enter Your City"
                            name="city"
                            label="City"
                            onBlur={handleBlur}
                            value={values.city}
                            onChange={handleChange}
                            errors={errors}
                            touched={touched}
                            required
                        />

                        <CustomInput
                            type="text"
                            placeholder="Person Name"
                            name="contactperson"
                            label="Contact Person"
                            onBlur={handleBlur}
                            value={values.contactperson}
                            onChange={handleChange}
                            errors={errors}
                            touched={touched}
                            required
                        />
                        <div className='d-flex justify-content-start'>
                            <Button className='m-2' variant='dark' type='submit'>Save</Button>
                            <Button className='m-2' variant='dark'>Save/Next</Button>
                            <Button className='m-2' variant='dark'>Clear</Button>
                            <Button className='m-2' variant='dark'>Exit</Button>
                        </div>
                    </Col>



                    <Col className='m-0' lg={6} md={6} sm={6}>
                        <CustomInput
                            type="date"
                            name="date"
                            label="Date"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            errors={errors}
                            touched={touched}
                            required
                        />

                        <CustomSelect
                            type=""
                            placeholder=""
                            name="patienttype"
                            label="Patient Type"
                            onBlur={handleBlur}
                            value={values.bankName}
                            onChange={handleChange}
                            errors={errors}
                            touched={touched}
                            required
                        />

                        <CustomInput
                            type="date"
                            placeholder=""
                            name="dob"
                            label="DOB"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            errors={errors}
                            touched={touched}
                            required
                        />

                        <CustomInput
                            type="number"
                            placeholder="Enter You Age"
                            name="age"
                            label="Age"
                            onBlur={handleBlur}
                            value={values.age}
                            onChange={handleChange}
                            errors={errors}
                            touched={touched}
                            required
                        />

                        <CustomSelect
                            type="select"
                            placeholder=""
                            name="gender"
                            label="Gender"
                            onBlur={handleBlur}
                            value={values.bankName}
                            onChange={handleChange}
                            errors={errors}
                            touched={touched}
                            required
                        />

                        <CustomSelect
                            type="select"
                            placeholder=""
                            name="maritialstatus"
                            label="Marital Status"
                            onBlur={handleBlur}
                            value={values.bankName}
                            onChange={handleChange}
                            errors={errors}
                            touched={touched}
                            required
                        />

                        <CustomInput
                            type="number"
                            placeholder="Enter Your Height"
                            name="height"
                            label="Height"
                            onBlur={handleBlur}
                            value={values.height}
                            onChange={handleChange}
                            errors={errors}
                            touched={touched}
                            required
                        />


                        <CustomInput
                            type="number"
                            placeholder="Enter Your Weight"
                            name="weight"
                            label="Weight"
                            onBlur={handleBlur}
                            value={values.weight}
                            onChange={handleChange}
                            errors={errors}
                            touched={touched}
                            required
                        />


                        <CustomInput
                            type="text"
                            placeholder=""
                            name="bmi"
                            label="BMI"
                            onBlur={handleBlur}
                            value={values.bmi}
                            onChange={handleChange}
                            errors={errors}
                            touched={touched}
                            required
                        />

                        <CustomSelect
                            type="select"
                            placeholder=""
                            name="referalstatus"
                            label="Referal Status"
                            onBlur={handleBlur}
                            value={values.bankName}
                            onChange={handleChange}
                            errors={errors}
                            touched={touched}
                            required
                        />

                    </Col>

                </Row>
            </form>

        </div>

    )
}

export default PatientRegister