import { getCartItems } from "./localStorage.js";

export const parseRequestUrl = () => {
  const url = document.location.hash.toLowerCase();
  const request = url.split("/");
  return {
    resource: request[1],
    id: request[2],
    verb: request[3],
  };
};

export const rerender = async (component) => {
  document.getElementById("main-container").innerHTML =
    await component.render();
  await component.after_render();
};

export const showLoading = () => {
  document.getElementById("loading-overlay").classList.add("active");
};

export const hideLoading = () => {
  document.getElementById("loading-overlay").classList.remove("active");
};

export const showMessage = (message, callback) => {
  document.getElementById("message-overlay").innerHTML = `
  
  <div id='message-overlay-content'>
     <div class="card text-center" style="width: 23rem;">
        <div class="card-body">
          <h5 class="card-title text-dark">${message}</h5>
          <button class='btn btn-danger bg-gradient' id='message-overlay-close-button'>Închide</button>
        </div>
     </div>
  </div>
 
  `;
  document.getElementById("message-overlay").classList.add("active");
  document
    .getElementById("message-overlay-close-button")
    .addEventListener("click", () => {
      document.getElementById("message-overlay").classList.remove("active");
      if (callback) {
        callback();
      }
    });
};

export const redirectUser = () => {
  if (getCartItems().length !== 0) {
    document.location.hash = "/shipping"
    window.location.reload();
  } else {
    document.location = "/";
  }
};
