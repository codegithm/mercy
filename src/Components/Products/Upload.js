import React, { useState, useContext } from "react";
import { AppContext } from "../../AppContext";
import { addItem, app, auth, storage } from "../../firebase/firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { v4 } from "uuid";

function Upload() {
  const { isUpload, itemUpdated } = useContext(AppContext);
  const [updateitem, setUpdateitem] = itemUpdated;
  const [upload, setUpload] = isUpload;
  const [total, setTotal] = useState(0);
  const [type, setType] = useState("Type");
  const [mainImage, setMainImage] = useState(null);
  const [slide, setSlide] = useState(null);
  const [slide2, setSlide2] = useState(null);
  const [slide3, setSlide3] = useState(null);
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);
  const [brand, setBrand] = useState(null);
  const [sizes, setSizes] = useState(null);
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
    const getNewPrice = () => {
      let n = parseFloat(e.target.value);
      const basePrice = 10;
      const baseAddedAmount = n <= 1000 ? 2 : 1;
      const clientPrice = n;

      const priceDifference = clientPrice - basePrice;
      const priceGrowthPercentageFromBase = (priceDifference / basePrice) * 100;
      const priceToBeAdded =
        (priceGrowthPercentageFromBase / 100) * baseAddedAmount;
      const totalAmount = n + priceToBeAdded;

      return totalAmount;
    };
    setTotal(getNewPrice());
  };
  const MySwal = withReactContent(Swal);
  const loading = () => {
    MySwal.fire({
      title: "Uploading",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
      showConfirmButton: false,
      timerProgressBar: true,
    });
  };
  const success = () => {
    MySwal.fire({
      title: "Complete",
      icon: "success",
      timerProgressBar: true,
      allowOutsideClick: false,
    });
  };
  const fail = () => {
    MySwal.fire({
      title: "Opps...",
      icon: "error",
      timerProgressBar: true,
      allowOutsideClick: true,
    });
  };
  return (
    <div className='center-cont'>
      <div class='input-group flex-nowrap upload-cont'>
        <div className='close-upload'>
          <div className='close-upload-btn' onClick={() => setUpload(false)}>
            close
          </div>
        </div>
        <br />
        <label for='formFile' className='form-label'>
          Main picture
        </label>
        <input
          onChange={(event) => {
            setMainImage(event.target.files);
          }}
          className='form-control prod-brand'
          type='file'
          id='formFile'
        />
        <label for='formFile' className='form-label'>
          Slide picture
        </label>
        <input
          onChange={(event) => {
            setSlide(event.target.files);
          }}
          className='form-control prod-brand'
          type='file'
          id='formFile'
        />
        <label for='formFile' className='form-label'>
          Slide picture 2
        </label>
        <input
          onChange={(event) => {
            setSlide2(event.target.files);
          }}
          className='form-control prod-brand'
          type='file'
          id='formFile'
        />
        <label for='formFile' className='form-label'>
          Slide picture 3
        </label>
        <input
          onChange={(event) => {
            setSlide3(event.target.files);
          }}
          className='form-control prod-brand'
          type='file'
          id='formFile'
        />

        <br />
        <input
          onChange={(event) => {
            setBrand(event.target.value);
          }}
          type='text'
          className='form-control prod-brand'
          placeholder='Brand'
          aria-label='Brand'
          aria-describedby='addon-wrapping'
        />
        <br />
        <input
          onChange={(event) => {
            setName(event.target.value);
          }}
          type='text'
          className='form-control prod-brand'
          placeholder='Name'
          aria-label='Name'
          aria-describedby='addon-wrapping'
        />
        <br />
        <input
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          type='text'
          className='form-control prod-brand'
          placeholder='Descriprion'
          aria-label='Descriprion'
          aria-describedby='addon-wrapping'
        />
        <br />
        <div className='dropdown'>
          <button
            className='btn btn-outline-secondary dropdown-toggle type-toggle'
            type='button'
            id='dropdownMenuButton1'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            {type}
          </button>
          <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
            <li>
              <a
                className='dropdown-item'
                onClick={() => {
                  setType("Pants");
                  setSizes(null);
                }}
              >
                Pants
              </a>
            </li>
            <li>
              <a
                className='dropdown-item'
                onClick={() => {
                  setType("T-shirt");
                  setSizes(null);
                }}
              >
                T-shirt
              </a>
            </li>
            <li>
              <a
                className='dropdown-item'
                onClick={() => {
                  setType("Jacket");
                  setSizes(null);
                }}
              >
                Jacket
              </a>
            </li>
            <li>
              <a
                className='dropdown-item'
                onClick={() => {
                  setType("Hoodie");
                  setSizes(null);
                }}
              >
                Hoodie
              </a>
            </li>
            <li>
              <a
                className='dropdown-item'
                onClick={() => {
                  setType("Dress");
                  setSizes(null);
                }}
              >
                Dress
              </a>
            </li>
            <li>
              <a
                className='dropdown-item'
                onClick={() => {
                  setType("Shoes");
                  setSizes(null);
                }}
              >
                Shoes
              </a>
            </li>
          </ul>
        </div>

        <br />

        {type === "Pants" ? (
          <div className='dropdown'>
            <button
              className='btn btn-outline-secondary dropdown-toggle type-toggle'
              type='button'
              id='dropdownMenuButton1'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              Sizes
            </button>
            <ul
              className='dropdown-menu size-drop'
              aria-labelledby='dropdownMenuButton1'
            >
              <li>
                <input
                  name='26'
                  type='checkbox'
                  className='form-check-input'
                  onClick={() => {
                    let currentSize = sizes;
                    if (currentSize === null) {
                      setSizes([26]);
                    }
                    if (currentSize !== null && sizes.indexOf(26) < 0) {
                      currentSize.push(26);
                      setSizes(currentSize);
                    }
                  }}
                />
                <label class='form-check-label' for='26'>
                  26
                </label>
              </li>
              <li>
                <input
                  name='28'
                  type='checkbox'
                  className='form-check-input'
                  onClick={() => {
                    let currentSize = sizes;
                    if (currentSize === null) {
                      setSizes([28]);
                      console.log(sizes);
                    }
                    if (currentSize !== null && sizes.indexOf(28) < 0) {
                      currentSize.push(28);
                      setSizes(currentSize);
                      console.log(sizes);
                    }
                  }}
                />
                <label class='form-check-label' for='28'>
                  28
                </label>
              </li>
              <li>
                <input
                  name='30'
                  type='checkbox'
                  className='form-check-input'
                  onClick={() => {
                    let currentSize = sizes;
                    if (currentSize === null) {
                      setSizes([30]);
                    }
                    if (currentSize !== null && sizes.indexOf(30) < 0) {
                      currentSize.push(30);
                      setSizes(currentSize);
                    }
                  }}
                />
                <label class='form-check-label' for='30'>
                  30
                </label>
              </li>
              <li>
                <input
                  name='32'
                  type='checkbox'
                  className='form-check-input'
                  onClick={() => {
                    let currentSize = sizes;
                    if (currentSize === null) {
                      setSizes([32]);
                    }
                    if (currentSize !== null && sizes.indexOf(32) < 0) {
                      currentSize.push(32);
                      setSizes(currentSize);
                    }
                  }}
                />
                <label class='form-check-label' for='32'>
                  32
                </label>
              </li>
              <li>
                <input
                  name='34'
                  type='checkbox'
                  className='form-check-input'
                  onClick={() => {
                    let currentSize = sizes;
                    if (currentSize === null) {
                      setSizes([34]);
                    }
                    if (currentSize !== null && sizes.indexOf(34) < 0) {
                      currentSize.push(34);
                      setSizes(currentSize);
                    }
                  }}
                />
                <label class='form-check-label' for='34'>
                  34
                </label>
              </li>
              <li>
                <input
                  name='36'
                  type='checkbox'
                  className='form-check-input'
                  onClick={() => {
                    let currentSize = sizes;
                    if (currentSize === null) {
                      setSizes([36]);
                    }
                    if (currentSize !== null && sizes.indexOf(36) < 0) {
                      currentSize.push(36);
                      setSizes(currentSize);
                    }
                  }}
                />
                <label class='form-check-label' for='36'>
                  36
                </label>
              </li>
              <li>
                <input
                  name='38'
                  type='checkbox'
                  className='form-check-input'
                  onClick={() => {
                    let currentSize = sizes;
                    if (currentSize === null) {
                      setSizes([38]);
                    }
                    if (currentSize !== null && sizes.indexOf(38) < 0) {
                      currentSize.push(38);
                      setSizes(currentSize);
                    }
                  }}
                />
                <label class='form-check-label' for='38'>
                  38
                </label>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}

        {type === "Jacket" ||
        type === "Dress" ||
        type === "Hoodie" ||
        type === "T-shirt" ? (
          <div className='dropdown'>
            <button
              className='btn btn-outline-secondary dropdown-toggle type-toggle'
              type='button'
              id='dropdownMenuButton1'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              Sizes
            </button>
            <ul
              className='dropdown-menu size-drop'
              aria-labelledby='dropdownMenuButton1'
            >
              <li>
                <input
                  name='s'
                  type='checkbox'
                  className='form-check-input'
                  onClick={() => {
                    let currentSize = sizes;
                    if (currentSize === null) {
                      setSizes(["S"]);
                    }
                    if (currentSize !== null && sizes.indexOf("S") < 0) {
                      currentSize.push("S");
                      setSizes(currentSize);
                    }
                  }}
                />
                <label class='form-check-label' for='s'>
                  S
                </label>
              </li>
              <li>
                <input
                  name='xs'
                  type='checkbox'
                  className='form-check-input'
                  onClick={() => {
                    let currentSize = sizes;
                    if (currentSize === null) {
                      setSizes(["XS"]);
                    }
                    if (currentSize !== null && sizes.indexOf("XS") < 0) {
                      currentSize.push("XS");
                      setSizes(currentSize);
                    }
                  }}
                />
                <label class='form-check-label' for='xs'>
                  XS
                </label>
              </li>
              <li>
                <input
                  name='m'
                  type='checkbox'
                  className='form-check-input'
                  onClick={() => {
                    let currentSize = sizes;
                    if (currentSize === null) {
                      setSizes(["M"]);
                    }
                    if (currentSize !== null && sizes.indexOf("M") < 0) {
                      currentSize.push("M");
                      setSizes(currentSize);
                    }
                  }}
                />
                <label class='form-check-label' for='m'>
                  M
                </label>
              </li>
              <li>
                <input
                  name='l'
                  type='checkbox'
                  className='form-check-input'
                  onClick={() => {
                    let currentSize = sizes;
                    if (currentSize === null) {
                      setSizes(["L"]);
                    }
                    if (currentSize !== null && sizes.indexOf("L") < 0) {
                      currentSize.push("L");
                      setSizes(currentSize);
                    }
                  }}
                />
                <label class='form-check-label' for='L'>
                  L
                </label>
              </li>
              <li>
                <input
                  name='xl'
                  type='checkbox'
                  className='form-check-input'
                  onClick={() => {
                    let currentSize = sizes;
                    if (currentSize === null) {
                      setSizes(["XL"]);
                    }
                    if (currentSize !== null && sizes.indexOf("XL") < 0) {
                      currentSize.push("XL");
                      setSizes(currentSize);
                    }
                  }}
                />
                <label class='form-check-label' for='XL'>
                  XL
                </label>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}

        {type === "Shoes" ? (
          <div className='dropdown'>
            <button
              className='btn btn-outline-secondary dropdown-toggle type-toggle'
              type='button'
              id='dropdownMenuButton1'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              Sizes
            </button>
            <ul
              className='dropdown-menu size-drop'
              aria-labelledby='dropdownMenuButton1'
            >
              <li>
                <input
                  name='4'
                  type='checkbox'
                  className='form-check-input'
                  onClick={() => {
                    let currentSize = sizes;
                    if (currentSize === null) {
                      setSizes([4]);
                    }
                    if (currentSize !== null && sizes.indexOf(4) < 0) {
                      currentSize.push(4);
                      setSizes(currentSize);
                    }
                  }}
                />
                <label class='form-check-label' for='4'>
                  4
                </label>
              </li>
              <li>
                <input
                  name='5'
                  type='checkbox'
                  className='form-check-input'
                  onClick={() => {
                    let currentSize = sizes;
                    if (currentSize === null) {
                      setSizes([5]);
                    }
                    if (currentSize !== null && sizes.indexOf(5) < 0) {
                      currentSize.push(5);
                      setSizes(currentSize);
                    }
                  }}
                />
                <label class='form-check-label' for='5'>
                  5
                </label>
              </li>
              <li>
                <input
                  name='6'
                  type='checkbox'
                  className='form-check-input'
                  onClick={() => {
                    let currentSize = sizes;
                    if (currentSize === null) {
                      setSizes([6]);
                    }
                    if (currentSize !== null && sizes.indexOf(6) < 0) {
                      currentSize.push(6);
                      setSizes(currentSize);
                    }
                  }}
                />
                <label class='form-check-label' for='6'>
                  6
                </label>
              </li>
              <li>
                <input
                  name='7'
                  type='checkbox'
                  className='form-check-input'
                  onClick={() => {
                    let currentSize = sizes;
                    if (currentSize === null) {
                      setSizes([7]);
                    }
                    if (currentSize !== null && sizes.indexOf(7) < 0) {
                      currentSize.push(7);
                      setSizes(currentSize);
                    }
                  }}
                />
                <label class='form-check-label' for='7'>
                  7
                </label>
              </li>
              <li>
                <input
                  name='8'
                  type='checkbox'
                  className='form-check-input'
                  onClick={() => {
                    let currentSize = sizes;
                    if (currentSize === null) {
                      setSizes([8]);
                    }
                    if (currentSize !== null && sizes.indexOf(8) < 0) {
                      currentSize.push(8);
                      setSizes(currentSize);
                    }
                  }}
                />
                <label class='form-check-label' for='8'>
                  8
                </label>
              </li>
              <li>
                <input
                  name='9'
                  type='checkbox'
                  className='form-check-input'
                  onClick={() => {
                    let currentSize = sizes;
                    if (currentSize === null) {
                      setSizes([9]);
                    }
                    if (currentSize !== null && sizes.indexOf(9) < 0) {
                      currentSize.push(9);
                      setSizes(currentSize);
                    }
                  }}
                />
                <label class='form-check-label' for='9'>
                  9
                </label>
              </li>
              <li>
                <input
                  name='10'
                  type='checkbox'
                  className='form-check-input'
                  onClick={() => {
                    let currentSize = sizes;
                    if (currentSize === null) {
                      setSizes([10]);
                    }
                    if (currentSize !== null && sizes.indexOf(10) < 0) {
                      currentSize.push(10);
                      setSizes(currentSize);
                    }
                  }}
                />
                <label class='form-check-label' for='10'>
                  10
                </label>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}

        <br />
        <div className='input-group mb-3 price-cont'>
          <span className='input-group-text'>R</span>
          <input
            onChange={handlePriceChange}
            type='text'
            className='form-control prod-price'
            aria-label='Rand amount (with dot and two decimal places)'
          />
        </div>
        <p>Total after additional cost: {total}</p>
      </div>
      <br />
      <button
        onClick={() => {
          let itemObj = {
            Id: auth.currentUser.uid,
            Brand: brand,
            Name: name,
            Description: description,
            Img: mainImage,
            Price: parseFloat(price),
            Type: type,
            slide: [mainImage, slide, slide2, slide3],
            size: sizes,
          };
          if (
            mainImage != null &&
            total != 0 &&
            type != "Type" &&
            slide != null &&
            slide2 != null &&
            slide3 != null &&
            brand != null &&
            price != null &&
            name != null &&
            description != null &&
            sizes !== null
          ) {
            //File ref
            const imgRefMain = ref(
              storage,
              `items/${mainImage[0].name + v4()}`
            );
            const imgRefSlide = ref(storage, `items/${slide[0].name + v4()}`);
            const imgRefSlide2 = ref(storage, `items/${slide2[0].name + v4()}`);
            const imgRefSlide3 = ref(storage, `items/${slide3[0].name + v4()}`);

            //Upload using file ref
            uploadBytesResumable(imgRefMain, mainImage[0])
              .then((res) => {
                loading();

                //Set downloadable url
                const mainRef = ref(storage, res.metadata.fullPath);
                getDownloadURL(mainRef).then((url) => {
                  itemObj.Img = url;
                  itemObj.slide[0] = url;
                });
                //Upload slide pic
                uploadBytes(imgRefSlide, slide[0])
                  .then((res) => {
                    const secRef = ref(storage, res.metadata.fullPath);
                    getDownloadURL(secRef).then((url) => {
                      itemObj.slide[1] = url;
                    });
                    uploadBytes(imgRefSlide2, slide2[0])
                      .then((res) => {
                        console.log(slide2[0]);
                        const thirdRef = ref(storage, res.metadata.fullPath);
                        getDownloadURL(thirdRef).then((url) => {
                          itemObj.slide[2] = url;
                        });
                        uploadBytes(imgRefSlide3, slide3[0])
                          .then((res) => {
                            console.log(slide3[0]);
                            const fourthRef = ref(
                              storage,
                              res.metadata.fullPath
                            );
                            getDownloadURL(fourthRef).then((url) => {
                              console.log(url);
                            });
                            itemObj.slide[3] = res.metadata.fullPath;
                            addItem(v4(), itemObj);
                            Swal.close();
                            success();
                            setUpdateitem(!!updateitem);
                          })
                          .catch((e) => {
                            Swal.close();
                            fail();
                          });
                      })
                      .catch((e) => {
                        Swal.close();
                        fail();
                      });
                  })
                  .catch((e) => {
                    Swal.close();
                    fail();
                  });
              })
              .catch((e) => {
                Swal.close();
                fail();
              });
          }
        }}
        type='button'
        class='btn btn-primary btn-sm'
      >
        Save
      </button>
    </div>
  );
}

export default Upload;
