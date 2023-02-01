import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import Select from "react-select";

const CustomSelect = (props) => {
    const {
        name,
        options,
        onBlur,
        value,
        onChange,
        label,
        errors,
        touched,
        required,
        className
    } = props;

    const styles = {
        control: (styles) => ({
            ...styles,
            borderWidth: 1,
            borderColor:
                required && errors && touched && errors[name] && touched[name]
                    ? "#f46a6a"
                    : "#ced4da",
        }),
    };
    return (
        <React.Fragment>
            <Form.Group>
                <Row className={`mb-3 ${className}`}>
                    <Col className={`${className}`} lg={3}>
                        <label>{label ? label : name}</label>
                        {required ? (
                            <span
                                style={{
                                    color:
                                        required && errors && touched && errors[name] && touched[name]
                                            ? "red"
                                            : "",
                                  
                                }}
                            >
                               
                            </span>
                        ) : null}
                    </Col>

                    <Col lg={9}>
                        <Select
                            name={name}
                            styles={styles}
                            options={options}
                            onBlur={onBlur}
                            value={options?.filter((option) => option?.value === value)}
                            onChange={(selectedOption) => {
                                onChange(selectedOption?.value);
                            }}
                        />
                    </Col>
                </Row>
                {required && touched && errors && touched[name] && errors[name] ? (
                    <p className="error-msg">{errors[name]}</p>
                ) : null}
            </Form.Group>
        </React.Fragment>
    );
};

export default CustomSelect;