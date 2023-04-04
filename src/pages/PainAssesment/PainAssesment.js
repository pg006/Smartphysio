import React from "react";
import "./PainAssesment.scss";
import CustomInput from "../../Common/CustomInput/CustomInput";
import CustomSelect from "../../Common/CustomSelect/CustomSelect";
import { Col, Row } from "react-bootstrap";
import * as Yup from "yup";
import { useFormik } from "formik";

const PainAssesment = () => {
  const initialValues = {
    treatmentid: "",
    date: "",
    registerid: "",
    name: "",
    severitypain: "",
    painsite: "",
    painnature: "",
    painonset: "",
    painduresion: "",
    variation: "",
    aggravatingfactors: "",
    relevingfactor: "",
  };

  const validationSchema = Yup.object({
    treatmentid: Yup.string().required("Required"),
    date: Yup.string().required("Required"),
    registerid: Yup.string().required("Required"),
    name: Yup.string().required("Required"),
    severitypain: Yup.string().required("Required"),
    painsite: Yup.string().required("Required"),
    painnature: Yup.string().required("Required"),
    painonset: Yup.string().required("Required"),
    painduretion: Yup.string().required("Required"),
    variation: Yup.string().required("Required"),
    aggravatingfactors: Yup.string().required("Required"),
    relevingfactor: Yup.string().required("Required"),
  });

  const onSubmit = () => {
    console.log(values, "values");
    resetForm();
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
    onSubmit,
  });

  return (
    <React.Fragment>
      <div className="pain-main-div">
        <h3>Pain Assesment</h3>
        <hr />

        <form onSubmit={handleSubmit}>
        <Row>
          <Col lg={6} md={6} sm={6}>
            <CustomInput
              type="text"
              placeholder="Enter Treatment Id"
              name="treatmentid"
              label="Treatment Id"
              className="st-label"
              onBlur={handleBlur}
              value={values.treatmentid}
              onChange={handleChange}
              errors={errors}
              touched={touched}
              required
              ColClassName="d-flex"
            />
          </Col>
          <Col lg={6} md={6} sm={6}>
            <CustomInput
              type="text"
              placeholder="Enter Date"
              name="date"
              label="Date"
              className="st-label"
              onBlur={handleBlur}
              value={values.date}
              onChange={handleChange}
              errors={errors}
              touched={touched}
              required
              ColClassName="d-flex"
            />
          </Col>
          <Col lg={6} md={6} sm={6}>
            <CustomInput
              type="text"
              placeholder="Enter Register Id"
              name="registerid"
              label="Register Id"
              className="st-label"
              onBlur={handleBlur}
              value={values.registerid}
              onChange={handleChange}
              errors={errors}
              touched={touched}
              required
              ColClassName="d-flex"
            />
          </Col>
          <Col lg={6} md={6} sm={6}>
            <CustomInput
              type="text"
              placeholder="Enter Name"
              name="name"
              label="Name"
              className="st-label"
              onBlur={handleBlur}
              value={values.name}
              onChange={handleChange}
              errors={errors}
              touched={touched}
              required
              ColClassName="d-flex"
            />
          </Col>
          <Col lg={6} md={6} sm={6}>
            <CustomSelect
              type="text"
              name="severitypain"
              label="Severity Of Pain"
              className="st-label"
              // onBlur={handleBlur}
              // value={values.severitypain}
              // onChange={handleChange}
              // errors={errors}
              // touched={touched}
              // required
              ColClassName="d-flex"
            />
          </Col>
          <Col lg={6} md={6} sm={6}>
            <CustomInput
              type="text"
              placeholder="Enter Site"
              name="painsite"
              label="Pain Site"
              className="st-label"
              onBlur={handleBlur}
              value={values.painsite}
              onChange={handleChange}
              errors={errors}
              touched={touched}
              required
              ColClassName="d-flex"
            />
          </Col>
          <Col lg={6} md={6} sm={6}>
            <CustomSelect
              type="text"
              name="painnature"
              label="Pain Nature"
              className="st-label"
              // onBlur={handleBlur}
              // value={values.painnature}
              // onChange={handleChange}
              // errors={errors}
              // touched={touched}
              // required
              ColClassName="d-flex"
            />
          </Col>
          <Col lg={6} md={6} sm={6}>
            <CustomSelect
              type="text"
              name="painonset"
              label="Pain Onset"
              className="st-label"
              // onBlur={handleBlur}
              // value={values.painonset}
              // onChange={handleChange}
              // errors={errors}
              // touched={touched}
              // required
              ColClassName="d-flex"
            />
          </Col>
          <Col lg={6} md={6} sm={6}>
            <CustomInput
              type="text"
              placeholder="Enter Duretion"
              name="painduresion"
              label="Pain Duretion"
              className="st-label"
              onBlur={handleBlur}
              value={values.painduresion}
              onChange={handleChange}
              errors={errors}
              touched={touched}
              required
              ColClassName="d-flex"
            />
          </Col>
          <Col lg={6} md={6} sm={6}>
            <CustomSelect
              type="text"
              name="variation"
              label="Diurnal Variation"
              className="st-label"
              // onBlur={handleBlur}
              // value={values.variation}
              // onChange={handleChange}
              // errors={errors}
              // touched={touched}
              // required
              ColClassName="d-flex"
            />
          </Col>
          <Col lg={6} md={6} sm={6}>
            <CustomInput
              type="text"
              placeholder="Enter Aggravating Factors"
              name="aggravatingfactors"
              label="Aggravating Factors"
              className="st-label"
              onBlur={handleBlur}
              value={values.aggravatingfactors}
              onChange={handleChange}
              errors={errors}
              touched={touched}
              required
              ColClassName="d-flex"
            />
          </Col>
          <Col lg={6} md={6} sm={6}>
            <CustomInput
              type="text"
              placeholder="Enter Releving Factors"
              name="relevingfactor"
              label="Releving Factors"
              className="st-label"
              onBlur={handleBlur}
              value={values.relevingfactor}
              onChange={handleChange}
              errors={errors}
              touched={touched}
              required
              ColClassName="d-flex"
            />
          </Col>
          <Col lg={12} className="d-flex justify-content-center btn-div">
          <button className="m-2 btn">Save</button>
          <button className="m-2 btn">Save/Next</button>
          <button className="m-2 btn">Exit</button>
        </Col>

        </Row>
        </form>
      

      </div>
    </React.Fragment>
  );
};

export default PainAssesment;
