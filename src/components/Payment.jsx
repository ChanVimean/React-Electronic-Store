import { useState } from "react"
import { FaCcMastercard, FaCcPaypal, FaCreditCard } from "react-icons/fa"
import { RiVisaFill } from "react-icons/ri"
const Payment = () => {

    const [date, setDate] = useState('')
    const [cvv, setCvv] = useState('')
  
    const [paymentMethod, setPaymentMethod] = useState('credit-card')
  
    const paymentMethods = [
      { value: "credit-card", label: "Credit Card", icon: <FaCreditCard /> },
      { value: "paypal", label: "PayPal", icon: <FaCcPaypal /> },
      { value: "visa-card", label: "Visa Card", icon: <RiVisaFill /> },
      { value: "master-card", label: "Master Card", icon: <FaCcMastercard /> },
    ]
  
    const handleDateChange = (event) => {
      let input = event.target.value.replace(/\D/g, ""); // Remove non-numeric characters
      if (input.length > 2) {
        input = input.slice(0, 2) + "/" + input.slice(2, 4); // Add slash after MM
      }
      setDate(input.slice(0, 5)); // Limit input to 5 characters (MM/YY)
    };
  
    const handleCvvChange = (event) => {
      const input = event.target.value.replace(/\D/g, ""); // Remove non-numeric characters
      setCvv(input.slice(0, 3)); // Limit input to 3 digits
    };
  
    const [useShippingAddress, setUseShippingAddress] = useState(true);
  
    const toggleAddress = () => {
      setUseShippingAddress(!useShippingAddress);
    };

  return (
    <div className="col-12 col-lg-7 p-5">

      <h2 className="mb-5 fw-bold">Payment Method</h2>

      {/* Credit Card */}
      <div className="text-start my-3">
        <h4 className="mb-3">Pay us with</h4>
        <div className="dropdown">
          <button
            className="btn bg-blue-600 dropdown-toggle w-100 text-start border-0 text-light rounded-0"
            type="button"
            id="paymentDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {paymentMethods.find((method) => method.value === paymentMethod)?.icon}{" "}
            {paymentMethods.find((method) => method.value === paymentMethod)?.label}
          </button>
          <ul className="dropdown-menu w-100 bg-blue-600 rounded-0" aria-labelledby="paymentDropdown">
            {
              paymentMethods.map((method) => (
                <li key={method.value}>
                  <button
                    className="dropdown-item d-flex align-items-center text-light bg-hover-blue-500"
                    onClick={() => setPaymentMethod(method.value)}
                  >
                    {method.icon} <span className="ms-2">{method.label}</span>
                  </button>
                </li>
              ))
            }
          </ul>
        </div>
      </div>

      {/* Card Number */}
      <div className="text-start my-3">
        <h4 className="fs-5">Card Number</h4>
        <input 
          type="text" 
          className="form-control pe-5 border-0 bg-transparent shadow-none" 
          placeholder="Card Number" 
        />
        <hr className="m-0" />
      </div>

      {/* Date */}
      <div className="d-flex justify-content-between my-3">
        <label className="text-start pe-3">
          <h4 className="fs-5">Date</h4>
          <input 
            type="text"
            value={date}
            onChange={handleDateChange}
            placeholder="MM/YY"
            maxLength={5}
            className="form-control border-0 bg-transparent shadow-none"
          />
          <hr className="m-0" />
        </label>
        <label className="text-start px-2">
          <h4 className="fs-5">CVV</h4>
          <input 
            type="text"
            value={cvv}
            onChange={handleCvvChange}
            placeholder="CVV"
            maxLength={3}
            className="form-control border-0 bg-transparent shadow-none"
          />
          <hr className="m-0" />
        </label>
      </div>

      {/* Frst Name */}
      <div className="text-start my-3">
        <h4 className="fs-5">First Name</h4>
        <input 
          type="text" 
          className="form-control pe-5 border-0 bg-transparent shadow-none" 
          placeholder="First Name"
        />
        <hr className="m-0" />
      </div>

      {/* Last Name */}
      <div className="text-start my-3">
        <h4 className="fs-5">Lsst Name</h4>
        <input 
          type="text" 
          className="form-control pe-5 border-0 bg-transparent shadow-none" 
          placeholder="Last Name"
        />
        <hr className="m-0" />
      </div>

      {/* Address */}
      <div className="container mt-4">
        <h4 className="mb-3">Billing Address</h4>
        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="useShippingAddress"
            checked={useShippingAddress}
            onChange={toggleAddress}
          />
          <label className="form-check-label" htmlFor="useShippingAddress">
            Use my shipping address
          </label>
        </div>
        {useShippingAddress ? (
          <div className="p-3 bg-light border rounded">
            <p className="mb-0">123 Main Street, Apt 4B</p>
            <p className="mb-0">Springfield, IL 62701</p>
            <p>USA</p>
          </div>
        ) : (
          <div className="p-3 bg-light border rounded">
            <p className="text-muted">Enter a different address.</p>
          </div>
        )}
      </div>

    </div>
  )
}

export default Payment
