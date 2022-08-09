import CheckoutSteps from "../components/CheckOutSteps.js";
import { getUserInfo, getPayment, setPayment } from "../js/localStorage.js";

const PaymentScreen = {
  after_render: () => {
    const btnShop = document.querySelector(".cart");
    const shoppingForm = document.getElementById("payment-form");

    btnShop.addEventListener("click", function () {
      if ((document.location.hash = `/cart`)) window.location.reload();
    });
    shoppingForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const paymentMethod = document.querySelector(
        "input[name='payment-method:checked']"
      ).value;
      setPayment({
        paymentMethod,
      });
      document.location.hash = `/placeorder`;
    });
  },
  render: () => {
    const { name } = getUserInfo();

    if (!name) {
      document.location.hash = "/";
    }

    return `
    ${CheckoutSteps.render({ step1: true, step2: true, step3: true })}
   <div class='container container-payment shadow-lg mt-4 p-5 mb-3 bg-transparent bg-gradient rounded position-relative  '> 
    <form id='payment-form'>
    <ul class="form-items">
    <li>
      <div>
        <input type="radio"
        name="payment-method"
        id="card"
        value="Card"
        checked />
        <label for="card" >💳Card</label>
       </div> 
    </li>
    <li>
    <div>
      <input type="radio"
      name="payment-method"
      id="cash"
      value="Cash"
       />
      <label for="cash" >💶Plata la ramburs</label>
     </div> 
  </li> 
  </ul>
       <button type="submit"  onClick="if (document.location.hash = '/order') window.location.reload()" class="btn btn-danger  bg-gradient">Continuă</button>
    </form>

   </div> 
    `;
  },
};

export default PaymentScreen;
