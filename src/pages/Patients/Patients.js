import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from "react-router";

const Patients = () => {

    const naviagte = useNavigate();

    return (
        <div className='d-flex justify-content-between align-item-center pt-2'>
            <div className='title'><h3>Patients</h3></div>
            <div className='side-btn'>
                <Button variant="dark" type="submit" className='register-case' onClick={() => {naviagte("/patients/patientregister")}} >
                    Register Case
                </Button>
            </div>
        </div>
    )
}

export default Patients
