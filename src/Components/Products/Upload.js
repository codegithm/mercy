import React, { useState } from "react";

function Upload() {
  const [total, setTotal] = useState(0);
  const [type, setType] = useState("Type");

  const handlePriceChange = (e) => {
    console.log(Math.round(parseFloat(e.target.value), 2));
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
  return (
    <div className='center-cont'>
      <h4 className='upload-title'>Upload new Item</h4>
      <div class='input-group flex-nowrap upload-cont'>
        <br />
        <label for='formFile' className='form-label'>
          Main picture
        </label>
        <input className='form-control prod-brand' type='file' id='formFile' />
        <label for='formFile' className='form-label'>
          Slide picture
        </label>
        <input className='form-control prod-brand' type='file' id='formFile' />
        <label for='formFile' className='form-label'>
          Slide picture 2
        </label>
        <input className='form-control prod-brand' type='file' id='formFile' />
        <label for='formFile' className='form-label'>
          Slide picture 3
        </label>
        <input className='form-control prod-brand' type='file' id='formFile' />

        <br />
        <input
          type='text'
          className='form-control prod-brand'
          placeholder='Brand'
          aria-label='Brand'
          aria-describedby='addon-wrapping'
        />
        <br />
        <input
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
                }}
              >
                Shoes
              </a>
            </li>
          </ul>
        </div>

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
    </div>
  );
}

export default Upload;
