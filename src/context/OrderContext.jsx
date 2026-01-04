import { createContext, useContext, useEffect, useState } from "react";


const OrderContext = createContext(null);

export const OrderProvider = ({ children }) => {

    const [orders, setOrders] = useState(() => {
        const stored = localStorage.getItem("orders");
        return stored ? (JSON.parse(stored)) : [];
    });

    useEffect(() => {
        localStorage.setItem("orders", JSON.stringify(orders));
    }, [orders]);



    const deleteOrder = (id) => {
        setOrders(prev => prev.filter(filterOrder => filterOrder.orderId !== id));
    }


    return (
        <OrderContext.Provider value={{ orders, setOrders, deleteOrder }}>
            {children}
        </OrderContext.Provider>
    )
}

export const useOrder = () => useContext(OrderContext);