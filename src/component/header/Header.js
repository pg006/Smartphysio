import React, { useState } from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import logo from "../../assets/images/download.png";
import logo3 from "../../assets/images/download.png";
const SideMenuIcon = () => {
    document.querySelector(".app")?.classList.toggle("sidenav-toggled");
};

// Darkmode
const DarkMode = () => {
    document.querySelector(".app")?.classList.toggle("dark-mode");
};

// FullScreen
var elem = document.documentElement;
var i = true;
const Fullscreen = (vale) => {
    switch (vale) {
        case true:
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.webkitRequestFullscreen) {
                /* Safari */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) {
                /* IE11 */
                elem.msRequestFullscreen();
            }
            i = false;
            break;
        case false:
            document.exitFullscreen();
            i = true;
            break;
        default:
    }
};

// SwitcherMenu

const SidSwitcherIcon = () => {
    //leftsidemenu
    document.querySelector(".demo_changer")?.classList.toggle("active");
    let Rightside = document.querySelector(".demo_changer");
    Rightside.style.right = "0px";
};

const RightSideBar = () => {
    //leftsidemenu

    //rightsidebar
    document.querySelector(".sidebar-right")?.classList.toggle("sidebar-open");
    //swichermainright
};
const Header = () => {
    document.querySelector(".main-content")?.addEventListener("click", () => {
        console.log("search-result");
        document.querySelector(".search-result")?.classList.add("d-none");
    });

    return (
        <div className={styles.Header}>
            <div className="header sticky app-header header1">
                <div className="container-fluid main-container">
                    <div className="d-flex">
                        <Link
                            aria-label="Hide Sidebar"
                            className="app-sidebar__toggle"
                            data-bs-toggle="sidebar"
                            to="#"
                            onClick={() => SideMenuIcon()}
                        />
                        <Link
                            className="logo-horizontal "
                            to={`${process.env.PUBLIC_URL}/Dashboard`}
                        >
                            <img
                                src={logo}
                                className="header-brand-img desktop-logo"
                                alt="logo"
                            />
                            <img
                                src={logo3}
                                className="header-brand-img light-logo1"
                                alt="logo"
                            />
                        </Link>

                        <Navbar className="d-flex order-lg-2 ms-auto header-right-icons">
                            <Navbar.Toggle className="d-lg-none ms-auto header2">
                                <span className="navbar-toggler-icon fe fe-more-vertical"></span>
                            </Navbar.Toggle>




                        </Navbar>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
