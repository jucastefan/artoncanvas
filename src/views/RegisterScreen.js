import { register } from "../js/api.js";
import { clearUser, getUserInfo, setuserInfo } from "../js/localStorage.js";
import {
  hideLoading,
  redirectUser,
  showLoading,
  showMessage,
} from "../js/utils.js";

const RegisterScreen = {
  after_render: () => {
    const btnShop = document.querySelector(".cart");
    const registerForm = document.getElementById("register-form");
    btnShop.addEventListener("click", function () {
      if ((document.location.hash = `/cart`)) window.location.reload();
    });
    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      showLoading();
      const data = await register({
        name: document.getElementById("InputName").value,
        email: document.getElementById("InputEmail").value,
        password: document.getElementById("InputPassword").value,
      });
      hideLoading();
      const email = document.getElementById("InputEmail").value;
      const password = document.getElementById("InputPassword").value;
      const name = document.getElementById("InputName").value;

      if (data.error) {
        alert("Invalid");
      } else {
        showMessage("✔️Inregistrarea a reușit!");
        setuserInfo(data);
        if (password === "") {
          showMessage("⚠️Introduceți o parolă!");
        } else if (email === "") {
          showMessage("⚠️Introduceți un e-mail!");
        } else if (name === "") {
          showMessage("⚠️Introduceți un nume!");
        }
        redirectUser();
      }
    });
  },
  render: () => {
    if (getUserInfo().name) {
      redirectUser();
    }

    return `
   <div class='container container-register shadow-lg p-5 mb-5 bg-transparent bg-gradient rounded position-relative '> 
    <form id='register-form'>
    <div class="mb-3">
        <label for="InputName" class="form-label">Nume:</label>
        <input type="name" class="form-control" id="InputName">
      </div>
      <div class="mb-3>
        <label for="InputEmail" class="form-label">E-mail:</label>
        <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
          <label for="InputPassword" class="form-label">Parolă:</label>
          <input type="password" class="form-control" id="InputPassword">
      </div>
      <div class="mb-3">
          <label for="repassword" class="form-label">Confirmare parolă:</label>
          <input type="password" class="form-control" id="repassword">
      </div>
      
      <button type="submit"  class="btn btn-danger bg-gradient mb-3">Înregistrează-te</button>
    </form>
    <a href="/#/signin"  onClick="if (document.location.hash = '/signin') window.location.reload()" class="link-danger pointer">👉Ai cont deja? Intră aici!</a>
   </div> 
    `;
  },
};

export default RegisterScreen;
