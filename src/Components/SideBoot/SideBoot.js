import React, { useContext } from "react";
import { BiHomeCircle } from "react-icons/bi";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsCalendar } from "react-icons/bs";
import { RiProductHuntLine } from "react-icons/ri";
import { AppContext } from "../../AppContext";
import "./SideBoot.css";
import { useHistory } from "react-router-dom";
const SideBoot = () => {
  const { isHome, isDash, isOrders, isProducts } = useContext(AppContext);
  const [home, setHome] = isHome;
  const [dash, setDash] = isDash;
  const [orders, setOrders] = isOrders;
  const [products, setProducts] = isProducts;
  const history = useHistory();
  return (
    <div
      className='d-flex flex-column flex-shrink-0 p-3 text-white bg-dark side-boot'
      bis_skin_checked='1'
    >
      <a
        href='/'
        className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none side-boot-logo'
      >
        <img src='/Untitled-1-02.png' />
        <span className='fs-4'>Mercy</span>
      </a>
      <hr />
      <ul className='nav nav-pills flex-column mb-auto side-list-cont'>
        <li className='nav-item'>
          <a
            onClick={() => {
              history.push("/");
              setDash("active");
              setOrders("");
              setProducts("");
            }}
            className={"nav-link side-list text-white " + home}
            aria-current='page'
          >
            <div className='side-spacer'>
              <BiHomeCircle />
            </div>
            <p>Home</p>
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setHome("");
              setDash("active");
              setOrders("");
              setProducts("");
            }}
            className={"nav-link side-list text-white " + dash}
          >
            <div className='side-spacer'>
              <AiOutlineDashboard />
            </div>
            <p>Dashboard</p>
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setHome("");
              setDash("");
              setOrders("active");
              setProducts("");
            }}
            className={"nav-link side-list text-white " + orders}
          >
            <div className='side-spacer'>
              <BsCalendar />
            </div>
            <p>Orders</p>
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setHome("");
              setDash("");
              setOrders("");
              setProducts("active");
            }}
            className={"nav-link side-list text-white " + products}
          >
            <div className='side-spacer'>
              <RiProductHuntLine />
            </div>
            <p>Products</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBoot;
