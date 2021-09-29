import { getUserInfo } from "../js/localStorage.js";

const Header = {
  render: () => {
    const { id, name } = getUserInfo();
    return `
    ${
      name
        ? `<a href="/#/profile/${id}" onClick="window.close();window.open('/#/profile/${id}')" id='singin'>
    <button
     type="button"
     class="btn btn-transparent pe-4"
     data-bs-toggle="modal"
     data-bs-target="#login"
     >
         <span id="cont">${name}</span><i class="fas fa-user ps-1 me-auto"></i>
     </button>  
 </a>`
        : `<a href="/#/signin" onClick="window.close();window.open('/#/signin')" id='singin'>
 <button
  type="button"
  class="btn btn-transparent pe-4"
  data-bs-toggle="modal"
  data-bs-target="#login"
  >
      <span id="cont">Contul tău</span><i class="fas fa-sign-in-alt ps-1 me-auto"></i>
  </button>  
</a>`
    }           
    `;
  },
  after_render: () => {},
};
export default Header;
