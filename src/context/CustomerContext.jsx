import { createContext, useContext, useEffect } from "react";
import { BehaviorSubject } from "rxjs";




const customerContext  = createContext({
    addToCart: (item) => {},
    getCartItems: ()=> {}
});

export function CustomerContextProvider(props){
    let cartItemList = new BehaviorSubject([]);


    function addToCart(product) {
        cartItemList.next([...cartItemList, product]);
    }

    function getCartItems(product) {
        return cartItemList;
    }


    const context = {
        addToCart: addToCart,
        getCartItems: getCartItems
    }
}


