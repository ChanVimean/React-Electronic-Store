import { useState } from "react"
import { NavLink } from "react-router-dom"


const Card = () => {

  
  const [isHover, setIsHover] = useState(false)
  const handleMouseEnter = () => setIsHover(true)
  const handleMouseLeave = () => setIsHover(false)

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
        <div className="col-12 col-md-4 col-lg-3">
          <div className="card rounded-0" onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div style={{ height: 280 }} className="overflow-hidden w-100 bg-info position-relative">
              <div className={`position-absolute top-50 start-50 translate-middle transition ${isHover ? 'opacity-1 z-3' : 'opacity-0'}`}>
                <button>H</button>
                <button>H</button>
                <button>H</button>
                <button>H</button>
              </div>
              <img src="https://www.pcgamesn.com/wp-content/sites/pcgamesn/2024/11/nvidia-geforce-rtx-5070-ti-guide.jpg"
                   alt="Image"
                   className={`w-100 h-100 object-fit-cover transition ${isHover ? 'scale z-1' : ''}`}
              />
            </div>
            <div className="text-center shadow-sm card-body font-poppins">
              <NavLink className="text-black hover-blue-300 text-decoration-none fs-5">
                Product Name
              </NavLink>
              <p className="m-0">$9.99</p>
              <p>
                <span className="text-warning fw-bold">4.5</span>
                Rating
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Card
