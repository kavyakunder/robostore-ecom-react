import axios from "axios";

const addAddressService = (token, formData) => {
  return axios.post(
    "/api/user/address",
    { address: formData },
    { headers: { authorization: token } }
  );
};

const getAddressService = (token) => {
  return axios.get("/api/user/addresses", {
    headers: { authorization: token },
  });
};

export { addAddressService, getAddressService };
