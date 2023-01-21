import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../component/auth/login/Login";
import Register from "../component/auth/register/Register";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="auth">
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
