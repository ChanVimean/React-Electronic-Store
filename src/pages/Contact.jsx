import { useState } from "react"
import { FaFax, FaPhoneAlt } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { IoIosMail } from "react-icons/io"


const Contact = () => {

  const [contactInfo, setContactInfo] = useState(`we are passionate about bringing you the latest and most reliable electronic devices and accessories. Whether you are upgrading your laptop, building a custom PC with cutting-edge components, or seeking premium phone accessories, we have got you covered. Explore our extensive collection of laptops, smartphones, smartwatches, and high-quality peripherals designed to enhance your tech experience.`)
  const [service, setService] = useState(`For inquiries, support, or bulk orders, feel free to get in touch with us. Our team is dedicated to ensuring you have the best shopping experience with expert advice and fast, reliable service.`)



  return (
    <div className="container-fluid p-0 font-poppins">
      <div className="container p-0">

        {/* Banner */}
        <div style={{ height: 400 }} className="overflow-hidden w-100">
          <img
            src="https://scrubbed.net/wp-content/uploads/2023/04/eCommerce_Online-Payment-Processing.png"
            alt="Banner"
            className="w-100 h-100 object-fit-cover"
          />
        </div>

        {/* Conrtact */}
        <div className="row mx-0 my-4">
          <div className="col-12 col-md-6 col-lg-3 text-light text-center py-0 ps-0 pe-0 pe-md-3">
            <div className="container-fluid bg-blue-700 w-100 h-100 p-4">
              <FaLocationDot className="fs-2 hover-blue-300 pointer-event" />
              <h4 className="my-3">OUR MAIN OFFICE</h4>
              <p>SoHo 94 Broadway St New York, NY 1001</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 text-light text-center py-0 ps-0 pe-0 ps-md-2 pe-lg-3 mt-4 mt-md-0">
            <div className="container-fluid bg-blue-600 w-100 h-100 p-4">
              <FaPhoneAlt className="fs-2 hover-blue-300" />
              <h4 className="my-3">PHONE NUMBER</h4>
              <a href="#" className="hover-blue-300 pointer-event text-white text-decoration-none">123-456-789</a>
              <br />
              <a href="#" className="hover-blue-300 pointer-event text-white text-decoration-none">888-012-456 (Toll Free)</a>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 text-light text-center py-0 ps-0 pe-0 ps-lg-2 pe-md-3 mt-4 mt-lg-0">
            <div className="container-fluid bg-blue-500 w-100 h-100 p-4">
              <FaFax className="fs-2 hover-blue-300" />
              <h4 className="my-3">FAX</h4>
              <a href="#" className="hover-blue-300 pointer-event text-white text-decoration-none">1-234-567-8900</a>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 text-light text-center py-0 ps-0 pe-0 ps-md-2 mt-4 mt-lg-0">
            <div className="container-fluid bg-blue-400 w-100 h-100 p-4">
              <IoIosMail className="fs-2 hover-blue-300" />
              <h4 className="my-3">EMAIL</h4>
              <a href="#" className="pointer-event text-white hover-blue300">rokrakdev@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="row mx-0 g-4">
          {/* Left - Top */}
          <div className="col-12 col-lg-6 p-4 text-center">
            <h2 className="my-3 fw-bold">Contact Info</h2>
            <p className="text-start">
              At <mark className="text-blue-600 fw-bold bg-transparent">Zipbuy</mark>, 
              {contactInfo}
              <br /><br />
              {service}
              <br /><br />
              📍 Address: 123 Tech Street, Innovation City, TX 78910 <br />
              📞 Phone: (123) 456-7890 <br />
              📧 Email: <a href="#">support@rokrakservice.com</a><br />
              🕒 Business Hours: Mon-Fri: 9:00 AM - 6:00 PM | Sat: 10:00 AM - 4:00 PM
              <br /><br />
              Stay connected and never miss out on the latest deals and updates. We,re here to help 
              you find the perfect electronic solution!
            </p>
          </div>

          {/* Right - Bottom*/}
          <form className="col-12 col-lg-6 text-center p-4">
            <label className="mx-auto mt-3 text-start w-75">
              <p className="fs-4 fw-medium">Email</p>
              <input
                type="text"
                placeholder="Enter a valid email address"
                className="form-control border-0 bg-transparent shadow-none"
              />
              <hr className="m-0" />
            </label>
            <label className="mx-auto mt-3 text-start w-75">
              <p className="fs-4 fw-medium">Name</p>
              <input
                type="text"
                placeholder="Enter your name"
                className="form-control border-0 bg-transparent shadow-none"
              />
              <hr className="m-0" />
            </label>
            <label className="mx-auto mt-3 my-5 text-start w-75">
              <p className="fs-4 fw-medium">Message</p>
              <input
                type="text"
                placeholder="Enter your message"
                className="form-control border-0 bg-transparent shadow-none"
              />
              <hr className="m-0" />
            </label>
            <hr className="w-75 mx-auto my-4" />
            <button
              type="submit"
              className="btn btn-primary w-75 border-0 fs-5 fw-medium rounded-0"
              onClick={(e) => e.preventDefault()}
            >
              SUBMIT
            </button>
          </form>

        </div>

      </div>
    </div>
  )
}

export default Contact
