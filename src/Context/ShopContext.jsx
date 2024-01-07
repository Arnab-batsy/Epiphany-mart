import React, { createContext } from "react";
//Creating Context using Context API
//To have a state that is accessible to more than one components.
//Pass the states from the parent component

import all_product from '../Components/Assets/all_product.js'

export const ShopContext= createContext(null);
const ShopContextProvider= (props)=>{
const ContextValue= {all_product};
return (
    <ShopContext.Provider value={ContextValue}>
        {props.children}
    </ShopContext.Provider>
)
}
export default ShopContextProvider;