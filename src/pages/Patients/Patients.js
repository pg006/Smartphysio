import React, { Fragment } from 'react'
import { useNavigate } from "react-router";
import { TableData } from '../../component/TableContainer/TableData';
import "./Patients.scss"

const Patients = () => {

    const naviagte = useNavigate();
    const PatientData = [
        {
            REGISTER_ID: 1,
            DATE: "25/1/23",
            PATIENT_NAME: "Isha",
            MOBILE_NO: "1234567891",
            ADDRESS: "101,STREET",
            LOCATION: "US"

        },
        {
            REGISTER_ID: 2,
            DATE: "25/1/23",
            PATIENT_NAME: "Nisha",
            MOBILE_NO: "4578894512",
            ADDRESS: "101,STREET",
            LOCATION: "US"

        },
        {
            REGISTER_ID: 3,
            DATE: "25/1/23",
            PATIENT_NAME: "Liza",
            MOBILE_NO: "1245785623",
            ADDRESS: "101,STREET",
            LOCATION: "US"

        },
        {
            REGISTER_ID: 4,
            DATE: "25/1/23",
            PATIENT_NAME: "Daisy",
            MOBILE_NO: "1223455689",
            ADDRESS: "101,STREET",
            LOCATION: "US"

        },
        {
            REGISTER_ID: 5,
            DATE: "25/1/23",
            PATIENT_NAME: "John",
            MOBILE_NO: "5689231245",
            ADDRESS: "101,STREET",
            LOCATION: "US"

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
            <div className='patient-main-div  pt-2'>
                <div className='top-div d-flex justify-content-between w-100'>
                    <h3>Patients</h3>
                    <div className='side-btn'>
                        <button type="submit" className='register-case' onClick={() => { naviagte("/patients/patientregister") }} >
                            Register Case
                        </button>
                    </div>
                </div>
                <hr/>
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
