import React from "react";
import { Form, Button, Col, Container, Row, } from 'react-bootstrap'


const CustomInput = (props) => {
  const {
    name,
    label,
    placeholder,
    defaultValue,
    id,
    className,
    onChange,
    onBlur,
    value,
    errors,
    touched,
    type = "text",
    style,
    rows,
    checked,
    disabled,
    maxLength,
    minLength,
    children,
    required,
    instruction,
    textArea
  } = props;
  // console.log(props,"prop");
  return (
    <React.Fragment>
      <Form>
        <Form.Group>
          <Row className="mb-3">
            <Col lg={3}>
              <Form.Label style={{display: "contents"}}>{label ? label : name}</Form.Label>
              {required ? (
                <span
                  style={{
                    color:
                      required && errors && touched && errors[name] && touched[name]
                        ? "red"
                        : "",
                    paddingLeft: 2,
                  }}
                >
                  *
                </span>
              ) : null}
            </Col>
            {textArea ? <Col lg={9}>
              <Form.Control
                name={name}
                as='textarea'
                placeholder={placeholder}
                type={`text ${type}`}
                maxLength={maxLength}
                minLength={minLength}
                className={`form-control ${className}`}
                defaultValue={defaultValue}
                id={id}
                disabled={disabled}
                rows={rows}
                checked={checked}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                style={style}
                invalid={
                  required && errors && touched && errors[name] && touched[name]
                    ? true
                    : false
                }
              />
            </Col> : <Col lg={9}>
              <Form.Control
                name={name}
                placeholder={placeholder}
                type={`text ${type}`}
                maxLength={maxLength}
                minLength={minLength}
                className={`form-control ${className}`}
                defaultValue={defaultValue}
                id={id}
                disabled={disabled}
                rows={rows}
                checked={checked}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                style={style}
                invalid={
                  required && errors && touched && errors[name] && touched[name]
                    ? true
                    : false
                }
              />
            </Col>}
          </Row>
          {required && touched && errors && touched[name] && errors[name] ? (
            <Form.Control.Feedback type="invalid">{errors[name]}</Form.Control.Feedback>
          ) : instruction ? (
            <div className="instruction" >
              <span>{instruction}</span>
            </div>
          ) : null}
          {children}
        </Form.Group>
      </Form>
    </React.Fragment>
  );
};

export default CustomInput;