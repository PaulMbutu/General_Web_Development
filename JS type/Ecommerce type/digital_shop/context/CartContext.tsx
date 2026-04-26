"use client"
import { api } from "@/lib/api";
import { generateRandomString } from "@/lib/utils";
import { createContext, useContext, useEffect, useState } from "react";

interface CartContextProps{
    cartCode: string|null;
    cartItemsCount: number;
    setCartItemsCount: React.Dispatch<React.SetStateAction<number>>;
    clearCartCode: ()=> void
}

const CartContext = createContext<CartContextProps | null>(null);

export function CartProvider({children}:{children: React.ReactNode}){
    const [cartCode, setCartCode] = useState<string | null>(null)
    const [cartItemsCount, setCartItemsCount] = useState(0)

    useEffect(()=>{
        let code = localStorage.getItem("cartCode")
        if(!code){
            code = generateRandomString()
            localStorage.setItem("cartCode",code)
        }
        setCartCode(code)
    },[])

    useEffect(()=>{
        async function getCartItemsCount(){
            try {
                if(!cartCode){return}
                const response = await api.get(`get_cart_stat?cart_code=${cartCode}`);
                setCartItemsCount(response.data.num_of_items)
                return response.data;
            }
            catch(err:unknown){
                if(err instanceof Error){
                    throw new Error(err.message);
                }
                throw new Error("An unknown error occurred");
            }
        }
        getCartItemsCount()
    },[cartCode]);



    function clearCartCode(){
        localStorage.removeItem("cartCode")
        setCartCode(null)
    }

    return (
        <CartContext.Provider
        value={{cartCode, cartItemsCount, setCartItemsCount, clearCartCode}}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart(){
    const context = useContext(CartContext)
    if(!context) throw new Error("useCart must be used within a CartProvider")
    return context
}