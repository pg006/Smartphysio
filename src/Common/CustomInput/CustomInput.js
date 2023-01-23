import React from "react";
import { FormGroup, Label, Input, FormFeedback, Row } from "reactstrap";

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
  } = props;

  return (
    <React.Fragment>
      <FormGroup>
        <div className="d-flex">
          <Label>{label ? label : name}</Label>
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
        </div>
        <Input
          name={name}
          placeholder={placeholder}
          type={type}
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
        {required && touched && errors && touched[name] && errors[name] ? (
          <FormFeedback type="invalid">{errors[name]}</FormFeedback>
        ) : instruction ? (
          <div className="instruction" >
            <span>{instruction}</span>
          </div>
        ) : null}
        {children}
      </FormGroup>
    </React.Fragment>
  );
};

export default CustomInput;