import { FaFacebook, FaLinkedinIn, FaPhoneAlt, FaTiktok } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { IoIosMail } from "react-icons/io"


const BottomBar = () => {
  return (
    <div className="p-0 pb-4 mb-5 container-fuild bg-dark mb-lg-0 pb-lg-0 font-poppins">
      <div className="container p-0">
        <div className="m-0 row">

          {/* GET IN TOUCH */}
          <div className="py-3 col-lg-4 py-lg-5 text-light">
            <h4>GET IN TOUCH</h4>
            <p className="py-3">
              No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et
              dolor sed dolor. Rebum tempor no vero est magna amet no
            </p>
            <ul className="list-unstyled">
              <li className="py-1">
                <FaLocationDot className="text-blue-500 fs-4 me-2 hover-blue-300" />
                123 Street, New York, USA
              </li>
              <li className="py-1">
                <IoIosMail className="text-blue-500 fs-4 me-2 hover-blue-300" />
                info@example.com
              </li>
              <li className="py-1">
                <FaPhoneAlt className="text-blue-500 fs-4 me-2 hover-blue-300" />
                +012 345 67890
              </li>
            </ul>
          </div>

          {/* Right Side */}
          <div className="p-0 m-0 col-lg-8 row text-light">
            {/* QUICK SHOP */}
            <div className="py-2 py-lg-5 col-md-3">
              <h4>QUICK SHOP</h4>
              <ul className="py-2 list-unstyled">
                <li className="py-1">
                  <a href="#" className="text-light text-decoration-none hover-blue-300">
                    &gt; Home
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="text-light text-decoration-none hover-blue-300">
                    &gt; Our Shop
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="text-light text-decoration-none hover-blue-300">
                    &gt; Shop Detail
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="text-light text-decoration-none hover-blue-300">
                    &gt; Shopping Cart
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="text-light text-decoration-none hover-blue-300">
                    &gt; Checkout
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="text-light text-decoration-none hover-blue-300">
                    &gt; Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* MY ACCOUNT */}
            <div className="py-2 py-lg-5 col-md-3">
              <h4>MY ACCOUNT</h4>
              <ul className="py-2 list-unstyled">
                <li className="py-1">
                  <a href="#" className="text-light text-decoration-none hover-blue-300">
                    &gt; Home
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="text-light text-decoration-none hover-blue-300">
                    &gt; Our Shop
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="text-light text-decoration-none hover-blue-300">
                    &gt; Shop Detail
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="text-light text-decoration-none hover-blue-300">
                    &gt; Shopping Cart
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="text-light text-decoration-none hover-blue-300">
                    &gt; Checkout
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="text-light text-decoration-none hover-blue-300">
                    &gt; Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* NEWSLETTER */}
            <div className="py-2 py-lg-5 col-md-6">
              <h4 className="ml-4">NEWSLETTER</h4>
              <p className="py-3">
                Duo stet tempor ipsum sit amet magna ipsum tempor est
              </p>
              <form className="border d-flex">
                <input 
                  type="text"
                  placeholder="Your Email Address"
                  className="py-2 border-0 shadow-none form-control rounded-0" />
                <button className="bg-blue-700 border-start border-s btn text-light rounded-0">
                  Register
                </button>
              </form>
              <h5 className="my-4">Follow Us</h5>
              <ul className="py-2 nav">
                <li className="p-2 bg-blue-700 me-2">
                  <a href="#" className="text-light text-decoration-none hover-blue-300">
                    <FaFacebook className="fs-4" />
                  </a>
                </li>
                <li className="p-2 bg-blue-700 me-2">
                  <a href="#" className="text-light text-decoration-none hover-blue-300">
                    <FaLinkedinIn className="fs-4" />
                  </a>
                </li>
                <li className="p-2 bg-blue-700 me-2">
                  <a href="#" className="text-light text-decoration-none hover-blue-300">
                    <FaTiktok className="fs-4" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* COPY RIGHT */}
          <div className="py-3 m-0 row text-light border-top border-secondary">
            <div className="col-md-6 col-12">
              <p>
                © 
                <a href="#" className="text-blue-700 me-1 text-decoration-none hover-blue-300 fw-medium">
                  Domain.
                </a>
                All Rights Reserved. Designed By 
                <a href="#" className="px-1 text-blue-700 text-decoration-none hover-blue-300 fw-medium">
                  HTML Codex
                </a>
                  Distributed By:
                <a href="#" className="px-1 text-blue-700 text-decoration-none hover-blue-300 fw-medium">
                  Rok Rak Developer
                </a>
              </p>
            </div>
            <div className="col-md-6 col-12 text-md-end">
              <img src="public\payments.png" alt="Payments" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default BottomBar
