import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import 'sass'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Product from './pages/Product.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import { ProductProvider } from './store/ProductProvider.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<App />}>
            <Route path={'/'} element={<Home />} />
            <Route path={'/product'} element={<Product />} />
          </Route>
          <Route path={'/*'} element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  </StrictMode>,
)
