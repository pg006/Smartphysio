import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Login from "../component/auth/login/Login";
import Register from "../component/auth/register/Register";
import Dashboard from "../pages/dashboard/Dashboard";

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
            </Route>
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default AllRoutes;