import CheckoutSteps from "../components/CheckOutSteps.js";
import { getUserInfo, getShipping, setShipping } from "../js/localStorage.js";

const ShippingScreen = {
  after_render: () => {
    const btnShop = document.querySelector(".cart");
    const shoppingForm = document.getElementById("shipping-form");

    btnShop.addEventListener("click", function () {
      if ((document.location.hash = `/cart`)) window.location.reload();
    });
    shoppingForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      setShipping({
        adress: document.getElementById("adress").value,
        city: document.getElementById("city").value,
        postalCode: document.getElementById("postalcode").value,
        country: document.getElementById("country").value,
      });
      document.location.hash = `/shipping`;
    });
    console.log(document.getElementById("adress").value);
  },
  render: () => {
    const { name } = getUserInfo();

    if (!name) {
      document.location.hash = "/";
    }

    const { adress, city, postalCode, country } = getShipping();

    return `
    ${CheckoutSteps.render({ step1: true, step2: true })}
   <div class='container container-shipping shadow-lg p-5 mb-5 bg-transparent bg-gradient rounded position-relative '> 
    <form id='shipping-form'>
    <div class="mb-3">
        <label for="adress" class="form-label">Adresă:</label>
        <input type="text" class="form-control" value="${adress}" id="adress">
      </div>
      <div class="mb-3">
        <label for="country" class="form-label">Județ:</label>
        <input type="country" class="form-control" value="${country}" id="country">
      </div>
      <div class="mb-3">
        <label for="city" class="form-label">Oraș:</label>
        <input type="text" class="form-control" value="${city}" id="city">
      </div>
      <div class="mb-3">
      <label for="postalcode" class="form-label">Codul poștal:</label>
      <input type="text" class="form-control" value="${postalCode}" id="postalcode">
    </div>
     <button type="submit" onClick="if (document.location.hash = '/payment') window.location.reload()" class="btn btn-danger  bg-gradient">Continuă</button>
    </form>

   </div>
    <div class="p-3"></div>
    `;
  },
};

export default ShippingScreen;
