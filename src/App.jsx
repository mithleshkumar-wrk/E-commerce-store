import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import PageNotFound from './pages/PageNotFound'
import axios from 'axios'
import Footer from './components/Footer'
import SingleProduct from './pages/SingleProduct'
import CategoryProducts from './pages/CategoryProducts'
import { useCart } from './context/CartContext'
import Protected from './components/common/Protected'
import Checkout from './pages/Checkout'

const App = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [location, setLocation] = useState('');

  const { cartItem, setCartItem } = useCart();
  


  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;

        let url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`

        try {
          const location = await axios.get(url);
          const exactLocation = location.data.address;
          setLocation(exactLocation);
          setOpenDropdown(false);
        } catch (error) {
          console.log(error);
        }
      },
      (error) => {
        console.log("error in getting position", error);
      }
    )
  }

  useEffect(() => {
    getLocation()
  }, [])

  // get cart item from local storage
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItem");
    // console.log("before parse data", storedCart);

    if (storedCart && storedCart !== "[]") {
      try {
        const parsed = JSON.parse(storedCart);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setCartItem(parsed);
          // console.log("CartItem from local storage", parsed);
        }
      } catch (err) {
        console.error("Error parsing stored cart:", err);
      }
    }
  }, []);

  // save cart item into local storage
  useEffect(() => {
    if (Array.isArray(cartItem)) {
      localStorage.setItem("cartItem", JSON.stringify(cartItem));
    }
  }, [cartItem]);


  return (
    <>
      <BrowserRouter>
        <Navbar location={location} getLocation={getLocation} setOpenDropdown={setOpenDropdown} openDropdown={openDropdown} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<SingleProduct />} />

          <Route element={<Protected />}>
            <Route path='/cart' element={<Cart getLocation={getLocation} location={location} />} />
            <Route path='/checkout' element={<Checkout/>}/>
          </Route>

          <Route path='/category/:category' element={<CategoryProducts />} />

          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App