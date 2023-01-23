import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./component/header/Header";
import { Sidebar } from "./component/sidebar/Sidebar";

const App = () => {
  document
    .querySelector("body")
    ?.classList.remove("login-img", "landing-page", "horizontal");
  document
    .querySelector("body")
    ?.classList.add("app", "sidebar-mini", "ltr", "light-mode");
  return (
    <React.Fragment>
      <div className="horizontalMenucontainer">
        <div className="page">
          <div className="page-main">
            <Header />
            <div className="sticky" style={{ paddingTop: "-74px" }}>
              <Sidebar />
            </div>
            <div className="jumps-prevent" style={{ paddingTop: "74px" }}></div>
            <div
              className="main-content app-content mt-0"
            >
              <div className="side-app">
                <div className="main-container container-fluid">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
