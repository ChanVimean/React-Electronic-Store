import { Outlet } from "react-router-dom"
import BottomBar from "./components/BottomBar"
import Footer from "./components/Footer"
import Header from "./components/Header"


const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>

      <BottomBar />
    </>
  )
}

export default App
