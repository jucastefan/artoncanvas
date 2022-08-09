import { update } from "../js/api.js";
import { clearUser, getUserInfo, setuserInfo } from "../js/localStorage.js";
import { hideLoading, redirectUser, showLoading } from "../js/utils.js";

const ProfileScreen = {
  after_render: () => {
    const logout = document.getElementById("signout");
    const btnShop = document.querySelector(".cart");
    const profileForm = document.getElementById("profile-form");

    logout.addEventListener("click", function () {
      if ((document.location.hash = `/`)) {
        window.location.reload();
        clearUser();
      }
    });

    btnShop.addEventListener("click", function () {
      if ((document.location.hash = `/cart`)) window.location.reload();
    });

    profileForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      showLoading();
      const data = await update({
        name: String(document.getElementById("InputName").value),
        email: String(document.getElementById("InputEmail").value),
        password: String(document.getElementById("InputPassword").value),
      });
      hideLoading();
      if (data.error) {
        alert(data.error);
      } else {
        setuserInfo(data);
        document.location.hash = "/signin";
        redirectUser();
        showMessage("✔️Schimbarea a fost efectuata!");
      }
    });
  },
  render: () => {
    const { name, email } = getUserInfo();
    if (!name) {
      document.location.hash = "/";
    }
    return `
   <div class='container container-register shadow-lg p-5 mb-5 bg-transparent bg-gradient rounded position-relative '> 
   <h6 class='text-muted'>👋🏻Aici poți schimba numele, e-mailul sau parola.</h6>
    <form id='profile-form'>
    <div class="mb-3">
        <label for="InputName" class="form-label">Nume:</label>
        <input type="name" class="form-control" value="${name}" id="InputName">
      </div>
      <div class="mb-3>
        <label for="InputEmail" class="form-label">Email:</label>
        <input type="email" class="form-control" id="InputEmail" value="${email}" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
          <label for="InputPassword" class="form-label">Parolă:</label>
          <input type="password" class="form-control" id="InputPassword">
      </div>
      
      <button type="submit" class="btn btn-danger bg-danger bg-gradient mb-3">Schimbă</button>
      <button type="button"  id='signout' class="btn btn-danger bg-danger bg-gradient mb-3">Deloghează-te</button>
    </form>

   </div> 
   <div class="p-3"></div>
    `;
  },
};

export default ProfileScreen;
