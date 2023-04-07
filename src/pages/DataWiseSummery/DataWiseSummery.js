import React from 'react'
import './DataWiseSummery.scss'
import CustomInput from '../../Common/CustomInput/CustomInput'

const DataWiseSummery = () => {
  return (
   <React.Fragment>
   <div className='Datawise-summery-main-div'>
   <div className='title'><h3>Data Wise Entry</h3></div>
  <div className='firsst-div'>
  <CustomInput
  type="text"
  placeholder=""
  name="clinicname"
  label="Date From"
  className="label w-30"
/>
<CustomInput
type="text"
placeholder=""
name="clinicname"
label="Date to"
className="label w-30"
/>
<div className='mx-5 px-5'>
<button className='print-btn'>Print</button>
  </div> 
  </div>
   </div>
   </React.Fragment>
  )
}

export default DataWiseSummery
