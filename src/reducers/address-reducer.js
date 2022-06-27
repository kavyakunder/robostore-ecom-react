const addressReducer = (state, { type, payload }) => {
  console.log("STATE in address", state);
  switch (type) {
    case "GET_ADDRESS":
      return {
        ...state,
        addresses: payload,
        selectedAddrId: payload || null,
      };
    case "SET_ADDRESS_ID":
      return { ...state, selectedAddrId: payload };
    case "SET_INPUT":
      return {
        ...state,
        formData: { ...state.formData, [payload.name]: payload.value },
      };
    case "SET_DUMMY_ADDR":
      return {
        ...state,
        formData: payload,
      };
    case "RESET_FORM":
      return { ...state, formData: payload };
    default:
      return state;
  }
};

export { addressReducer };
