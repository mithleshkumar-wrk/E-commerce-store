import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0)
   

    useEffect(()=>{
        localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
    },[totalAmount])

    // console.log("total amount in cart",totalAmount)
    // // it will run when app is load 
    // useEffect(() => {
    //     try {
    //         const saveCart = localStorage.getItem("cart");
    //         if (saveCart) {
    //             const parsedCart = JSON.parse(saveCart);
    //             setCartItem(Array.isArray(parsedCart) ? parsedCart : []);
    //         }
    //     } catch (error) {
    //         console.log("Error parsing cart from localStorage:", error);
    //         setCartItem([]);
    //     }
    // }, []);

    // // save cart to local storage
    // useEffect(() => {
    //     localStorage.setItem("cart", JSON.stringify(cartItem));
    // }, [cartItem]);

    const addToCart = (product, selectedQuantity = 1) => {
        const itemInCart = cartItem.find((item) => item.id === product.id)
        if (itemInCart) {
            const updatedCart = cartItem.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + Number(selectedQuantity) } : item);
            setCartItem(updatedCart);

            toast.success("Product quantity increased!")

        } else {

            setCartItem([...cartItem, { ...product, quantity: Number(selectedQuantity) }])

            toast.success("Item is added to cart")
        }
    };

    const removeFromCart = (id) => {
        const newCart = cartItem.filter(item => item.id !== id);
        setCartItem(newCart);
        toast.error("Product deleted successfully")
    };

    const removeProductQuantity = (id) => {
        setCartItem((prevItem) => prevItem.map((item) =>
            item.id === id ?
                item.quantity > 1 ?
                    { ...item, quantity: item.quantity - 1 } :
                    null : item)
            .filter(Boolean))
        toast.error("Quantity decreased successfully!")
    }

 

    return (
        <CartContext.Provider value={{ cartItem, setCartItem, addToCart, removeFromCart, removeProductQuantity,setTotalAmount }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext); 