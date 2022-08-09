import HomeScreen from "../views/HomeScreen.js";
import ProductScreen from "../views/ProductScreen.js";
import { hideLoading, parseRequestUrl, showLoading } from "./utils.js";
import Error404Screen from "../views/Error404Screen.js";
import CartScreen from "../views/CartScreen.js";
import SignInScreen from "../views/SignInScreen.js";
import Header from "../components/Header.js";
import RegisterScreen from "../views/RegisterScreen.js";
import ProfileScreen from "../views/ProfileScreen.js";
import ShippingScreen from "../views/ShippingScreen.js";
import PaymentScreen from "../views/PaymentScreen.js";
import PlaceOrderScreen from "../views/PlaceOrderScreen.js";
// import OrderScreen from "../views/OrderScreen.js";

const routes = {
  "/": HomeScreen,
  "/product/:id": ProductScreen,
  // "/order/:id": OrderScreen,
  "/cart/:id": CartScreen,
  "/cart": CartScreen,
  "/signin": SignInScreen,
  "/register": RegisterScreen,
  "/profile/:id": ProfileScreen,
  "/shipping": ShippingScreen,
  "/payment": PaymentScreen,
  "/order": PlaceOrderScreen,
};

const router = async () => {
  showLoading();
  const request = parseRequestUrl();
  const parseUrl =
    (request.resource ? `/${request.resource}` : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? `/${request.verb}` : "");
  const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;
  const main = document.getElementById("main-container");
  const sign = document.getElementById("singin");
  await Header.after_render();
  sign.innerHTML = await Header.render();
  main.innerHTML = await screen.render();
  if (screen.after_render) await screen.after_render();
  hideLoading();
};

window.addEventListener("load", router);
window.addEventListener("haschange", router);
