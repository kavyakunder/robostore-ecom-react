const filteredCategoryProducts = (
  product,
  Breadboard,
  Arduino,
  Sensor,
  Battery,
  Wheels
) => {
  const filteredCategory = [];

  if (
    Breadboard === false &&
    Arduino === false &&
    Sensor === false &&
    Battery === false &&
    Wheels === false
  )
    return product;

  if (Breadboard) {
    let newListOfProducts = product.filter(
      (item) => "Breadboard" === item.category
    );
    filteredCategory.push(...newListOfProducts);
  }
  if (Arduino) {
    let newListOfProducts = product.filter(
      (item) => "Arduino" === item.category
    );
    filteredCategory.push(...newListOfProducts);
  }
  if (Sensor) {
    let newListOfProducts = product.filter(
      (item) => "Sensor" === item.category
    );
    filteredCategory.push(...newListOfProducts);
  }
  if (Battery) {
    let newListOfProducts = product.filter(
      (item) => "Battery" === item.category
    );
    filteredCategory.push(...newListOfProducts);
  }
  if (Wheels) {
    let newListOfProducts = product.filter(
      (item) => "Wheels" === item.category
    );
    filteredCategory.push(...newListOfProducts);
  }
  return filteredCategory;
};

const filteredPriceProducts = (product, price) => {
  return product.filter((item) => item.price <= price);
};

const sortedProducts = (product, sortBy) => {
  if (sortBy === "PRICE_LOW_TO_HIGH")
    return [...product].sort((a, b) => a.price - b.price);
  else if (sortBy === "PRICE_HIGH_TO_LOW")
    return [...product].sort((a, b) => b.price - a.price);
  return product;
};

export { filteredCategoryProducts, filteredPriceProducts, sortedProducts };
