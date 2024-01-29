import React, { useEffect, useState, useCallback } from "react";
import parklogo from "../../../assests/pictures/park-basic-logo.png";
import BookingIcon from "../../../assests/pictures/icons8-booking-100.png";
import slotIcon from "../../../assests/pictures/slots.png";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./CommonAdminLayout.css";
import NavBar from "../../NavBar/NavBar";
import { Slide } from "react-toastify";
import CommonDashboardNav from "../CommonDashboardNav/CommonDashboardNav";

function Sidebar({ children }) {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  const [open] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <div className="row CommonAdminLayout-body">
        <div
          style={{ backgroundColor: "#F2F3F4" }}
          className={!open ? "col-2" : "col-1"}
        >
          <div
            className="sidebar"
            style={{ width: !open && windowSize[0] * 0.16 }}
          >
            <div className="mt-5 mb-5">
              {!open && windowSize[0] >= 800 ? (
                <div className="row align-items-center justify-content-center ">
                  <img src={parklogo} alt={""} className="w-50" />
                </div>
              ) : (
                <div className="ms-4">
                  <img src={parklogo} alt={""} className="w-25" />
                </div>
              )}
            </div>

            <CommonDashboardNav
              open={open}
              icon={BookingIcon}
              windowSize={windowSize}
              ElementName={"Bookings"}
              navTo={"/admin"}
            />

            <CommonDashboardNav
              open={open}
              icon={slotIcon}
              windowSize={windowSize}
              ElementName={"Parking Slots"}
              navTo={"/AdminSlots"}
            />

           
          </div>
        </div>

        <div className={!open ? "col-10 p-0" : "col-11"} style={{ zIndex: 10 }}>
          <div className="fixed-top">
            <NavBar isAdmin={true} />
          </div>

          <div className="p-3">{children}</div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
