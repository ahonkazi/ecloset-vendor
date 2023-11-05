import { createContext, useState } from "react";

export const GetProductcontext = createContext();
export const ProductContext = ({ children }) => {
    const [productAddModalStatus, setProductAddModalStatus] = useState(false);
    return (
        <GetProductcontext.Provider value={{ productAddModalStatus, setProductAddModalStatus }}>{children}</GetProductcontext.Provider>
    )
}