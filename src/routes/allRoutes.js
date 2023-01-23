import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Login from "../component/auth/login/Login";
import Register from "../component/auth/register/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import PatientRegister from "../pages/Patients/PatientRegister/PatientRegister";
import Patients from "../pages/Patients/Patients";

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
              </Route>

              <Route>
                <Route path={`/patients`} element={<Patients />} />
                <Route path={`/patients/patientregister`} element={<PatientRegister />} />
              </Route>
            </Route>

          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default AllRoutes;