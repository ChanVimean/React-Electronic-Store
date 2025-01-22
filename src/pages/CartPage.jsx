import { useContext } from "react"
import ProductContext from "../store/ProductProvider"
import { IoTrashBinSharp } from "react-icons/io5"
import { BsCart4 } from "react-icons/bs"


const CartPage = () => {

  const { cart, removeFromCart, increaseQty, decreaseQty, totalPrice } = useContext(ProductContext)

  return (
    <div className="container text-center font-poppins p-0">
      <h1 className="my-4 fw-bold text-blue-700">Shopping Cart</h1>
      <div className="container p-0 m-0 row overflow-hidden">
  
        {/* List Items */}
        <div className="col-12 col-lg-8 p-0">
          <ul className="p-0 pe-5">
            {
              Array.isArray(cart) ? (
                cart.map((e, i) => {
                  return (
                    <li className="d-flex align-items-center justify-content-between border-2 border-bottom" key={i}>
                      <button
                        type="button"
                        className="fs-3 text-red-500 ms-4 text-center btn btn-outline-none"
                        onClick={() => removeFromCart(e.id)}
                      >
                        <h2>
                          <IoTrashBinSharp />
                        </h2>
                      </button>
                      <div style={{ width: 140, height: 140}} className="bg-warning overflow-hidden transition">
                        <img
                          src={e.image}
                          alt="Image"
                          className="w-100 h-100 object-fit-cover"
                        />
                      </div>
                      <h2 className="fs-5 text-limit-1 w-50 d-flex justify-content-center">{e.name}</h2>
                      <h2 className="fs-5 w-25">{e.price}</h2>
                      <div className="d-flex h-100 align-items-center justify-content-between w-25">
                        <button
                          type="button"
                          style={{ height: 50 }}
                          className="btn fw-bold fs-3 btn-info btn-outline-none text-light"
                          onClick={() => decreaseQty(e.id)}
                        >-</button>
                        <h2 className="mx-2 fs-5">{e.quantity}</h2>
                        <button
                          type="button"
                          style={{ height: 50 }}
                          className="btn fw-bold fs-3 btn-info btn-outline-none text-light"
                          onClick={() => increaseQty(e.id)}
                        >+</button>
                      </div>
                    </li>
                  )
                })
              ) : (
                <p className="fs-3 text-center">Your cart is empty</p>
              )
            }
          </ul>
        </div>

        {/* Summary */}
        <div style={{ height: 400 }} className="col-12 col-lg-4 p-0 border shadow">
          <div className="w-100 container-fluid p-4 bg-blue-400">
            <h2>Summary</h2>
            <div className="w-100 mb-3 d-flex justify-content-between align-items-center">
              <p>Subtotal</p>
              <p>99.9$</p>
            </div>
            <div className="w-100 mb-3 d-flex justify-content-between align-items-center">
              <p>Shipping</p>
              <p>19.9$</p>
            </div>
            <div className="w-100 mb-3 d-flex justify-content-between align-items-center">
              <h2>Total</h2>
              <h2>129.9$</h2>
            </div>
            <input
              type="text"
              placeholder="Enter coupons code here"
              className="w-75 my-5"
              style={{ height: 50 }}
            />
            <button className="btn mb-4 btn-info w-75 rounded-0 d-flex mx-auto justify-content-center align-items-center fs-4 fw-bold text-light">
              <BsCart4 className="me-2" />
              Check Out
            </button>

          </div>

        </div>

      </div>
    </div>
  )
}

export default CartPage