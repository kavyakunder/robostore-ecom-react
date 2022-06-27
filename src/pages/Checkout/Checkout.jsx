import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/cart-context";
import { AddressModal } from "../../components/Address/AddressModal";
import { useAddress } from "../../contexts/address-context";
import { OrderSummary } from "./OrderSummary";
import "./checkout.css";

export const Checkout = () => {
  const {
    addressState: { addresses, selectedAddrId },
    dispatchAddress,
  } = useAddress();
  console.log("Addresss", addresses);
  const { cartState } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (cartState.length === 0) {
      navigate("/products");
    }
  }, [cartState]);
  const [showAddrModal, setShowAddrModal] = useState(false);

  console.log("Adress", addresses);
  console.log("selected", selectedAddrId);
  return (
    <div>
      <section>
        <div className="address-order">
          <div className="address-list">
            <h2>Select Address</h2>
            {addresses.map((address) => (
              <label for="" className="input-list" key={address._id}>
                <input
                  type="radio"
                  name="address"
                  checked={selectedAddrId === address._id}
                  onChange={() =>
                    dispatchAddress({
                      type: "SET_ADDRESS_ID",
                      payload: address._id,
                    })
                  }
                />

                <div>
                  <p>{address.name}</p>
                  <p>
                    {address.street},{address.city}
                  </p>
                  <p>{address.zipcode}</p>
                  <p>
                    {address.state}, {address.country}
                  </p>
                  <p>{address.mobile}</p>
                </div>
              </label>
            ))}
            <button
              className="btn-major"
              onClick={() => setShowAddrModal(true)}
            >
              Add addresss
            </button>
          </div>

          <div>
            <OrderSummary />
          </div>
        </div>
      </section>
      {showAddrModal ? (
        <div>
          <AddressModal setShowAddrModal={setShowAddrModal} />
        </div>
      ) : null}
    </div>
  );
};
