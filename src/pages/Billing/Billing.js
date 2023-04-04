import React from 'react'
import './Billing.scss'
import { useNavigate } from 'react-router-dom';
import { TableData } from '../../component/TableContainer/TableData';
import { AiOutlineFileText, AiOutlinePlusSquare } from "react-icons/ai";

const Billing = () => {
    const naviagte = useNavigate();
const billingData=[
  {
    TREATMENT_ID: "00121",
    REGISTER_ID:"000345",
    DATE:"25/3/23",
    PATIENT:"Savaria"
  },
  {
    TREATMENT_ID:"00122",
    REGISTER_ID:"000346",
    DATE:"25/3/23",
    PATIENT:"Savaria"
  }, 
  {
    TREATMENT_ID:"00123",
    REGISTER_ID:"000347",
    DATE:"25/3/23",
    PATIENT:"Savaria"
  },
  {
    TREATMENT_ID:"00124",
    REGISTER_ID:"000312",
    DATE:"25/3/23",
    PATIENT:"Savaria"
  },
  {
    TREATMENT_ID:"00125",
    REGISTER_ID:"000321",
    DATE:"25/3/23",
    PATIENT:"Savaria"
  },
];
const columns=[
  {
    name:"Treatment Id",
    selector:(row)=>[row.TREATMENT_ID],
    sortable:true,
  },
  {
    name:"Register Id",
    selector:(row)=>[row.REGISTER_ID],
    sortable:true,
  },
  {
    name:"Date",
    selector:(row)=>[row.DATE],
    sortable:true,

  },{
    name:"Patient",
selector:(row)=>[row.PATIENT],
sortable:true
  },
  {
    cell: (row, index) => (
      <div className="add-action">
        <AiOutlineFileText
          className="i-e"
        
        />
        <AiOutlinePlusSquare
          className="i-e mx-5"
        />
      </div>
    ),
    name: "#",
    sortable: true,
  },
]
  return (
    <React.Fragment>
    <div className='billing-main-div'>
    <div className='first-div d-flex justify-content-between align-item-center pt-2'>
    <div className='title'><h3>Bill Entry</h3></div>
    <div className='side-btn'>
        <button  type="submit" className='entry-btn' onClick={() => { naviagte("/billing/billentry") }} >
          Bill Entry
        </button>
    </div>
</div>
<div className='Table-container'>
<TableData
    resTableDataItems={billingData}
    isPagination={true}
    isSelectable={false}
    columns={columns}
/>
</div>
</div>
    </React.Fragment>
  )
}

export default Billing
