import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */
const url = "assets/images/homepage/";

export const categories = [
  {
    _id: uuid(),
    category: "3D Printers",
    img: `${url}3d-printers.jpg`,
  },
  {
    _id: uuid(),
    category: "Arduino",
    img: `${url}arduino-board.jpg`,
    category: "Printers",
  },
  {
    _id: uuid(),
    category: "Development Boards",
    img: `${url}8051board.png`,
  },
  {
    _id: uuid(),
    category: "Displays",
    img: `${url}displays.jpg`,
  },
  {
    _id: uuid(),
    category: "DIY Robot Kits",
    img: `${url}diy-kits.jpg`,
  },
];
