import React, { useEffect, useRef } from "react";
import styles from "../stylesheets/Cart.module.css";
import { useSelector } from "react-redux";
import { CartRootState } from "../redux/store";
import EmptyCart from "../assets/empty-cart.png";
import { useDispatch } from "react-redux";
import { CartDispatch } from "../redux/store";
import { removeItem } from "../redux/cartSlice";
import { useCartController } from "../context/cartControl";

const Cart: React.FC = () => {
  const { cart } = useSelector((state: CartRootState) => state.cart);

  const { setShowCart, showCart } = useCartController();
  const cartWrapperRef = useRef<HTMLDivElement>(null);
  const cartFooterRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch<CartDispatch>();

  useEffect(() => {
    if (showCart) {
      setTimeout(() => {
        cartWrapperRef.current?.classList.add("show");
        cartFooterRef.current?.classList.add("show");
      }, 0);
    }
  }, [showCart]);

  return (
    <>
      {showCart && (
        <section className={`${styles.cartSection}`}>
          <div
            className={`${styles.cartFooter} cartFooter`}
            ref={cartFooterRef}
          >
            <h2>Total Price</h2>
            <p className={``}>
              ${cart.reduce((sum, currentItem) => sum + currentItem.total, 0)}
            </p>
          </div>
          <div
            ref={cartWrapperRef}
            className={`${styles.cartWrapper} cartWrapper`}
          >
            <div className={`${styles.cartHeader} flex-and-align`}>
              <h2>Your Shopping Cart ({cart.length})</h2>

              <button
                onClick={() => {
                  document.body.classList.remove("scrollHidden");
                  cartWrapperRef.current?.classList.remove("show");
                  cartFooterRef.current?.classList.remove("show");
                  setTimeout(() => setShowCart(false), 300);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-x"
                >
                  <path d="M18 6l-12 12"></path>
                  <path d="M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            {cart.length ? (
              <>
                <div className={`${styles.cartContent}`}>
                  {cart.map((cartItem, i) => (
                    <div
                      key={`${cartItem.name}${i}`}
                      className={`${styles.cartItemBox}`}
                    >
                      <div>
                        <img
                          src={cartItem.imgs.img1}
                          alt={`${cartItem.name} image`}
                          className={`${styles.cartImgs}`}
                        />
                      </div>
                      <div>
                        <h2>
                          {cartItem.name}({cartItem.quantity})
                        </h2>

                        <div>
                          <p>Price: ${cartItem.price}</p>

                          <div
                            className="flex-and-align"
                            style={{
                              marginTop: "1rem",
                            }}
                          >
                            <p>Total: ${cartItem.total} </p>
                            <button
                              onClick={() => {
                                dispatch(removeItem(cartItem?.name));
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="tabler-icon tabler-icon-x"
                              >
                                <path d="M18 6l-12 12"></path>
                                <path d="M6 6l12 12"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div
                  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "90%",
                  }}
                  className="flex-and-align"
                >
                  <img src={EmptyCart} />
                  <p
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "600",
                      marginTop: "1rem",
                    }}
                  >
                    Your cart is empty{" "}
                  </p>
                </div>
              </>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default Cart;
