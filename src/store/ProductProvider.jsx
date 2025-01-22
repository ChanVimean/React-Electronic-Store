import { createContext, useEffect, useState } from "react"
import axios from "axios"

const ProductContext = createContext()

export const ProductProvider = ({ children }) => {

  const [product, setProduct] = useState([])
  const [cart, setCart ] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart")
      return savedCart ? JSON.parse(savedCart) : []
    } catch (err) {
      console.error("Fail to parse cart: ", err)
      return []
    }
  })

  const FetchAPI = async () => {
    try {
      const res = await axios.get("https://product-server-json.onrender.com/products")
      setProduct(res.data)
      console.log(res.data)
    } catch (error) {
      console.error("Error fetching product: ", error)
    } finally {
      console.log("Done")
    }
  }

  useEffect(() => { FetchAPI() }, [])

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  // Add to Cart
  const addToCart = (productId) => {
    // Find matching ID
    const productToAdd = product.find((item) => item.id === productId)

    if (productToAdd) {
      setCart((prevCart) => {
        // Check prevCart if not array
        if (!Array.isArray(prevCart)) {
          console.error("prevCart is not an array: ", prevCart)
          return []
        }

        // Check if product already exist
        const isProductInCart = prevCart.some((item) => item.id === productId)

        if (isProductInCart) {
          return prevCart.map((item) => item.id === productId ? {...item, quantity: item.quantity + 1} : item)
        }

        // Add new product to cart
        return [...prevCart, {...productToAdd, quantity: 1}]
      })
    }
  }

  // Remove from Cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
  }

  // Increase Quantity
  const increaseQty = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1}
          : item
      )
    )
  }

  // Decrease Quantity
  const decreaseQty = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) => item.id === productId
        ? {...item, quantity: Math.max(item.quantity - 1, 1)}
        : item
      )
    )
  }


  return (
    <ProductContext.Provider value={{ product, cart, addToCart, removeFromCart, increaseQty, decreaseQty }}>
      { children }
    </ProductContext.Provider>
  )
}

export default ProductContext
