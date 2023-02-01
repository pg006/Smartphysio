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
            <Form>
                <Form.Group>
                    <Row className={`mb-3 ${className}`}>
                        <Col className={`${className}`}>
                            <Form.Label>{label ? label : name}</Form.Label>
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

                        <Col lg={12} md={12} sm={12}>
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
            </Form>
        </React.Fragment>
    );
};

export default CustomSelect;