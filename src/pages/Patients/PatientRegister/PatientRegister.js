import React from 'react'
import { Col,Row } from 'react-bootstrap'
import CustomInput from '../../../Common/CustomInput/CustomInput'
import * as Yup from "yup";
import { useFormik } from "formik";
import CustomSelect from '../../../Common/CustomSelect/CustomSelect';
import "./PatientRegister.scss"

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
        date: "",
        dob: ""
    };

    const validationSchema = Yup.object({
        registerid: Yup.string().required("Please Enter Your Register Id"),
        name: Yup.string().required("Please Enter Your Name"),
        address: Yup.string().required("Please Enter Your Address"),
        mobilenumber: Yup.string()
            .max(10)
            .required("Please Enter Your Mobile.No"),
        email: Yup.string()
            .email("Must be a valid Email")
            .max(50)
            .required("Please Enter Your Email Address"),
        location: Yup.string().required("Please Enter Your Location "),
        city: Yup.string().required("Enter Your City"),
        contactperson: Yup.string().required("Please Enter Person Name"),
        age: Yup.string().required("Please Enter Your Age"),
        height: Yup.string().required("Please Enter Your Height"),
        weight: Yup.string().required("Please Enter Your Weight"),
        bmi: Yup.string().required("Enter Your BMI"),
        date: Yup.string().required("Enter Date"),
        dob: Yup.string().required("Enter Your BMI")
    });

    const onSubmit = (values) => {
        console.log("values", values);
        resetForm()
    };


    const {
        handleSubmit,
        handleChange,
        values,
        resetForm,
        errors,
        touched,
        handleBlur,
    } = useFormik({
        enableReinitialize: true,
        initialValues,
        validationSchema,
        onSubmit
    });
    console.log(errors);



    return (

        <div className='patient-register'>
            <h3>Patient Register</h3>

            <form onSubmit={handleSubmit}>
                <Row className='input-div mt-3'>
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
                            ColClassName="d-flex"
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
                            ColClassName="d-flex"
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
                            ColClassName="d-flex"
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
                            ColClassName="d-flex"
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
                            ColClassName="d-flex"
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
                            ColClassName="d-flex"
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
                            ColClassName="d-flex"
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
                            ColClassName="d-flex"
                        />

                        <CustomInput
                            type="text"
                            placeholder="BMI"
                            name="bmi"
                            label="BMI"
                            onBlur={handleBlur}
                            value={values.bmi}
                            onChange={handleChange}
                            errors={errors}
                            touched={touched}
                            required
                            ColClassName="d-flex"
                        />
                        <CustomInput
                            textArea
                            name="description"
                            label="Chief Complaint"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            rows={4}
                            placeholder="Enter your description"
                            errors={errors}
                            touched={touched}
                        />
                    </Col>
                    <Col className='m-0' lg={6} md={6} sm={6}>
                        <CustomInput
                            type="date"
                            name="date"
                            label="Date"
                            onBlur={handleBlur}
                            value={values.date}
                            onChange={handleChange}
                            errors={errors}
                            touched={touched}
                            required
                            ColClassName="d-flex"
                        />

                        <CustomSelect
                            type="select"
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
                            value={values.dob}
                            onChange={handleChange}
                            errors={errors}
                            touched={touched}
                            required
                            ColClassName="d-flex"
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
                            ColClassName="d-flex"
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
                            ColClassName="d-flex"
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
                            ColClassName="d-flex"
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

                        <CustomInput
                            textArea
                            name="description"
                            label="Patient History"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            rows={4}
                            placeholder="Enter your description"
                            errors={errors}
                            touched={touched}
                            ColClassName="d-flex"
                        />
                    </Col>
                    <Col lg={12} md={12} sm={12} className='justify-content-end btn-row'>
                        <div className='d-flex '>
                            <button className='btns m-2' type='submit'>Save</button>
                            <button className='btns m-2'>Save/Next</button>
                        </div>
                        <div className='d-flex'>
                            <button className='btns m-2'>Clear</button>
                            <button className='btns m-2'>Exit</button>
                        </div>
                    </Col>
                </Row>
            </form>

        </div>

    )
}

export default PatientRegister