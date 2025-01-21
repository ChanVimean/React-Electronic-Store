import { TiTick } from "react-icons/ti"
import SwiperEffect from "../components/SwiperEffect"
import { IoCar } from "react-icons/io5"
import { RxLoop } from "react-icons/rx"
import { FaClockRotateLeft } from "react-icons/fa6"
import Card from "../components/Card"

const Home = () => {
  return (
    <div className="p-0 container-fluid">
      <div className="container p-0">

        {/* Special Offer */}
        <div className="m-0 row justify-content-between">
          <div style={{ height: 500 }} className="p-0 mt-4 mt-lg-0 col-lg-8 py-lg-4 pe-lg-4">
            <div className="bg-blue-200 w-100 h-100">
              <SwiperEffect />
            </div>
          </div>
          <div style={{ height: 500 }} className="p-0 overflow-hidden col-lg-4 py-lg-4">
            <div className="p-0 overflow-hidden container-fluid w-100 h-100">

              <div className="mt-4 mb-3 overflow-hidden mt-lg-0 col-12 h-50 position-relative">
                <div className="text-center position-absolute z-3 top-50 start-50 translate-middle text-light font-poppins">
                  <p className="m-0 fs-6">Save 80%</p>
                  <h4 className="m-0 fw-medium">Special Offer</h4>
                  <button className="px-4 mt-3 btn btn-outline-light rounded-0">
                    Show Now
                  </button>
                </div>
                <img
                  src="https://www.hardwarezone.com.sg/thumbs/711483/b.jpg?d5be"
                  alt="Image"
                  style={{ filter: "brightness(50%)" }}
                  className="transition w-100 h-100 object-fit-cover hover-scale"
                />
              </div>
              <div className="mt-4 overflow-hidden col-12 h-50 position-relative">
                <div className="text-center position-absolute z-3 top-50 start-50 translate-middle text-light font-poppins">
                  <p className="m-0 fs-6">Save 50%</p>
                  <h4 className="m-0 fw-medium">Limited Edition</h4>
                  <button className="px-4 mt-3 btn btn-outline-light rounded-0">
                    Show Now
                  </button>
                </div>
                <img
                  src="https://i.extremetech.com/imagery/content-types/06ffqsz8z6ULBkUov4LlQnb/hero-image.fit_lim.v1723569071.jpg"
                  alt="Image"
                  style={{ filter: "brightness(50%)" }}
                  className="transition w-100 h-100 object-fit-cover hover-scale"
                />
              </div>

            </div>

          </div>
        </div>

        {/* Services */}
        <div className="py-4 mx-0 mb-5 row py-lg-0 font-poppins">

          <div className="px-3 py-3 col-12 col-md-6 col-lg-3 pe-md-3 ps-md-0">
            <div className="px-2 py-4 shadow d-flex justify-content-center align-items-center">
              <TiTick
                style={{ fontSize: "60px" }}
                className="text-blue-700"
              />
              <h1 className="mb-0 fs-4 ms-2">Quality Product</h1>
            </div>
          </div>
          <div className="px-3 py-3 col-12 col-md-6 col-lg-3 pe-md-3 ps-md-0">
            <div className="px-2 py-4 shadow d-flex justify-content-center align-items-center">
              <IoCar
                style={{ fontSize: "60px" }}
                className="text-blue-700"
              />
              <h1 className="mb-0 fs-4 ms-2">Fast Delivery</h1>
            </div>
          </div>
          <div className="px-3 py-3 col-12 col-md-6 col-lg-3 pe-md-3 ps-md-0">
            <div className="px-2 py-4 shadow d-flex justify-content-center align-items-center">
              <RxLoop
                style={{ fontSize: "60px" }}
                className="text-blue-700"
              />
              <h1 className="mb-0 fs-4 ms-2">14-Day Return</h1>
            </div>
          </div>
          <div className="px-3 py-3 col-12 col-md-6 col-lg-3 pe-lg-0 ps-md-0">
            <div className="px-2 py-4 shadow d-flex justify-content-center align-items-center">
              <FaClockRotateLeft
                style={{ fontSize: "60px" }}
                className="text-blue-700"
              />
              <h1 className="mb-0 fs-4 ms-2">24/h Support</h1>
            </div>
          </div>

        </div>

        {/* Categories */}
        <div className="py-4 mx-0 mb-4 row justify-content-center py-lg-0 g-3 font-poppins">
          <div className="p-0 row align-items-center">
            <div className="col-12 col-lg-3">
              <h1 className="mb-0">Categories</h1>
            </div>
            <div className="col-12 col-lg-9">
              <hr style={{ border: "1px dashed grey" }} />
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 ps-md-0 py-lg-3 pe-lg-3">
            <div className="transition shadow d-flex align-items-center justify-content-between bg-hover">
              <div style={{ height: 100, width: 120 }} className="overflow-hidden col-4 bg-success">
                <img 
                  src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16lN4?ver=46fe&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true" 
                  alt="Product"
                  className="transition w-100 h-100 object-fit-cover hover-scale"
                />
              </div>
              <div className="col-8 ps-2">
                <h1 className="fs-6">Laptop</h1>
                <p className="m-0">100 products</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 ps-md-0 py-lg-3 pe-lg-3">
            <div className="transition shadow d-flex align-items-center justify-content-between bg-hover">
              <div style={{ height: 100, width: 120 }} className="overflow-hidden col-4 bg-success">
                <img 
                  src="https://i.ytimg.com/vi/GEjya4OPqNs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLByU3-2q2wH0QLz6BIhypRLEipoIg" 
                  alt="Product"
                  className="transition w-100 h-100 object-fit-cover hover-scale"
                />
              </div>
              <div className="col-8 ps-2">
                <h1 className="fs-6">Accessories</h1>
                <p className="m-0">100 products</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 ps-md-0 py-lg-3 pe-lg-3">
            <div className="transition shadow d-flex align-items-center justify-content-between bg-hover">
              <div style={{ height: 100, width: 120 }} className="overflow-hidden col-4 bg-success">
                <img 
                  src="https://i.pcmag.com/imagery/articles/06LiQJzDE1OdJcUdbgqwz1X-15.v_1569470572.jpg" 
                  alt="Product"
                  className="transition w-100 h-100 object-fit-cover hover-scale"
                />
              </div>
              <div className="col-8 ps-2">
                <h1 className="fs-6">PC Components</h1>
                <p className="m-0">100 products</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 ps-md-0 py-lg-3 pe-lg-0">
            <div className="transition shadow d-flex align-items-center justify-content-between bg-hover">
              <div style={{ height: 100, width: 120 }} className="overflow-hidden col-4 bg-success">
                <img 
                  src="https://cdn.mos.cms.futurecdn.net/GXHa4PWwDPx7tGQG9MDQvK.jpg" 
                  alt="Product"
                  className="transition w-100 h-100 object-fit-cover hover-scale"
                />
              </div>
              <div className="col-8 ps-2">
                <h1 className="fs-6">Camera</h1>
                <p className="m-0">100 products</p>
              </div>
            </div>
          </div>

        </div>

        <Card/>

      </div>
    </div>
  )
}


export default Home