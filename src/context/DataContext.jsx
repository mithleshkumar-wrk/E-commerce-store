import axios from "axios";
import {createContext, useContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const [data, setData] = useState()

    // fetching all products 
    const fetchAllProducts = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.in/api/products?limit=150')
            const { data } = response;
            setData(data.products);
            
        } catch (error) {
            console.log(error)
        }
    }

    const getUniqueCategory = (data, property) => {
        let newVal = data?.map((item) => {
            return item[property];
        });
        newVal = ["All",...new Set(newVal)];
        return newVal;
    }

    const categoryOnlyData = getUniqueCategory(data, "category");
    const brandOnlyData = getUniqueCategory(data, "brand");

    return (
        <DataContext.Provider value={{ data, setData, fetchAllProducts, categoryOnlyData, brandOnlyData }}>
            {children}
        </DataContext.Provider>
    )
}

export const useGetData = ()=> useContext(DataContext);

