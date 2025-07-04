import { createContext, useState, useEffect, useContext } from 'react'

export const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        const cartItems = localStorage.getItem("cartItems");
        if (cartItems) {
            setCartItems(JSON.parse(cartItems));
        }
    }, []);

    const findItemCart = (item) => {
        return cartItems.find((cartItem) => cartItem.id === Number(item.id));
    }
    const addToCart = (item) => {
        const findItem = findItemCart(item);

        if (findItem) {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
                )
            );
            console.log("Producto sumado");

        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
            console.log("Producto agregado");
        }
    };

    const removeFromCart = (item) => {
        const findItem = findItemCart(item);
        console.log(findItem);
        
        const itemQuantity = Number(findItem.quantity);
        if (findItem && itemQuantity === 1) {
            setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
        } else {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.id === item.id ? { ...cartItem, quantity: itemQuantity - 1 } : cartItem
                )
            );
        }
    };
    const addMultipleToCart = (product, value) => {
        const valueToNum = Number(value)
        if (valueToNum > 0) {
            const findItem = findItemCart(product);
            if (findItem) {
                console.log(valueToNum);
                setCartItems(
                    cartItems.map((cartItem) =>
                        cartItem.id === product.id
                            ? { ...cartItem, quantity: Number(valueToNum) }
                            : cartItem
                    )
                );
            } else {
                setCartItems([...cartItems, { ...product, quantity: Number(valueToNum) }]);
                console.log(valueToNum);

                console.log("Producto agregado");
            }
        }else if(valueToNum <= 0){
            removeFromCart(product)
        }

    }

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const countItems = () => {
        let items = 0;
        cartItems.forEach(e => {
            items += Number(e.quantity)
        });

        return items
    }


    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, getCartTotal, countItems, findItemCart, addMultipleToCart }}>
            {children}
        </CartContext.Provider>
    );




}




