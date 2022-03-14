import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Seller() {
  const [steps, setSteps] = useState(false);
  const MySwal = withReactContent(Swal);
  const showSteps = () => {
    MySwal.fire({
      imageUrl: "./ladders-steps-svgrepo-com.svg",
      imageWidth: 400,
      imageHeight: 200,
      confirmButtonText: "Next",
      title: (
        <div>
          <p>Selling online made easy</p>
          <h5>3 easy steps</h5>
        </div>
      ),
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire({
          imageUrl: "./PngItem_585400.png",
          imageWidth: 221,
          imageHeight: 190,
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
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        }).then((result) => {
          if (result.isConfirmed) {
            MySwal.fire({
              imageUrl: "./svg-cloud-and-upload-icon-1.svg",
              imageWidth: 221,
              imageHeight: 190,
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
                popup: "animate__animated animate__fadeInDown",
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
    <div>
      <div className='seller-title'>
        <p></p>
      </div>
    </div>
  );
}

export default Seller;
