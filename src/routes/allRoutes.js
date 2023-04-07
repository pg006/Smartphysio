import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Login from "../component/auth/login/Login";
import Register from "../component/auth/register/Register";
import ChiefComplaint from "../pages/ChiefComplaint/ChiefComplaint";
import Dashboard from "../pages/dashboard/Dashboard";
import PatientRegister from "../pages/Patients/PatientRegister/PatientRegister";
import Patients from "../pages/Patients/Patients";
import Examination from "../pages/Examination/Examination";
import Investigation from "../pages/Investigation/Investigation";
import Notification from "../pages/Notification/Notification";
import PainAssesment from "../pages/PainAssesment/PainAssesment";
import PatientHistory from "../pages/PatientHistory/PatientHistory";
import ScheduleAppoint from "../pages/ScheduleAppoint/ScheduleAppoint";
import SpecialTest from "../pages/SpecialTest/SpecialTest";
import Diagnosis from "../pages/Diagnosis/Diagnosis";
import Billing from "../pages/Billing/Billing";
import BillEntry from "../pages/Billing/BillEntry/BillEntry";
import Prognosis from "../pages/Prognosis/Prognosis";
import PrognosisEntry from "../pages/Prognosis/PrognosisEntry/PrognosisEntry";
import DataWiseSummery from "../pages/DataWiseSummery/DataWiseSummery";
import SendMessage from "../pages/SendMessage/SendMessage";

const AllRoutes = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <React.Suspense>
          <Routes>

            <Route path="/">
              <Route index element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>

            <Route path={``} element={<App />}>

              <Route>
                <Route path={`/dashboard`} element={<Dashboard />} />
                <Route path={`/chief-complaint`} element={ <ChiefComplaint/>} />
                <Route path={`/patient-history`} element={ <PatientHistory/>} />
                <Route path={`/pain-assesment`} element={ <PainAssesment/>} />
                <Route path={`/examination`} element={ <Examination/>} />
                <Route path={`/special-test`} element={ <SpecialTest/>} />
                <Route path={`/investigation`} element={ <Investigation/>} />
                <Route path={`/schedule-appoint`} element={ <ScheduleAppoint/>} />
                <Route path={`/notification`} element={ <Notification/>} />
                <Route path={`/diagnosis`} element={ <Diagnosis/>} />
                <Route path={`/summery`} element={ <DataWiseSummery/>} />
                <Route path={`/send-message`} element={ <SendMessage/>} />



              </Route>

              <Route>
                <Route path={`/patients`} element={<Patients />} />
                <Route path={`/patients/patientregister`} element={<PatientRegister />} />
              </Route>

            <Route>
            <Route path={`/billing`} element={<Billing/>}/>
            <Route path={`/billing/billentry`} element={<BillEntry/>}/>
            
            </Route>
            <Route>
            <Route path={`/prognosis`} element={<Prognosis/>}/>
            <Route path={`/prognosis/prognosisentry`} element={<PrognosisEntry/>}/>
            
            </Route>

            </Route>

          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default AllRoutes;