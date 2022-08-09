import { hideLoading, parseRequestUrl, showLoading } from "../js/utils.js";

const HomeScreen = {
  after_render: () => {
    const logo = document.querySelector(".navbar-brand");
    const btnShop = document.querySelector(".cart");

    btnShop.addEventListener("click", function () {
      if ((document.location.hash = `/cart`)) window.location.reload();
    });

    logo.addEventListener("click", function () {
      if ((document.location.hash = `/`)) window.location.reload();
    });
  },
  render: async () => {
    showLoading();
    const res = await fetch(
      "https://secret-bastion-33131.herokuapp.com/api/product"
    );
    hideLoading();
    if (!res || !res.ok) {
      return `<div>Eroare</div>`;
    }
    const products = await res.json();
    return `
    <div class="row row-cols-1 row-cols-md-3 g-5 d-flex justify-content-center align-items-center">
         ${products
           .map(
             (product) =>
               `
         <div class="col">
            <div class="card  d-flex bg-transparent justify-content-center align-items-center shadow-lg p-3 mb-4 bg-transparent bg-gradient rounded ">
               <a id='pp' href="/#/product/${product.id}" onClick="if (document.location.hash = '/product/${product.id}') window.location.reload()">
                 <img src="${product.img}.png" id="prod" class="card-img-top img-thumbnail img-fluid mt-5 rounded pointer" alt="${product.tag}">
               </a>
               <div class="card-body">
                   <h6 class="card-title">🏷️Preț: ${product.price}lei</h6>
                   <a class='text-decoration-none text-dark h4'  href="/#/product/${product.id}" target="_top">
                   <p class="card-text">${product.name}</p>
                   </a>
                   
                </div>
             </div>   
           </div>
          `
           )
           .join("\n")}     
       </div>
       <div class="p-5"></div>
    `;
  },
};

export default HomeScreen;
