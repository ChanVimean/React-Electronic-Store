import { useNavigate } from "react-router-dom"

const PageNotFound = () => {

  const navigation = useNavigate()
  const handleHomePage = () => {
    navigation('/')
  }

  return (
    <div className="text-center w-100 vh-100">
      <img 
        src="https://i.pinimg.com/originals/0e/c0/db/0ec0dbf1e9a008acb9955d3246970e15.gif" 
        alt="404"
      />
      <br />
      <button
        className="my-5 bg-blue-700 btn text-light fs-3 bg-hover-blue-500"
        onClick={handleHomePage}
      >
        Go Back
      </button>
    </div>
  )
}

export default PageNotFound
