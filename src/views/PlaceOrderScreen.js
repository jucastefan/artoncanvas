import {
  getPayment,
  getCartItems,
  getShipping,
  getUserInfo,
  cleanCart,
} from "../js/localStorage.js";
import CheckoutSteps from "../components/CheckOutSteps.js";
import { hideLoading, showLoading, showMessage } from "../js/utils.js";
import { createOrder } from "../js/api.js";

const convertCartToOrder = () => {
  const orderItems = getCartItems();
  if (orderItems.length === 0) {
    document.location.hash = "/cart";
  }

  const shipping = getShipping();
  if (!shipping.adress) {
    document.location = "/shipping";
  }

  const payment = getPayment();
  if (!payment.paymentMethod) {
    document.location.hash = "/payment";
  }

  const itemsPrice = orderItems.reduce((a, c) => a + c.price * c.qty, 0);
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  const taxPrice = Math.round(0.15 * itemsPrice * 100) / 100;
  const totalPrice = itemsPrice + shippingPrice + taxPrice;
  return {
    orderItems,
    shipping,
    payment,
    shippingPrice,
    taxPrice,
    itemsPrice,
    totalPrice,
  };
};

const PlaceOrderScreen = {
  after_render: async () => {
    document
      .getElementById("placeorder-button")
      .addEventListener("click", async () => {
        const order = convertCartToOrder();
        console.log(order);
        showLoading();
        const data = await createOrder(order);
        hideLoading();
        if (data.error) {
          showMessage(data.error);
        } else {
          cleanCart();
        }
      });
  },
  render: () => {
    const {
      orderItems,
      shipping,
      payment,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
    } = convertCartToOrder();
    return `
    <div>
      ${CheckoutSteps.render({
        step1: true,
        step2: true,
        step3: true,
        step4: true,
      })}
      <div class="order shadow-lg p-4 mb-5 bg-transparent bg-gradient rounded">
        <div class="order-info container">
          <div >
            <h2>Adresa de plată</h2>
            <div>
            ${String(shipping.adress)}, ${shipping.city}, ${
      shipping.postalCode
    }, 
            ${shipping.country}
            </div>
          </div>
          <div>
            <h2>Metoda de plată</h2>
            <div class="h4">
              ${payment.paymentMethod}
            </div>
          </div>
          <div>
            <ul class="cart-list-container ">
              <li>
                <h2>Coșul tău</h2>
                <div id="prt">🏷️Preț</div>
              </li>
              ${orderItems
                .map(
                  (item) => `
                <li>
                  <div class="cart-image">
                    <img src="${item.image}.png" alt="${item.tag}" />
                  </div>
                  <div class="cart-name">
                    <div>
                      <a class="text-decoration-none text-dark h3" href="/#/product/${item.product}">${item.name} </a>
                    </div>
                    <div> Cantitate: ${item.qty} </div>
                  </div>
                  <div class="cart-price"> ${item.price}lei</div>
                </li>
                `
                )
                .join("\n")}
            </ul>
          </div>
        </div>
        <div class="order-action">
           <ul class="position-relative">
                <li>
                  <h2>Sumar comandă</h2>
                 </li>
                 <li><div>🧾Produse</div><div>${itemsPrice}lei</div></li>
                 <li><div>🚚Taxă curier</div><div>${shippingPrice}lei</div></li>
                 <li class="total text-dark"><div>Total</div><div>${totalPrice}lei</div></li> 
                 <li>
                 <button id="placeorder-button" class="primary fw btn btn-danger  bg-gradient position-absolute top-100 start-50 translate-middle">
                 Plasează comanda
                 </button>
        </div>
      </div>
    </div>
    <div class="p-3"></div>
    `;
  },
};

export default PlaceOrderScreen;
