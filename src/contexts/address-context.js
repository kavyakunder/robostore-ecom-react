import { createContext, useContext, useEffect, useReducer } from "react";
import toast from "react-hot-toast";
import {
  getAddressService,
  addAddressService,
} from "../services/addressService";
import { useAuth } from "./auth-context";
import { addressReducer } from "../reducers/address-reducer";
const AddressContext = createContext();

const AddressProvider = ({ children }) => {
  const [addressState, dispatchAddress] = useReducer(addressReducer, {
    addresses: [],
    selectedAddrId: null,
    formData: {
      name: "",
      street: "",
      email: "",
      city: "",
      state: "",
      zipcode: "",
      country: "",
      mobile: "",
    },
  });
  const {
    auth: { token, isAuth },
  } = useAuth();
  console.log("Token is", token);

  useEffect(() => {
    if (isAuth) {
      try {
        (async () => {
          const { data, status } = await getAddressService(token);

          if (status === 200) {
            dispatchAddress({ type: "GET_ADDRESS", payload: data.address });
          }
        })();
      } catch (err) {
        console.error(err);
      }
    }
  }, [token, isAuth]);

  const submitFormHandler = async (e) => {
    e.preventDefault();

    try {
      const { data, status } = await addAddressService(
        token,
        addressState.formData
      );

      if (status === 201) {
        dispatchAddress({ type: "GET_ADDRESS", payload: data.address });
        toast.success("Address added");
      }
    } catch (err) {
      toast.error("Couldn't add address");
      console.error(err);
    }
  };

  return (
    <AddressContext.Provider
      value={{
        addressState,
        dispatchAddress,
        submitFormHandler,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

const useAddress = () => useContext(AddressContext);

export { AddressProvider, useAddress };
