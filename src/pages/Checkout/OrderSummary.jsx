import React from "react";
import { useAddress } from "../../contexts/address-context";
import { useCart } from "../../contexts/cart-context";
import "./checkout.css";

export const OrderSummary = () => {
  const {
    addressState: { addresses, selectedAddrId },
  } = useAddress();
  const { cartState } = useCart();
  const itemsPrice = cartState.cart.reduce(
    (acc, currVal) => acc + Number(currVal.price) * Number(currVal.quantity),
    0
  );
  const finalPrice = itemsPrice + 50;
  console.log("Item in cart", cartState.cart);
  const currentAddress = addresses?.find(
    (address) => address._id === selectedAddrId
  );

  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      toast.error("Razorpay SDK failed to load, check your connection");
      return;
    }

    const options = {
      key: "rzp_test_00xwOE0zJAzgUs",
      theme: { color: "#06B6D4" },
      amount: finalPrice * 100,
      currency: "INR",
      name: "RoboStore",
      description: "Make your own cool robots!",
      handler: async function (response) {
        const orderId = uuid().toString().split("-")[0];

        const orderData = {
          products: [...cartState],
          amount: finalPrice,
          paymentId: response.razorpay_payment_id,
          orderId,
          delivery: currentAddress,
        };

        const { data, status } = await addOrderService(orderData, token);

        if (status === 201) {
          <h1>order is succesful</h1>;
        }
      },

      prefill: {
        name: currentAddress.name,
        email: currentAddress.email,
        contact: currentAddress.mobile,
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="order-details">
      <div>
        <h2>Order details</h2>
        {cartState.cart.map((product) => (
          <div key={product.name} className="product-description">
            <p>{product.name}</p>
            <p>
              {product.quantity} X {product.price}
            </p>
          </div>
        ))}
        <hr />
        <div className="product-description">
          <p>Subtotal </p>
          <p>{itemsPrice}</p>
        </div>
        <div className="product-description">
          <p>Shipping Charges</p>
          <p>{50}</p>
        </div>
        <hr />
        <div className="product-description">
          <p className="bold-price">Total Price</p>
          <p className="bold-price">{finalPrice}</p>
        </div>
      </div>
      {currentAddress ? (
        <>
          <hr />
          <p className="bold-price">Deliver to:</p>
          <p>{currentAddress.name}</p>
          <p>
            {currentAddress.street},{currentAddress.city} -{" "}
            {currentAddress.zipcode}
          </p>
          <p>
            {currentAddress.state}, {currentAddress.country}
          </p>
          <p>{currentAddress.mobile}</p>
        </>
      ) : (
        <p>Add an address to proceed.</p>
      )}
      <button className="btn-major" onClick={displayRazorpay}>
        Proceed to pay
      </button>
    </div>
  );
};
