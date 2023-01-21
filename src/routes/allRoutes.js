import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../component/auth/login/Login";
import Register from "../component/auth/register/Register";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
