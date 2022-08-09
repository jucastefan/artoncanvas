import { getProduct } from "../js/api.js";
import { hideLoading, parseRequestUrl, showLoading } from "../js/utils.js";

const ProductScreen = {
  after_render: () => {
    const request = parseRequestUrl();
    const btnCart = document.getElementById("btn1");
    const btnShop = document.querySelector(".cart");
    const btnSignin = document.querySelector("#singin");

    btnSignin.addEventListener("click", function () {
      if ((document.location.hash = `/signin`)) window.location.reload();
    });

    btnCart.addEventListener("click", function () {
      if ((document.location.hash = `/cart/${request.id}`))
        window.location.reload();
    });

    btnShop.addEventListener("click", function () {
      if ((document.location.hash = `/cart`)) window.location.reload();
    });
  },
  render: async () => {
    const request = parseRequestUrl();
    showLoading();
    const product = await getProduct(request.id);
    const pagination = document.querySelector(".pages-container");
    if (pagination) {
      pagination.classList.remove("hidden-pages");
    }
    hideLoading();
    return `
    <a type="button" href='/' onClick="if (document.location.hash = '/') window.location.reload()" id='backtoshop' class="btn bg-gradient btn-danger  mb-2 text-white position-absolute top-0 start-50 translate-middle-x"><i class="fas fa-arrow-circle-left p-1"></i>Inapoi<i class="fas fa-store p-1"></i></a>
    <div class="row row-cols-1 row-cols-md-3 g-5 d-flex justify-content-center align-items-center mt-4 ">
         <div class="col pb-md-5  ">
            <div class="card  d-flex bg-transparent w-60 justify-content-center align-items-center shadow-lg p-3 mb-4 bg-transparent bg-gradient rounded">
              
                 <img src="${product.img}.png" class="card-img-top img-thumbnail  img-fluid mt-4 pointer" alt="${product.tag}">
               
               <div class="card-body">
                   
                </div>
             </div>   
           </div>
           <div class="col mb-5">
            <div class="card  d-flex  justify-content-center align-items-center shadow-lg p-3 mb-4 bg-transparent bg-gradient rounded">
               <div class="card-body ">
                   <h1 class="card-text">${product.name}</h1>
                   <p class="card-text">The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                   <h3 class="card-title">Preț: ${product.price}lei</h3>
                   <h6 class="card-title succes text-muted">🟢În stoc</h6>
                
                   <a type="button" id="btn1" class="btn btn-danger bg-gradient add-cart pointer">Adaugă în coș<i class="fas fa-plus p-1"></i></a>
                </div>
             </div>   
           </div>      
       </div>
       <div class="p-3"></div>            
    `;
  },
};

export default ProductScreen;
