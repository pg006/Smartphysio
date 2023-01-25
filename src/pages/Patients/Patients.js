import React, { Fragment } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from "react-router";
import { TableData } from '../../component/TableContainer/TableData';

const Patients = () => {

    const naviagte = useNavigate();
    const PatientData = [
        {
            PETIENT_NAME: "abcd",
            EMAIL: "Details@Ggmail.com",
            MOBILE_NO: "12345678910",
            CITY: "Checked in this reservation",
            REGISTER_ID: 1,
        },
    ];
    const columns = [
        {
            name: "PETIENT NAME",
            selector: (row) => [row.PETIENT_NAME],
            sortable: true,
        },
        {
            name: "EMAIL",
            selector: (row) => [row.EMAIL],
            sortable: true,
        },
        {
            name: "MOBILE NO",
            selector: (row) => [row.MOBILE_NO],
            sortable: true,
        },
        {
            name: "CITY",
            selector: (row) => [row.CITY],
            sortable: true,
        }
    ];
    return (
        <Fragment>
            <div className='d-flex justify-content-between align-item-center pt-2'>
                <div className='title'><h3>Patients</h3></div>
                <div className='side-btn'>
                    <Button variant="dark" type="submit" className='register-case' onClick={() => { naviagte("/patients/patientregister") }} >
                        Register Case
                    </Button>
                </div>
            </div>

            {/* <div className='Table-container'>
                <TableData
                    resTableDataItems={PatientData}
                    isPagination={true}
                    isSelectable={false}
                    columns={columns}
                />
            </div> */}

        </Fragment>
    )
}

export default Patients
