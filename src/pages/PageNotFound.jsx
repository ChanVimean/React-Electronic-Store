import { useNavigate } from "react-router-dom"

const PageNotFound = () => {

  const navigation = useNavigate()
  const handleHomePage = () => {
    navigation('/')
  }

  return (
    <div style={{ height: "100vh", width: "100%" }} className="text-center position-relative">
      <div className="position-absolute z-1 w-100 h-100">
        <img 
          src="https://freefrontend.com/assets/img/html-funny-404-pages/HTML-404-Page.gif"
          alt="404"
          className="w-100 h-100 object-fit-cover"
        />
      </div>
      <button
        className="btn bg-blue-700 text-light fs-3 bg-hover-blue-500 position-absolute z-2 top-50 start-50 translate-middle"
        onClick={handleHomePage}
      >
        Go Back
      </button>
    </div>
  )
}

export default PageNotFound
