import React, { useState, useContext, useEffect } from "react";
import "./Products.css";
import Upload from "./Upload";
import { AppContext } from "../../AppContext";
import { auth, db, storage } from "../../firebase/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { deleteDoc, doc } from "firebase/firestore/lite";
import { v4 } from "uuid";
import { ref, deleteObject } from "firebase/storage";

function Products() {
  const { isUpload, ItemInStore, itemUpdated } = useContext(AppContext);
  const [upload, setUpload] = isUpload;
  const [itemsDb, setItemsDb] = ItemInStore;
  const [updateitem, setUpdateitem] = itemUpdated;

  //Delete data
  const MySwal = withReactContent(Swal);
  function deleteData(id, item) {
    const firstRef = ref(storage, item.meta[0]);
    const secRef = ref(storage, item.meta[1]);
    const thirdRef = ref(storage, item.meta[2]);
    const fourthRef = ref(storage, item.meta[3]);
    Swal.fire({
      icon: "warning",
      title: "Do you want to save the changes?",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        //Show loadign
        MySwal.fire({
          title: "Deleting",
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          },
          showConfirmButton: false,
          timerProgressBar: true,
        });

        //Delete Images
        deleteObject(firstRef)
          .then(() => {
            deleteObject(secRef)
              .then(() => {
                deleteObject(thirdRef)
                  .then(() => {
                    deleteObject(fourthRef)
                      .then(() => {
                        //Delete
                        const docRef = doc(db, "Items", id);
                        deleteDoc(docRef)
                          .then((res) => {
                            setUpdateitem(v4());

                            Swal.close();
                            Swal.fire("Saved!", "", "success");
                          })
                          .catch((e) => {
                            MySwal.fire({
                              title: "Opps...",
                              icon: "error",
                              timerProgressBar: true,
                              allowOutsideClick: true,
                            });

                            return "Error " + e;
                          });
                      })
                      .catch(() => {
                        MySwal.fire({
                          title: "Opps...",
                          icon: "error",
                          timerProgressBar: true,
                          allowOutsideClick: true,
                        });
                      });
                  })
                  .catch(() => {
                    MySwal.fire({
                      title: "Opps...",
                      icon: "error",
                      timerProgressBar: true,
                      allowOutsideClick: true,
                    });
                  });
              })
              .catch(() => {
                MySwal.fire({
                  title: "Opps...",
                  icon: "error",
                  timerProgressBar: true,
                  allowOutsideClick: true,
                });
              });
          })
          .catch(() => {
            MySwal.fire({
              title: "Opps...",
              icon: "error",
              timerProgressBar: true,
              allowOutsideClick: true,
            });
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
        return "Denied";
      }
    });
  }

  return (
    <div className='load'>
      <div className='add-new'>
        <button
          type='button'
          className='btn btn-primary btn-lg'
          onClick={() => setUpload(true)}
        >
          Add new product
        </button>
        <hr />
      </div>
      {upload === true ? <Upload /> : ""}
      <br />
      <div className='row'>
        {itemsDb.map((item) => {
          if (item.Id === auth.currentUser.uid) {
            return (
              <div
                key={item.id}
                className='col-lg-3 col-md-4 col-sm-3 card-checkout card'
              >
                <img
                  className='img-fluid card-img-top-checkout '
                  alt='...'
                  src={item.Img}
                />
                <div className='card-body'>
                  <h3 className='card-title'>{item.Brand}</h3>
                  <h3 className='card-title'>R{item.Price}</h3>
                </div>
                <div className='delete'>
                  <FontAwesomeIcon
                    onClick={async () => {
                      deleteData(item.id, item);
                    }}
                    icon={faTrashAlt}
                  />
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Products;
