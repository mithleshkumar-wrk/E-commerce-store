import React, { useEffect, useState } from 'react'
import { useCart } from '../context/CartContext'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useOrder } from '../context/OrderContext';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';

const Checkout = () => {
    const [totalAmount, setTotalAmount] = useState(0);
    const { cartItem, setCartItem } = useCart();
    const { setOrders } = useOrder();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();



    const payNow = async () => {
        try {
            setLoading(true);
            const { data: order } = await axios.post("https://my-backend-7m1i.onrender.com/create-order", { amount: totalAmount }
            );

            const options = {
                key: "rzp_test_Rz5XsCKWqnuP52",
                amount: order.amount,
                currency: "USD",
                order_id: order.id,
                name: "My E-Commerce",
                description: "Order Payment",
                prefill: {
                    name: "Test User",
                    email: "test@example.com",
                    contact: "9999999999"
                },

                handler: async (response) => {
                    const { data } = await axios.post("https://my-backend-7m1i.onrender.com/verify-payment", response);

                    if (data.success) {
                        const now = new Date().toISOString(); // same timestamp for all cart items

                        setOrders(prevOrders => [
                            ...prevOrders,
                            ...cartItem.map(item => ({
                                ...item,
                                orderId: nanoid(),   // ✅ unique ID
                                createdAt: now
                            }))
                        ]);


                        setCartItem([]);
                        localStorage.removeItem("cartItem");
                        alert("Payment Successful ✅");
                        toast.success("Order has Placed ☺️");
                        navigate("/orders")
                    }
                },
                theme: { color: "#3399cc" },
            };

            if (!window.Razorpay) {
                alert("Razorpay SDK not loaded");
                return;
            }

            new window.Razorpay(options).open();
           

        } catch (error) {

            alert("Payment failed");
            console.log(error)
        } finally {
            setLoading(false);
        }
    }



    useEffect(() => {
        const tAmount = localStorage.getItem("totalAmount");
        setTotalAmount(JSON.parse(tAmount));
    }, [])

    return (
        <div className="max-w-3xl mx-auto my-10 p-6 md:p-10 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
                Checkout
            </h2>

            {/* Cart Items */}
            <div className="mb-6">
                {cartItem.map((item, i) => (
                    <div
                        key={i}
                        className="flex justify-between items-center border-b border-gray-200 py-3"
                    >
                        <div className="flex items-center gap-3">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-16 h-16 md:w-20 md:h-20 rounded-md object-cover"
                            />
                            <p className="text-gray-700 font-medium line-clamp-2 md:text-base">
                                {item.name} × {item.quantity}
                            </p>
                        </div>
                        <p className="text-gray-900 font-semibold text-base md:text-lg">
                            ₹{item.price * item.quantity}
                        </p>
                    </div>
                ))}
            </div>

            {/* Total Amount */}
            <div className="flex justify-between items-center border-t border-b border-gray-200 py-4 mb-6">
                <span className="text-gray-700 font-medium text-lg">Total:</span>
                <span className="text-gray-900 font-bold text-xl">₹{totalAmount}</span>
            </div>

            {/* Pay Button */}
            <button
                disabled={loading || totalAmount === 0}
                onClick={payNow}
                className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold py-3 rounded-lg text-base md:text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading ? "Processing..." : `Pay ₹${totalAmount}`}
            </button>

            {/* Info */}
            <p className="mt-4 text-center text-sm text-gray-500">
                You will be redirected to Razorpay secure payment gateway.
            </p>
        </div>

    )
}

export default Checkout