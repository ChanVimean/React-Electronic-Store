import { AiFillProduct } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { RiContactsBookFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-4 bg-blue-700 container-fuild d-lg-none fixed-bottom">
      <ul className="nav justify-content-evenly">
        <li>
          <NavLink to={'/'} className="text-light text-decoration-none d-grid">
            <IoHome className="mx-auto fs-3" />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={'/product'} className="text-light text-decoration-none d-grid">
            <AiFillProduct className="mx-auto fs-3" />
            Product
          </NavLink>
        </li>
        <li>
          <NavLink to={'/contact'} className="text-light text-decoration-none d-grid">
            <RiContactsBookFill className="mx-auto fs-3" />
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to={'/cart'} className="text-light text-decoration-none d-grid">
            <FaShoppingCart className="mx-auto fs-3" />
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink to={'/account'} className="text-light text-decoration-none d-grid">
            <IoMdContact className="mx-auto fs-3" />
            Account
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
