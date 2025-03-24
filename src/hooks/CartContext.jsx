import { useContext, createContext, useEffect, useState } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  

  const updateCartQuantity = (products) => {
    const totalQuantity = products.reduce((acc, product) => acc + product.quantity, 0);
    setCartQuantity(totalQuantity);
  };

  const putProductInCart = (product) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);

    let newProductsInCart = [];

    if (cartIndex >= 0) {
      newProductsInCart = cartProducts.map((prd) =>
        prd.id === product.id
          ? { ...prd, quantity: prd.quantity + 1 }
          : prd
      );
    } else {
      newProductsInCart = [...cartProducts, { ...product, quantity: 1 }];
    }

    setCartProducts(newProductsInCart);
    updateLocalStorage(newProductsInCart);
    updateCartQuantity(newProductsInCart);
  };

  const clearCart = () => {
    setCartProducts([]);
    updateLocalStorage([]);
    updateCartQuantity([]);
  };

  const deleteProduct = (productId) => {
    const newCart = cartProducts.filter((prd) => prd.id !== productId);

    setCartProducts(newCart);
    updateLocalStorage(newCart);
    updateCartQuantity(newCart);
  };

  const increaseProduct = (productId) => {
    const newCart = cartProducts.map((prd) =>
      prd.id === productId
        ? { ...prd, quantity: prd.quantity + 1 }
        : prd
    );

    setCartProducts(newCart);
    updateLocalStorage(newCart);
    updateCartQuantity(newCart);
  };

  const decreaseProduct = (productId) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === productId);

    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map((prd) =>
        prd.id === productId
          ? { ...prd, quantity: prd.quantity - 1 }
          : prd
      );

      setCartProducts(newCart);
      updateLocalStorage(newCart);
      updateCartQuantity(newCart);
    } else {
      deleteProduct(productId);
    }
  };

  const updateLocalStorage = (product) => {
    localStorage.setItem("devburguer:cartInfo", JSON.stringify(product));
  };

  useEffect(() => {
    const clientCartData = localStorage.getItem("devburguer:cartInfo");

    if (clientCartData) {
      const parsedCart = JSON.parse(clientCartData);
      setCartProducts(parsedCart);
      updateCartQuantity(parsedCart);
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartQuantity,
        cartProducts,
        putProductInCart,
        clearCart,
        deleteProduct,
        increaseProduct,
        decreaseProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
