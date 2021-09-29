import { signin } from "../js/api.js";
import { getUserInfo, setuserInfo } from "../js/localStorage.js";
import {
  hideLoading,
  redirectUser,
  showLoading,
  showMessage,
} from "../js/utils.js";

const SignInScreen = {
  after_render: () => {
    const btnShop = document.querySelector(".cart");
    const signInForm = document.getElementById("signin-form");
    const reg = document.getElementById("reg");

    reg.addEventListener("click", function () {
      if ((document.location.hash = `/register`)) window.location.reload();
    });

    btnShop.addEventListener("click", function () {
      if ((document.location.hash = `/cart`)) window.location.reload();
    });

    signInForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      showLoading();
      const data = await signin({
        email: document.getElementById("InputEmail").value,
        password: document.getElementById("InputPassword").value,
      });
      hideLoading();

      const email = document.getElementById("InputEmail").value;
      const password = document.getElementById("InputPassword").value;

      if (password === "") {
        showMessage("⚠️Introduceți o parolă!");
      } else if (email === "") {
        showMessage("⚠️Introduceți un e-mail!");
      }

      if (data.error) {
        alert("Invalid");
      } else {
        setuserInfo(data);
        redirectUser();
        showMessage("✔️Autentificarea a reușit!");
      }
    });
  },
  render: () => {
    if (getUserInfo().name) {
      redirectUser();
    }
    return `
   <div class='container container-signin shadow-lg p-5 mb-5 bg-transparent bg-gradient rounded position-relative '>
   <h6 class='text-muted'>👋🏻Pentru a putea achziționa un produs este necesară autentificarea</h6>
    <form id='signin-form'>
      <div class="mb-3">
        <label for="InputEmail" class="form-label">E-mail:</label>
        <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
          <label for="InputPassword" class="form-label">Parolă:</label>
          <input type="password" class="form-control" id="InputPassword">
      </div>
      
      <button type="submit" class="btn btn-danger  bg-gradient mb-3">Conectează-te</button>
      
    </form>
    <a href="/#/signin" id='reg' class="link-danger">😜Nu ai cont? Înregistrează-te aici!</a>
   </div> 
   <div class="p-3"></div>
    `;
  },
};

export default SignInScreen;
