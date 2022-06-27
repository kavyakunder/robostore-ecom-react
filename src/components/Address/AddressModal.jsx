import React from "react";
import { useEffect } from "react";
import "./address-modal.css";
import { useAddress } from "../../contexts/address-context";

const dummyAddress = {
  name: "Ronald Riley",
  street: "1153, Santhome High Road, Mylapore",
  city: "Chennai",
  email: "ronaldriley@gmail.com",
  state: "Tamil Nadu",
  zipcode: "600004",
  country: "India",
  mobile: "7428730894",
};

export const AddressModal = ({ setShowAddrModal }) => {
  const {
    addressState: { formData },
    dispatchAddress,
    submitFormHandler,
  } = useAddress();

  const formInputHandler = (e) => {
    const { name, value } = e.target;
    dispatchAddress({ type: "SET_INPUT", payload: { name, value } });
  };

  useEffect(() => {
    return () => dispatchAddress({ type: "RESET_FORM", payload: { formData } });
  }, []);

  return (
    <div className="address-modal">
      <h3>Add New Address</h3>
      <form
        className="address-form"
        onSubmit={(e) => {
          submitFormHandler(e);
          setShowAddrModal(false);
        }}
      >
        <label>
          <span className="space-span">Name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={formInputHandler}
            required
          />
        </label>

        <label>
          <span className="space-span">Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={formInputHandler}
            required
          />
        </label>
        <label>
          <span className="space-span">Street</span>
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={formInputHandler}
            required
          />
        </label>

        <label>
          <span className="space-span">City</span>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={formInputHandler}
            required
          />
        </label>

        <label>
          <span className="space-span">Zipcode</span>
          <input
            type="text"
            name="zipcode"
            maxLength="6"
            value={formData.zipcode}
            onChange={formInputHandler}
            required
          />
        </label>

        <label>
          <span className="space-span">State</span>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={formInputHandler}
            required
          />
        </label>

        <label>
          <span className="space-span">Country</span>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={formInputHandler}
            required
          />
        </label>

        <label>
          <span className="space-span">Mobile</span>
          <input
            type="text"
            name="mobile"
            maxLength="10"
            value={formData.mobile}
            onChange={formInputHandler}
            required
          />
        </label>

        <div>
          {Object.values(formData).every((value) => value.length > 0) ? (
            <button className="btn-major" type="submit">
              Add
            </button>
          ) : (
            <button className="btn-major" type="submit" disabled>
              Add
            </button>
          )}
          <button className="btn-major" onClick={() => setShowAddrModal(false)}>
            Cancel
          </button>
        </div>

        <div>
          <button
            className="btn-major"
            type="button"
            onClick={() =>
              dispatchAddress({ type: "SET_DUMMY_ADDR", payload: dummyAddress })
            }
          >
            Fill with Dummy values
          </button>
        </div>
      </form>
    </div>
  );
};
