import { createContext, useEffect, useState } from "react"
import axios from "axios"

const ProductContext = createContext()

export const ProductProvider = ({ children }) => {

  const [product, setProduct] = useState([])

  const FetchAPI = async () => {
    try {
      const res = await axios.get("https://product-server-json.onrender.com/products")
      setProduct(res.data)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    } finally {
      console.log("Done")
    }
  }

  useEffect(() => { FetchAPI() }, [])

  return (
    <ProductContext.Provider value={{ product }}>
      { children }
    </ProductContext.Provider>
  )
}

export default ProductContext
