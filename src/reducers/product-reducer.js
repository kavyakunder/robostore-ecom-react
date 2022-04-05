const ProductReducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_FILTERS":
      return {
        ...state,
        sortBy: "",
        categories: {
          Arduino: false,
          Battery: false,
          Breadboard: false,
          Wheels: false,
          Sensor: false,
        },
        price: 1000,
      };

    case "INITIAL_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };

    case "PRICE":
      return {
        ...state,
        price: action.payload,
      };

    case "BREADBOARD":
      return {
        ...state,
        categories: {
          ...state["categories"],
          Breadboard: !state.categories.Breadboard,
        },
      };

    case "ARDUINO":
      return {
        ...state,
        categories: {
          ...state["categories"],
          Arduino: !state.categories.Arduino,
        },
      };

    case "SENSOR":
      return {
        ...state,
        categories: {
          ...state["categories"],
          Sensor: !state.categories.Sensor,
        },
      };

    case "BATTERY":
      return {
        ...state,
        categories: {
          ...state["categories"],
          Battery: !state.categories.Battery,
        },
      };

    case "WHEELS":
      return {
        ...state,
        categories: {
          ...state["categories"],
          Wheels: !state.categories.Wheels,
        },
      };

    case "PRICE_LOW_TO_HIGH":
      return { ...state, sortBy: action.type };

    case "PRICE_HIGH_TO_LOW":
      return { ...state, sortBy: action.type };

    default:
      return { ...state };
  }
};

export { ProductReducer };
