import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    address: [
      {
        _id: uuid(),
        name: "Kavya Kunder",
        email: "demonslayer@gmail.com",
        street: "Major State Highway 6, Rajapeth",
        city: "Mumbai",
        state: "Maharashtra",
        zipcode: "444605",
        country: "India",
        mobile: "9255506504",
      },
    ],
  },
];
