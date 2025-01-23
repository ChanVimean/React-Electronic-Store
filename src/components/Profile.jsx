import { useState } from 'react'
import { FaRegEdit } from "react-icons/fa"
const Profile = () => {

  const [firstName, setFirstName] = useState('Tony')
  const [lastName, setLatName] = useState('Stark')
  const [password, setPassword] = useState('****')
  const [email, setEmail] = useState('ironman@gmail.com')
  const [phone, setPhone] = useState('012-345-678')


  return (
    <div className="col-12 col-lg-5 text-center p-5">

      <button style={{ width: 200, height: 200, border: "none" }} className="btn mx-auto position-relative">
        <img
          src="https://www.jiomart.com/images/product/original/rv3jnpppl2/tony-stark-iron-man-avengers-infinity-war-men-s-sunglasses-spectacle-frames-silver-blue-product-images-rv3jnpppl2-3-202207021924.jpg?im=Resize=(500,630)"
          alt="Profile Image"
          className="w-100 h-100 object-fit-cover rounded-circle"
        />
        <p className="my-2 hover-blue-700">Edit Profile</p>
        <span style={{ top: "80%", left: "85%" }} className="position-absolute bg-white p-2 text-black translate-middle badge rounded-pill">
          <FaRegEdit className="fs-2 hover-blue-700" />
        </span>
      </button>

      <form className="form-control my-5 border-0">

        {/* First Name & Last Name */}
        <div className="d-flex justify-content-between my-3">
          <label className="text-start pe-3">
            <h4 className="fs-5">First Name</h4>
            <input 
              type="text"
              placeholder={firstName}
              className="form-control border-0 bg-transparent shadow-none"
            />
            <hr className="m-0" />
          </label>
          <label className="text-start px-2">
            <h4 className="fs-5">Last Name</h4>
            <input 
              type="text"
              placeholder={lastName}
              className="form-control border-0 bg-transparent shadow-none"
            />
            <hr className="m-0" />
          </label>
        </div>

        {/* Password */}
        <div className="text-start my-3">
          <h4 className="fs-5">Password</h4>
          <div className="position-relative">
            <input 
              type="password" 
              className="form-control pe-5 border-0 bg-transparent shadow-none" 
              placeholder={password}
              aria-label="Password"
            />
            <hr className="m-0" />
            <button
              type="button"
              className="btn position-absolute z-2 end-0 top-50 translate-middle-y me-2 text-blue-700 hover-blue-300"
            >
              Change Password
            </button>
          </div>
        </div>

        {/* Email */}
        <div className="text-start my-3">
          <h4 className="fs-5">Email</h4>
          <input 
            type="text" 
            className="form-control pe-5 border-0 bg-transparent shadow-none" 
            placeholder={email}
          />
          <hr className="m-0" />
        </div>

        {/* Phone */}
        <div className="text-start my-3">
          <h4 className="fs-5">Phone</h4>
          <input 
            type="text"
            className="form-control pe-5 border-0 bg-transparent shadow-none" 
            placeholder={phone} 
            aria-label="Password"
          />
          <hr className="m-0" />
        </div>

        <button
          type="submit"
          className="btn bg-primary text-light fs-5 fw-medium mt-5 rounded-0"
          onClick={(e) => e.preventDefault()}
        >
          Update Profile
        </button>

      </form>

    </div>
  )
}

export default Profile
