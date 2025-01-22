import { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import ProductContext from "../store/ProductProvider"
import { FaCartArrowDown, FaHeart } from "react-icons/fa"
import { AiFillProduct } from "react-icons/ai"


const Card = () => {

  const {product, addToCart} = useContext(ProductContext)
  const [isHover, setIsHover] = useState(null)
  const handleMouseEnter = (index) => setIsHover(index)
  const handleMouseLeave = () => setIsHover(null)

  return (
    <div>

      <div className="p-0 row align-items-center" style={{ marginTop: 50 }}>
        <div className="col-12 col-md-4 col-lg-3">
          <h1 className="mb-0">Our Products</h1>
        </div>
        <div className="col-12 col-md-8 col-lg-9">
          <hr style={{ border: "1px dashed grey" }} />
        </div>
      </div>

      <div className="py-4 m-0 row">
        {
          product.map((e, i) => {
            return (
              <div className="col-12 col-md-4 col-lg-3 my-2" key={i}>
                <div className={`card rounded-0 ${isHover === i ? "focused" : ""} `}
                     onMouseEnter={() => handleMouseEnter(i)}
                     onMouseLeave={ handleMouseLeave }
                >
                  <div style={{ height: 280 }} className="overflow-hidden w-100 bg-info position-relative">
                    {/* Hidden Button */}
                    <div className={`position-absolute top-50 start-50 translate-middle transition ${isHover === i ? "opacity-1 z-3" : "opacity-0"}`}>
                      <button className="btn btn-light mx-1"
                        onClick={(event) => {
                          event.preventDefault()
                          addToCart(e.id)
                        }
                      }>
                        <FaCartArrowDown />
                      </button>
                      <button className="btn btn-light mx-1">
                        <FaHeart />
                      </button>
                      <button className="btn btn-light mx-1">
                        <AiFillProduct />
                      </button>
                    </div>
                    <img src={e.image}
                        alt="Image"
                        className={`w-100 h-100 object-fit-cover ${isHover === i ? 'scale z-1 brightness transition' : 'transition'}`}
                    />
                  </div>

                  {/* Card Body */}
                  <div className="text-center shadow-sm card-body font-poppins">
                    <NavLink className="text-black hover-blue-300 text-decoration-none fs-5 text-limit-1">
                      {e.name}
                    </NavLink>
                    <p className="m-0">{e.price.toFixed(2)}</p>
                    <p>
                      <span className="text-warning fw-bold">{e.rating}</span>
                      Rating
                    </p>
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>

    </div>
  )
}

export default Card
