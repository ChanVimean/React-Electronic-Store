import { useContext, useState } from "react"
import { FaSearch } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import { FaCartShopping } from "react-icons/fa6"
import { NavLink } from "react-router-dom"
import ProductContext from "../store/ProductProvider"

const Header = () => {

  const { cart } = useContext(ProductContext)
  const [isLogin, setIsLogin] = useState(true)


  return (
    <div>

      {/* 1st Layer */}
      <nav className="container-fluid">
        <div className="container navbar">
          <div className="col-3 bg-success p-0 overflow-hidden" style={{ height: 45, width: 90 }}>
            <img
              src="Zipbuy.png"
              alt="Logo"
              className="font-poppins fs-3 fw-bold nav-link w-100 h-100 object-fit-cover"
              style={{ scale: 2 }}
            />
          </div>

          <div className="col-9 col-lg-6 font-poppins">
            <form className="border d-flex">
              <input type="text"
                     placeholder="Search for products"
                     className="border-0 shadow-none rounded-0 form-control" />
              <button className="border-0 shadow-none btn btn-bg-secondary">
                <FaSearch className="fs-4" />
              </button>
            </form>
          </div>

          <div className="d-none d-lg-block col-3 font-poppins">
            {
              isLogin ? (
                <div className="d-flex align-items-center justify-content-end">
                  
                  <div style={{ width: 45,  height: 45 }}
                        className="mx-3 overflow-hidden rounded-circle bg-danger">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/800px-Cat_November_2010-1a.jpg"
                          alt=""
                          className="object-fit-cover w-100 h-100" />
                  </div>

                  <div className="dropdown">
                    <button className="border-0 dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                    >
                      User Name
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">Action</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">Another action</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">Something else here</a>
                      </li>
                    </ul>
                  </div>

                </div>
              ) : (
                <div className="d-flex justify-content-end">
                  <button className="px-3 bg-blue-700 btn text-light rounded-0">Register</button>
                  <button className="px-3 btn rounded-0">Login</button>
                </div>   
              )
            }
          </div>
        </div>
      </nav>

      {/* 2nd Layer */}
      <nav className="p-0 container-fluid font-poppins navbar bg-dark">
        {/* Categories */}
        <div className="container p-0">  
          <div className="py-2 bg-blue-700 py-lg-3 col-12 col-lg-3">
            <div className="border-0 dropdown">
              <button className="bg-transparent border-0 text-light btn dropdown-toggle d-flex w-100 align-items-center justify-content-between" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <div className="d-flex align-items-center">
                  <GiHamburgerMenu className="fs-5 me-1 d-flex align-items-center" />
                  <p className="m-0 fs-5">Categories</p>
                </div>
              </button>
              <ul className="mt-2 bg-blue-700 border border-2 mt-lg-3 dropdown-menu w-100 rounded-0">
                <li><a className="dropdown-item text-light hover-blue-200 bg-hover-blue-500" href="#">Laptop</a></li>
                <li><a className="dropdown-item text-light hover-blue-200 bg-hover-blue-500" href="#">Accessories</a></li>
                <li><a className="dropdown-item text-light hover-blue-200 bg-hover-blue-500" href="#">Computer Parts</a></li>
              </ul>
            </div>
          </div>

          {/* Menu Navigation */}
          <div className="col-9 bg-dark d-none d-lg-flex align-items-center justify-content-between">
            <ul className="nav">
              <li>
                <NavLink to={"/"} className="nav-link hover-blue-300 focus-blue-400 text-light ">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/product"} className="nav-link hover-blue-300 focus-blue-400 text-light ">
                  Product
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="nav-link hover-blue-300 focus-blue-400 text-light ">
                  Contact
                </NavLink>
              </li>
            </ul>

            <div className="d-flex justify-content-center align-items-center">        
              <NavLink to={'/cart'} className="nav-link hover-blue-300 text-light focus-blue-400">
                <button type="button" className="border btn text-light position-relative me-3 rounded-0">
                  <FaCartShopping />
                    <span className="top-0 position-absolute start-100 translate-middle badge rounded-pill bg-danger">
                      {cart.length > 0 ? cart.length : (0)}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </button>
                Shopping Cart
              </NavLink>
            </div>

          </div>
        </div>
      </nav>

    </div>
  )
}

export default Header