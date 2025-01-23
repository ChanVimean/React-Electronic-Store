import Payment from "../components/Payment"
import Profile from "../components/Profile"

const Account = () => {

  return (
    <div className="container-fluid p-0 font-poppins">
      <div className="container p-0 row mx-auto">
        <Profile />
        <Payment />
      </div>
    </div>
  )
}

export default Account
