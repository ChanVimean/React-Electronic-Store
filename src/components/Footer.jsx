import { AiFillProduct } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { RiContactsBookFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="py-4 bg-blue-700 container-fuild d-lg-none fixed-bottom">
      <ul className="nav justify-content-evenly">
        <li>
          <a href="#" className="text-light text-decoration-none d-grid">
            <IoHome className="mx-auto fs-3" />
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-light text-decoration-none d-grid">
            <AiFillProduct className="mx-auto fs-3" />
            Product
          </a>
        </li>
        <li>
          <a href="#" className="text-light text-decoration-none d-grid">
            <RiContactsBookFill className="mx-auto fs-3" />
            Contact
          </a>
        </li>
        <li>
          <a href="#" className="text-light text-decoration-none d-grid">
            <FaShoppingCart className="mx-auto fs-3" />
            Cart
          </a>
        </li>
        <li>
          <a href="#" className="text-light text-decoration-none d-grid">
            <IoMdContact className="mx-auto fs-3" />
            Account
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
