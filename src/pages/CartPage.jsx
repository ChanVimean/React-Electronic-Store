import { useContext } from "react"
import ProductContext from "../store/ProductProvider"
import { FaTrashAlt } from "react-icons/fa"


const CartPage = () => {

  const { cart, removeFromCart, increaseQty, decreaseQty } = useContext(ProductContext)

  return (
    <div className="container text-center font-poppins">
      <h1 className="my-4 fw-bold text-blue-700">Shopping Cart</h1>
      <div className="container p-0 row overflow-hidden">
  
        <div className="col-12 col-lg-8 p-0">
          <ul className="p-0 pe-5">
            {
              Array.isArray(cart) ? (
                cart.map((e, i) => {
                  return (
                    <li className="d-flex align-items-center justify-content-between border-2 border-bottom" key={i}>
                      <div style={{ width: 140, height: 140}} className="bg-warning overflow-hidden">
                        <img
                          src={e.image}
                          alt="Image"
                          className="w-100 h-100 object-fit-cover"
                        />
                      </div>
                      <h2 className="fs-3 text-limit-1 w-50 text-center">{e.name}</h2>
                      <h2 className="fs-3 w-25">{e.price}</h2>
                      <div className="d-flex h-100 align-items-center justify-content-between w-25">
                        <button
                          type="button"
                          style={{ height: 50 }}
                          className="btn fw-bold fs-3 btn-info btn-outline-none text-light"
                          onClick={() => decreaseQty(e.id)}
                        >-</button>
                        <h2 className="mx-2 fs-3">{e.quantity}</h2>
                        <button
                          type="button"
                          style={{ height: 50 }}
                          className="btn fw-bold fs-3 btn-info btn-outline-none text-light"
                          onClick={() => increaseQty(e.id)}
                        >+</button>
                      </div>
                      <button
                        // type="button"
                        className="fs-3 text-danger ms-4 text-center btn btn-outline-none"
                        onClick={() => removeFromCart(e.id)}
                      >
                        <h2>
                          <FaTrashAlt />
                        </h2>
                      </button>
                    </li>
                  )
                })
              ) : (
                <p className="fs-3 text-center">Your cart is empty</p>
              )
            }
          </ul>
        </div>

        <div className="col-12 col-lg-4 bg-danger p-0">
          test
        </div>

      </div>
    </div>
  )
}

export default CartPage