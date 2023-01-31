import React, { Fragment } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from "react-router";
import { TableData } from '../../component/TableContainer/TableData';
import "./Patients.scss"

const Patients = () => {

    const naviagte = useNavigate();
    const PatientData = [
        {
            REGISTER_ID: 1,
            DATE: "25/1/23",
            PATIENT_NAME: "ABCD",
            MOBILE_NO: "1234567891",
            ADDRESS:"101,STREET",
            LOCATION:"US"
            
        },
        {
            REGISTER_ID: 2,
            DATE: "25/1/23",
            PATIENT_NAME: "EFGH",
            MOBILE_NO: "4578894512",
            ADDRESS:"101,STREET",
            LOCATION:"US"
            
        },
        {
            REGISTER_ID: 3,
            DATE: "25/1/23",
            PATIENT_NAME: "IJKL",
            MOBILE_NO: "1245785623",
            ADDRESS:"101,STREET",
            LOCATION:"US"
            
        },
        {
            REGISTER_ID: 4,
            DATE: "25/1/23",
            PATIENT_NAME: "MNOP",
            MOBILE_NO: "1223455689",
            ADDRESS:"101,STREET",
            LOCATION:"US"
            
        },
        {
            REGISTER_ID: 5,
            DATE: "25/1/23",
            PATIENT_NAME: "QRST",
            MOBILE_NO: "5689231245",
            ADDRESS:"101,STREET",
            LOCATION:"US"
            
        },
        {
            REGISTER_ID: 6,
            DATE: "25/1/23",
            PATIENT_NAME: "UVWX",
            MOBILE_NO: "2356894512",
            ADDRESS:"101,STREET",
            LOCATION:"US"
            
        },
        {
            REGISTER_ID: 7,
            DATE: "25/1/23",
            PATIENT_NAME: "YZAB",
            MOBILE_NO: "1223455678",
            ADDRESS:"101,STREET",
            LOCATION:"US"
            
        },
        {
            REGISTER_ID: 8,
            DATE: "25/1/23",
            PATIENT_NAME: "CDEF",
            MOBILE_NO: "2154788965",
            ADDRESS:"101,STREET",
            LOCATION:"US"
            
        },
        {
            REGISTER_ID: 9,
            DATE: "25/1/23",
            PATIENT_NAME: "GHIJ",
            MOBILE_NO: "3265895421",
            ADDRESS:"101,STREET",
            LOCATION:"US"
            
        },
        {
            REGISTER_ID: 10,
            DATE: "25/1/23",
            PATIENT_NAME: "KLMN",
            MOBILE_NO: "896532215",
            ADDRESS:"101,STREET",
            LOCATION:"US"
            
        },
    ];
    const columns = [
        {
            name: "REGISTER ID",
            selector: (row) => [row.REGISTER_ID],
            sortable: true,
        },
        {
            name: "DATE",
            selector: (row) => [row.DATE],
            sortable: true,
        },
        {
            name: "PATIENT NAME",
            selector: (row) => [row.PATIENT_NAME],
            sortable: true,
        },
        {
            name: "MOBILE NO",
            selector: (row) => [row.MOBILE_NO],
            sortable: true,
        },
        {
            name: "ADDRESS",
            selector: (row) => [row.ADDRESS],
            sortable: true,
        },
        {
            name: "LOCATION",
            selector: (row) => [row.LOCATION],
            sortable: true,
        }
        
    ];
    return (
        <Fragment>
            <div className='patient-main-div d-flex justify-content-between align-item-center pt-2'>
                <div className='title'><h3>Patients</h3></div>
                <div className='side-btn'>
                    <Button variant="dark" type="submit" className='register-case' onClick={() => { naviagte("/patients/patientregister") }} >
                        Register Case
                    </Button>
                </div>
            </div>

            <div className='Table-container'>
                <TableData
                    resTableDataItems={PatientData}
                    isPagination={true}
                    isSelectable={false}
                    columns={columns}
                />
            </div>

        </Fragment>
    )
}

export default Patients
