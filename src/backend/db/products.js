import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

const url = "assets/images/product/";
export const products = [
  {
    _id: uuid(),
    name: "Solderless Breadboard",
    price: 65,
    img: `${url}breadboard1.png`,
    category: "Breadboard",
    info: "Used to prototype circuits without the requirement of PCB",
  },
  {
    _id: uuid(),
    name: " Printed Circuit Board",
    price: 285,
    img: `${url}pcb1.png`,
    category: "Breadboard",
    info: "Used to mechanically support and electrically connect electronic components ",
  },
  {
    _id: uuid(),
    name: "Mini Breadboard",
    price: 29,
    img: `${url}minibreadb.png`,
    category: "Breadboard",
    info: "Mini size pcb used in smaller circuits to avoid confusion",
  },
  {
    _id: uuid(),
    name: "Arduino Uno",
    price: 650,
    img: `${url}arduino-board.jpg`,
    category: "Arduino",
    info: "Arduino boards are ideal for electronics and computer enthusiasts.",
  },
  {
    _id: uuid(),
    name: "Arduino Mega",
    price: 990,
    img: `${url}arduinomega.png`,
    category: "Arduino",
  },
  {
    _id: uuid(),
    name: "Arduino Nano",
    price: 280,
    img: `${url}arduninano.png`,
    category: "Arduino",
  },
  {
    _id: uuid(),
    name: "Ultrasonic Sensors",
    price: 75,
    img: `${url}ultrasonic2.png`,
    category: "Sensor",
  },
  {
    _id: uuid(),
    name: "IR Infrared Sensor",
    price: 30,
    img: `${url}infrared.png`,
    category: "Sensor",
  },
  {
    _id: uuid(),
    name: "Sound Sensor",
    price: 79,
    img: `${url}soundsensor.png`,
    category: "Sensor",
  },
  {
    _id: uuid(),
    name: "Hi-watt 9v Battery",
    price: 18,
    img: `${url}battery9v.png`,
    category: "Battery",
  },
  {
    _id: uuid(),
    name: "Orange Lipo Battery",
    price: 400,
    img: `${url}lipo.png`,
    category: "Battery",
  },
  {
    _id: uuid(),
    name: "Battery Voltage Checker",
    price: 230,
    img: `${url}batterychecker.png`,
    category: "Battery",
  },
  {
    _id: uuid(),
    name: "Mechanum Wheels",
    price: 919,
    img: `${url}mechanum.png`,
    category: "Wheels",
  },
  {
    _id: uuid(),
    name: "Omni Wheels",
    price: 999,
    img: `${url}omni.png`,
    category: "Wheels",
  },
  {
    _id: uuid(),
    name: "Toy Robot Wheel",
    price: 38,
    img: `${url}robot-wheel.png`,
    category: "Wheels",
  },
];
