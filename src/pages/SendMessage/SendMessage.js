import React from "react";
import "./SendMessage.scss";
import { Form } from "react-bootstrap";
import CustomInput from "../../Common/CustomInput/CustomInput";

const SendMessage = () => {
  return (
    <React.Fragment>
      <div className="sendMessage-main-div">
        <div className="title">
          <h3>Send Message</h3>
        </div>
        <hr />
        <div className="first-div mt-3">
          {["radio"].map((type) => (
            <>
              <div className="item-1 d-flex" key={`inline-${type}`}>
                <Form.Check
                  inline
                  name="group1"
                  type={type}
                  id={`default-${type}`}
                  label="Select All"
                />
                <Form.Check
                  inline
                  name="group1"
                  type={type}
                  id={`default-${type}`}
                  className="px-4"
                  label="Contact Entry"
                />
              </div>
            </>
          ))}
        </div>

        <div className="second-div mt-3">
          <CustomInput
            type="text"
            placeholder="Enter Contact No"
            name="contactno"
            label="Contact No"
            className="input w-40"
          />
          <CustomInput
            textArea
            type="text"
            placeholder="Enter Message"
            name="message"
            label="Message"
            className="input w-50"
            rows="3"
          />
          <button className="send-btn mt-3">Send</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SendMessage;
