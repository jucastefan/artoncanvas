import { getProduct } from "../js/api.js";
import { getCartItems, setCartItems } from "../js/localStorage.js";
import { parseRequestUrl, rerender } from "../js/utils.js";

const addToCart = (item, forceUpdate = false) => {
  let cartItems = getCartItems();

  const existItem = cartItems.find((x) => x.product === item.product);

  if (existItem) {
    if (forceUpdate) {
      cartItems = cartItems.map((x) =>
        x.product === existItem.product ? item : x
      );
    }
  } else {
    cartItems = [...cartItems, item];
  }
  setCartItems(cartItems);
  if (forceUpdate) {
    rerender(CartScreen);
  }
};

const removeFromCart = (id) => {
  const items = JSON.parse(localStorage.getItem("cartItems"));
  setCartItems(items.filter((x) => x.product === id));
  if (id === parseRequestUrl().id) {
    if ((document.location.hash = `/cart`)) {
      window.location.reload();
    }
  } else {
    rerender(CartScreen);
  }
};

const CartScreen = {
  after_render: () => {
    const btnSignin = document.querySelector("#singin");

    btnSignin.addEventListener("click", function () {
      if ((document.location.hash = `/signin`)) window.location.reload();
    });

    const qtySelects = document.getElementsByClassName("qty-select");

    Array.from(qtySelects).forEach((qtySelect) => {
      const items = JSON.parse(localStorage.getItem("cartItems"));
      const item = items.find((x) => x.product === qtySelect.id);
      qtySelect.addEventListener("change", (e) => {
        addToCart({ ...item, qty: Number(e.target.value) }, true);
      });
    });

    const deleteButtons = document.getElementsByClassName("delete-button");
    Array.from(deleteButtons).forEach((deleteButton) => {
      deleteButton.addEventListener("click", () => {
        removeFromCart(deleteButton.id);
      });
    });
  },
  render: async () => {
    const request = parseRequestUrl();
    if (request.id) {
      const product = await getProduct(request.id);
      addToCart({
        product: product.id,
        name: product.name,
        image: product.img,
        price: product.price,
        countInStock: product.countInStock,
        qty: 1,
      });
    }
    const cartItems = getCartItems();
    return `
    <div class="content cart position-relative">
      <div class="cart-list mt-5">
        <ul class="cart-list-container">
          <li>
            <h3>Coșul meu</h3>
            <div id="prt">🏷️Preț</div>
          </li>
          ${
            cartItems.length === 0
              ? `<div class="h2">Coșul este gol😔</div>`
              : cartItems
                  .map(
                    (item) => `
            <li>
              <div class="cart-image">
                <img src="${item.image}.png" alt="${item.name}" />
              </div>
              <div class="cart-name">
                <div>
                  <a class="text-decoration-none text-dark" href="/#/product/${
                    item.product
                  }">
                    ${item.name}
                  </a>
                </div>
                <div>
                📦Cantitate: 
                  <select class="qty-select" id="${item.product}">
                  ${[...Array(item.countInStock).keys()].map((x) =>
                    item.qty === x + 1
                      ? `<option selected value="${x + 1}">${x + 1}</option>`
                      : `<option value="${x + 1}">${x + 1}</option>`
                  )}</select>
                  <button type="button" class="delete-button btn bg-gradient btn-danger text-white" id="${
                    item.product
                  }">
                  🗑️Șterge
                  </button>
                </div>
              </div>
              <div class="cart-price">
                ${item.price}lei
              </div>
            </li>
            `
                  )
                  .join("\n")
          } 
        </ul>
      </div>
      <a type="button" id='backtoshop' href="/" class="btn bg-gradient btn-danger mb-5 text-white position-absolute top-0 start-50 translate-middle-x"><i class="fas fa-arrow-circle-left p-1"></i>Inapoi<i class="fas fa-store p-1"></i></a>
      <div class="cart-action mt-5 shadow-lg p-4 mb-5 bg-transparent bg-gradient rounded">
          <h3>
          📋Total (${cartItems.reduce((a, c) => a + c.qty, 0)} produse)
             :
             ${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}lei
          </h3>
          ${
            localStorage.getItem("userInfo")
              ? `<button
                type="button"
                id="checkout-button"
                onClick="if (document.location.hash = '/shipping') window.location.reload()"
                class="primary fw btn bg-gradient btn-danger text-white"
              >
                Comandă
              </button>`
              : `<button
                type="button"
                id="checkout-button"
                onClick="if (document.location.hash = '/signin') window.location.reload()"
                class="primary fw btn bg-gradient  btn-danger text-white"
              >
                Comandă
              </button>`
          }
      </div>
  
</div>
<div class="p-3"></div>

    `;
  },
};

export default CartScreen;
