import { useCart } from '../context/CartContext'
import { FaClipboardList, FaRegTrashAlt } from 'react-icons/fa';
import Button from '../components/common/Button';
import { TbTruckDelivery } from 'react-icons/tb';
import { IoBag } from 'react-icons/io5';
import { useUser } from '@clerk/clerk-react';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import ani2 from '../assets/ani2.json';
import { useNavigate } from 'react-router-dom';


const Cart = ({ getLocation, location }) => {
  const { cartItem, removeFromCart, addToCart, removeProductQuantity } = useCart();
  const { user } = useUser();
  const { setTotalAmount } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    state: "",
    postCode: "",
    country: "",
    mobile: "",
  });

  // Prefill user and location
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      fullName: user?.fullName || "",
      address: location ? `${location.city_district}, ${location.city}` : "",
      state: location?.state || "",
      postCode: location?.postcode || "",
      country: location?.country || "",
    }));
  }, [user, location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid = Object.values(formData).every(value => value.trim() !== "");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // submit logic here
  };


  // calculating total price of product 
  let allItemPrice = cartItem?.map(item => item.quantity * item.price)
  const totalPrice = allItemPrice.reduce((acc, curr) => {
    return acc + curr
  }, 0)

  // product quantity 
  const quantity = cartItem.reduce((total, item) => (
    total + item.quantity), 0);

  //delivery charge
  const deliveryCharge = quantity > 0 ? quantity * 25 : 0;

  // handeling charge total
  const handlingCharge = quantity > 0 ? quantity * 5 : 0;

  // calculate grand total 
  const grandTotal = (totalPrice + handlingCharge).toFixed(2);

  useEffect(() => {
    setTotalAmount(grandTotal);
  }, [cartItem]);


  return (
    <div className="mt-10 flex items-center justify-center max-w-6xl mx-4 md:mx-24 mb-5">
      {cartItem.length > 0 ? (
        <div className="w-full">
          <h1 className="font-bold text-xl md:text-2xl text-center md:text-left">
            My Cart ({cartItem.length})
          </h1>

          <div className="flex flex-col justify-center">
            {/* cart items */}
            <div className="mt-6 md:mt-10 space-y-4">
              {cartItem.map((product, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 md:p-5 rounded-md grid grid-cols-1 md:grid-cols-2 justify-between w-full gap-4 md:gap-0"
                >
                  {/* product image + details */}
                  <div className="flex justify-start items-center gap-3 md:gap-4 w-full md:w-auto">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-20 h-20 rounded-md object-cover"
                    />

                    <div className="flex flex-col">
                      <h1 className="w-[200px] md:w-[300px] line-clamp-2 text-sm md:text-base">
                        {product.title}
                      </h1>
                      <p className="text-lg font-semibold text-red-500">
                        ${product.price}
                      </p>
                    </div>
                  </div>

                  <div className='flex justify-between items-center'>
                    {/* quantity controls */}
                    <div className="flex   rounded-md items-center font-bold">
                      <button
                        onClick={() => removeProductQuantity(product.id)}
                        className="cursor-pointer bg-gray-300 hover:bg-gray-400 transition-all text-lg md:text-2xl text-center rounded-l-md px-4 md:px-3 py-2 md:py-0.5 active:bg-gray-300"
                      >
                        -
                      </button>

                      <p className="text-base md:text-xl py-2.5 md:py-1 px-2 md:px-3 bg-gray-300">
                        {product.quantity}
                      </p>

                      <button
                        onClick={() => addToCart(product)}
                        className="cursor-pointer py-2 md:py-0.5 bg-gray-300 text-lg md:text-2xl px-4 md:px-3 rounded-r-md hover:bg-gray-400 active:bg-gray-300"
                      >
                        +
                      </button>
                    </div>

                    {/* remove button */}
                    <button
                      className="p-2  md:p-3 hover:bg-white transition-all cursor-pointer rounded-full"
                      onClick={() => {
                        removeFromCart(product.id), window.scrollTo(0, 0);
                      }}
                    >
                      <FaRegTrashAlt className="text-2xl text-red-500 cursor-pointer" />
                    </button>
                  </div>


                </div>
              ))}
            </div>

            {/* delivery form + bill details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mb-12 items-start">
              {/* form */}
              <form
                onSubmit={handleSubmit}
                className="bg-gray-100 flex flex-col justify-center rounded-md p-5 md:p-7 mt-6 space-y-2  pb-10"
              >
                <h1 className="text-gray-800 font-bold text-lg md:text-xl">
                  Delivery Info
                </h1>

                {/* inputs */}
                <div className="flex flex-col space-y-1 mt-2">
                  <label className="text-sm md:text-md">Full Name</label>
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    type="text"
                    placeholder="Enter your name"
                    className="px-3 py-1.5 rounded-md border border-gray-300 bg-white focus:outline-none text-sm md:text-base"
                  />
                </div>

                <div className="flex flex-col space-y-1">
                  <label className="text-sm md:text-md">Address</label>
                  <input
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    type="text"
                    placeholder="Your address"
                    className="px-3 py-1.5 rounded-md border border-gray-300 bg-white focus:outline-none text-sm md:text-base"
                  />
                </div>

                {/* state + post code */}
                <div className="flex flex-col md:flex-row w-full gap-3 md:gap-5">
                  <div className="flex flex-col space-y-1 w-full">
                    <label className="text-sm md:text-md">State</label>
                    <input
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      type="text"
                      placeholder="State"
                      className="px-3 py-1.5 rounded-md border border-gray-300 bg-white focus:outline-none text-sm md:text-base"
                    />
                  </div>
                  <div className="flex flex-col space-y-1 w-full">
                    <label className="text-sm md:text-md">Post Code</label>
                    <input
                      name="postCode"
                      value={formData.postCode}
                      onChange={handleChange}
                      required
                      type="number"
                      placeholder="Post Code"
                      className="px-3 py-1.5 rounded-md border border-gray-300 bg-white focus:outline-none text-sm md:text-base"
                    />
                  </div>
                </div>

                {/* country + mobile */}
                <div className="flex flex-col md:flex-row w-full gap-3 md:gap-5">
                  <div className="flex flex-col space-y-1 w-full">
                    <label className="text-sm md:text-md">Country</label>
                    <input
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      type="text"
                      placeholder="Country"
                      className="px-3 py-1.5 rounded-md border border-gray-300 bg-white focus:outline-none text-sm md:text-base"
                    />
                  </div>

                  <div className="flex flex-col space-y-1 w-full">
                    <label className="text-sm md:text-md">Mobile no.</label>
                    <input
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      type="number"
                      placeholder="Mobile no."
                      className="px-3 py-1.5 rounded-md border border-gray-300 bg-white focus:outline-none text-sm md:text-base"
                    />
                  </div>
                </div>

                {/* detect location */}
                <div className="flex justify-center items-center mt-4">
                  <p className="text-xs md:text-sm">----------OR----------</p>
                </div>
                <div className="flex justify-center items-center mt-2">
                  <Button
                    onClick={getLocation}
                    className="mb-1 rounded-md px-4 md:px-5 py-1.5 text-sm md:text-base"
                    text="Detect Location"
                  />
                </div>

                {/* submit */}
                {/* <div>
                  <Button
                    type="submit"
                    className="mt-6 mb-1 rounded-md px-5 py-1.5 text-sm md:text-base"
                    text="Submit"
                  />
                </div> */}
              </form>

              {/* bill details */}
              <div className="flex flex-col mt-6 rounded-md bg-white shadow-xl h-auto py-4 px-5 md:px-8  pb-8">
                <h1 className="font-bold text-lg md:text-xl">Bill Details</h1>

                <div className="flex justify-between mt-3 text-sm md:text-base">
                  <h3 className="flex items-center gap-2">
                    <FaClipboardList className="text-gray-600" />Total Item (
                    {cartItem.length})
                  </h3>
                  <p className="font-semibold">${totalPrice}</p>
                </div>

                <div className="flex justify-between mt-3 text-sm md:text-base">
                  <h3 className="flex items-center gap-2">
                    <MdProductionQuantityLimits className="text-gray-600" />
                    Quantity
                  </h3>
                  <p className="font-semibold">{quantity}</p>
                </div>

                <div className="flex justify-between mt-3 text-sm md:text-base">
                  <h3 className="flex items-center gap-2">
                    <TbTruckDelivery className="text-gray-600" />
                    Delivery Charge
                  </h3>
                  <p className="space-x-2">
                    <span className="line-through font-semibold">
                      ${deliveryCharge}
                    </span>
                    <span className="text-red-500 font-semibold uppercase">
                      FREE
                    </span>
                  </p>
                </div>

                <div className="flex justify-between mt-3 text-sm md:text-base">
                  <h3 className="flex items-center gap-2">
                    <IoBag className="text-gray-600" />
                    Handling Charge
                  </h3>
                  <p className="font-semibold text-red-500">${handlingCharge}</p>
                </div>

                <div className="h-[1px] bg-gray-200 mt-4"></div>

                <div className="flex justify-between mt-1 text-sm md:text-base">
                  <h3 className="flex items-center gap-2 font-bold">Grand Total</h3>
                  <p className="font-semibold">${grandTotal}</p>
                </div>

                <h1 className="mt-5 text-sm md:text-md">Apply Promo Code</h1>

                <div className="flex flex-col sm:flex-row justify-between items-center mt-2 gap-2">
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="border border-gray-300 rounded-md py-1.5 w-full px-3 placeholder:text-sm outline-none uppercase text-sm md:text-base"
                  />
                  <button className="px-4 py-1.5 rounded-md bg-gray-100 cursor-pointer hover:bg-gray-200 transition-all border border-gray-300 text-sm md:text-base">
                    Apply
                  </button>
                </div>

                <Button
                  onClick={() => {
                    if (isFormValid) {
                      navigate("/checkout");
                      window.scrollTo(0, 0);
                    }
                  }}
                  disabled={!isFormValid}
                  text={isFormValid ? "Proceed to Checkout" : "Please Fill Delivery details"}
                  className={`mt-5 rounded-md py-2 font-semibold text-sm md:text-base transition-all ${!isFormValid
                      ? "bg-gray-300 cursor-not-allowed opacity-50"
                      : "bg-orange-500 hover:bg-orange-600 text-white shadow-md"
                    }`}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        // empty cart
        <div className="flex flex-col justify-center items-center w-full md:h-[330px] md:w-[900px] mt-10 md:mb-28 text-center">
          <Lottie
            animationData={ani2}
            className="w-[220px] h-[220px] md:w-[300px] md:h-[300px]"
            loop={true}
          />
          <h1 className="font-bold text-xl md:text-2xl text-red-500">
            Oh! no, Your Cart is Empty
          </h1>
          <Button
            onClick={() => navigate("/products")}
            text={"Shop Now"}
            className={"rounded-md mt-6 py-2 px-6 text-sm md:text-base"}
          />
        </div>
      )}
    </div>

  )
}

export default Cart