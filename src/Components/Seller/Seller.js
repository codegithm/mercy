import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import DashboardCard from "../DashboardCard/DashboardCard";
import Insights from "../Insights/Insights";
import Sidebar from "../Sidebar/Sidebar";
import "./Seller.css";

function Seller() {
  const [steps, setSteps] = useState(false);
  const MySwal = withReactContent(Swal);
  const showSteps = () => {
    MySwal.fire({
      imageUrl: "./shopping-bag-2041.svg",
      imageWidth: 400,
      imageHeight: 200,
      allowOutsideClick: false,
      confirmButtonText: "Next",
      title: (
        <div>
          <p>Selling online made easy</p>
          <h5>3 easy steps</h5>
        </div>
      ),
      showClass: {
        popup: "swal2-show",
      },
      hideClass: {
        popup: "swal2-hide",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire({
          imageUrl: "./Untitled2.svg",
          imageWidth: 300,
          imageHeight: 190,
          allowOutsideClick: false,
          confirmButtonText: "Next",
          title: (
            <div>
              <p>Company details</p>
              <h5>Name</h5>
              <h5>Location</h5>
              <h5>Banking details</h5>
            </div>
          ),
          showClass: {
            popup: "swal2-show",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        }).then((result) => {
          if (result.isConfirmed) {
            MySwal.fire({
              imageUrl: "./Untitled.svg",
              imageWidth: 221,
              imageHeight: 190,
              allowOutsideClick: false,
              confirmButtonText: "Next",
              title: (
                <div>
                  <p>Upload items</p>
                  <h5>Price</h5>
                  <h5>Description</h5>
                  <h5>Availability</h5>
                </div>
              ),
              showClass: {
                popup: "swal2-show",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            }).then((result) => {
              if (result.isConfirmed) {
                setSteps(true);
              }
            });
          }
        });
      }
    });
  };
  useEffect(() => {
    showSteps();
  }, []);
  return (
    <div className='seller-cont'>
      <Sidebar />
      <div className='seller-title'>
        <Insights />
      </div>
    </div>
  );
}

export default Seller;
