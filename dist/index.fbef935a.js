var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequire208e;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequire208e=a),a.register("7pwvT",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var n=a("wCRaO");var r={after_render:()=>{const e=document.querySelector(".navbar-brand");document.querySelector(".cart").addEventListener("click",(function(){(document.location.hash="/cart")&&window.location.reload()})),e.addEventListener("click",(function(){(document.location.hash="/")&&window.location.reload()}))},render:async()=>{n.showLoading();const e=await fetch(" https://serene-sea-96098.herokuapp.com/api/product");if(n.hideLoading(),!e||!e.ok)return"<div>Eroare</div>";return`\n    <div class="row row-cols-1 row-cols-md-3 g-5 d-flex justify-content-center align-items-center">\n         ${(await e.json()).map((e=>`\n         <div class="col ">\n            <div class="card  d-flex bg-transparent justify-content-center align-items-center shadow-lg p-3 mb-4 bg-transparent bg-gradient rounded ">\n               <a id='pp' href="/#/product/${e.id}" onClick="window.close();window.open('/#/product/${e.id}')">\n                 <img src="./src/img/${e.img}.jpeg" id="prod" class="card-img-top img-thumbnail img-fluid mt-5 rounded pointer" alt="${e.tag}">\n               </a>\n               <div class="card-body">\n                   <h6 class="card-title">🏷️Preț: ${e.price}lei</h6>\n                   <a class='text-decoration-none text-dark h4'  href="/#/product/${e.id}" target="_top">\n                   <p class="card-text">${e.name}</p>\n                   </a>\n                   \n                </div>\n             </div>   \n           </div>\n          `)).join("\n")}     \n       </div>\n       <div class="p-5"></div>\n    `}};e.exports.default=r})),a.register("wCRaO",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.redirectUser=e.exports.showMessage=e.exports.hideLoading=e.exports.showLoading=e.exports.rerender=e.exports.parseRequestUrl=void 0;var n=a("kt7Mb");e.exports.parseRequestUrl=()=>{const e=document.location.hash.toLowerCase().split("/");return{resource:e[1],id:e[2],verb:e[3]}};e.exports.rerender=async e=>{document.getElementById("main-container").innerHTML=await e.render(),await e.after_render()};e.exports.showLoading=()=>{document.getElementById("loading-overlay").classList.add("active")};e.exports.hideLoading=()=>{document.getElementById("loading-overlay").classList.remove("active")};e.exports.showMessage=(e,t)=>{document.getElementById("message-overlay").innerHTML=`\n  \n  <div id='message-overlay-content'>\n     <div class="card text-center" style="width: 23rem;">\n        <div class="card-body">\n          <h5 class="card-title text-dark">${e}</h5>\n          <button class='btn btn-danger bg-gradient' id='message-overlay-close-button'>Închide</button>\n        </div>\n     </div>\n  </div>\n \n  `,document.getElementById("message-overlay").classList.add("active"),document.getElementById("message-overlay-close-button").addEventListener("click",(()=>{document.getElementById("message-overlay").classList.remove("active"),t&&t()}))};e.exports.redirectUser=()=>{0!==n.getCartItems().length?document.location.hash="/shipping":document.location="/"}})),a.register("kt7Mb",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.cleanCart=e.exports.setPayment=e.exports.getPayment=e.exports.setShipping=e.exports.getShipping=e.exports.getUserInfo=e.exports.clearUser=e.exports.setuserInfo=e.exports.setCartItems=e.exports.getCartItems=void 0;e.exports.getCartItems=()=>localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[];e.exports.setCartItems=e=>{localStorage.setItem("cartItems",JSON.stringify(e))};e.exports.setuserInfo=({id:e="",name:t="",email:n="",password:a="",isAdmin:r=!1})=>{localStorage.setItem("userInfo",JSON.stringify({id:e,name:t,email:n,password:a,isAdmin:r}))};e.exports.clearUser=()=>{localStorage.removeItem("userInfo")};e.exports.getUserInfo=()=>localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):{name:"",email:"",password:""};e.exports.getShipping=()=>localStorage.getItem("shipping")?JSON.parse(localStorage.getItem("shipping")):{adress:"",city:"",postalCode:"",country:""};e.exports.setShipping=({adress:e="",city:t="",postalCode:n="",country:a=""})=>{localStorage.setItem("shipping",JSON.stringify({adress:e,city:t,postalCode:n,country:a}))};e.exports.getPayment=()=>localStorage.getItem("payment")?JSON.parse(localStorage.getItem("payment")):{paymentMethod:"Plata la ramburs"};e.exports.setPayment=({paymentMethod:e="card"})=>{localStorage.setItem("payment",JSON.stringify({paymentMethod:e}))};e.exports.cleanCart=()=>{localStorage.removeItem("cartItems")}}));var r=f(a("7pwvT"));a.register("jcodr",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var n=a("gq2gT"),r=a("wCRaO");var o={after_render:()=>{const e=r.parseRequestUrl(),t=document.getElementById("btn1"),n=document.querySelector(".cart");document.querySelector("#singin").addEventListener("click",(function(){(document.location.hash="/signin")&&window.location.reload()})),t.addEventListener("click",(function(){(document.location.hash=`/cart/${e.id}`)&&window.location.reload()})),n.addEventListener("click",(function(){(document.location.hash="/cart")&&window.location.reload()}))},render:async()=>{const e=r.parseRequestUrl();r.showLoading();const t=await n.getProduct(e.id),a=document.querySelector(".pages-container");return a&&a.classList.remove("hidden-pages"),r.hideLoading(),`\n    <a type="button" href='/' onClick="window.close();window.open('/')" id='backtoshop' class="btn bg-gradient btn-danger  mb-2 text-white position-absolute top-0 start-50 translate-middle-x"><i class="fas fa-arrow-circle-left p-1"></i>Inapoi<i class="fas fa-store p-1"></i></a>\n    <div class="row row-cols-1 row-cols-md-3 g-5 d-flex justify-content-center align-items-center mt-4 ">\n         <div class="col pb-md-5  ">\n            <div class="card  d-flex bg-transparent w-60 justify-content-center align-items-center shadow-lg p-3 mb-4 bg-transparent bg-gradient rounded">\n              \n                 <img src="./src/img/${t.img}.jpeg" class="card-img-top img-thumbnail  img-fluid mt-4 pointer" alt="${t.tag}">\n               \n               <div class="card-body">\n                   \n                </div>\n             </div>   \n           </div>\n           <div class="col mb-5">\n            <div class="card  d-flex  justify-content-center align-items-center shadow-lg p-3 mb-4 bg-transparent bg-gradient rounded">\n               <div class="card-body ">\n                   <h1 class="card-text">${t.name}</h1>\n                   <p class="card-text">The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>\n                   <h3 class="card-title">Preț: ${t.price}lei</h3>\n                   <h6 class="card-title succes text-muted">🟢În stoc</h6>\n                \n                   <a type="button" id="btn1" class="btn btn-danger bg-gradient add-cart pointer">Adaugă în coș<i class="fas fa-plus p-1"></i></a>\n                </div>\n             </div>   \n           </div>      \n       </div>\n       <div class="p-3"></div>            \n    `}};e.exports.default=o})),a.register("gq2gT",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.createOrder=e.exports.update=e.exports.register=e.exports.signin=e.exports.getProduct=void 0;var n=a("4g5Y6"),r=a("kt7Mb"),o=a("wCRaO");e.exports.getProduct=async e=>{try{const t=await fetch(`${n.apiUrl}/api/product/${e}`),a=await t.json();if(!t.ok)throw new Error(`${a.message} (${t.status})`);return a}catch(e){console.log(e)}};e.exports.signin=async({email:e,password:t})=>{try{const a=await fetch(`${n.apiUrl}/signin`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}),r=await a.json();if(""===t?o.showMessage("⚠️Introduceți o parolă!"):""===e&&o.showMessage("⚠️Introduceți un e-mail!"),!a.ok)throw new Error(`${r.message} (${a.status})`);return r}catch(e){o.showMessage("⚠️Conectarea nu a reușit")}};e.exports.register=async({name:e,email:t,password:a})=>{try{const r=await fetch(`${n.apiUrl}/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,email:t,password:a})}),s=await r.json();return""===a?o.showMessage("⚠️Introduceți o parolă!"):""===t?o.showMessage("⚠️Introduceți un e-mail!"):""===e&&o.showMessage("⚠️Introduceți un nume!"),s}catch(e){o.showMessage("⚠️Inregistrarea nu a reușit")}};e.exports.update=async({name:e,email:t,password:a})=>{try{const{id:o}=r.getUserInfo(),s=await fetch(`${n.apiUrl}/profile/${o}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,email:t,password:a})});return await s.json()}catch(e){console.log(e)}};e.exports.createOrder=async e=>{try{const t=await fetch(`${n.apiUrl}/api/order`,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),a=await t.json();return console.log(a),t.ok&&o.showMessage("✌️Comanda a fost plasată!"),a}catch(e){return{error:e.res?e.res.data.message:e.message}}}})),a.register("4g5Y6",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.apiUrl=void 0;e.exports.apiUrl=" https://serene-sea-96098.herokuapp.com"}));var o=f(a("jcodr")),s=a("wCRaO");a.register("iVMfY",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var n={render:()=>"<div>Eroare</div>"};e.exports.default=n}));var i=f(a("iVMfY"));a.register("54A3s",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var n=a("gq2gT"),r=a("kt7Mb"),o=a("wCRaO");const s=(e,t=!1)=>{let n=r.getCartItems();const a=n.find((t=>t.product===e.product));a?t&&(n=n.map((t=>t.product===a.product?e:t))):n=[...n,e],r.setCartItems(n),t&&o.rerender(i)},i={after_render:()=>{document.querySelector("#singin").addEventListener("click",(function(){(document.location.hash="/signin")&&window.location.reload()}));const e=document.getElementsByClassName("qty-select");Array.from(e).forEach((e=>{const t=JSON.parse(localStorage.getItem("cartItems")).find((t=>t.product===e.id));e.addEventListener("change",(e=>{s({...t,qty:Number(e.target.value)},!0)}))}));const t=document.getElementsByClassName("delete-button");Array.from(t).forEach((e=>{e.addEventListener("click",(()=>{(e=>{const t=JSON.parse(localStorage.getItem("cartItems"));r.setCartItems(t.filter((t=>t.product===Number(e)))),e===o.parseRequestUrl().id?(document.location.hash="/cart")&&window.location.reload():o.rerender(i)})(e.id)}))}))},render:async()=>{const e=o.parseRequestUrl();if(e.id){const t=await n.getProduct(e.id);s({product:t.id,name:t.name,image:t.img,price:t.price,countInStock:t.countInStock,qty:1})}const t=r.getCartItems();return`\n    <div class="content cart position-relative">\n      <div class="cart-list mt-5">\n        <ul class="cart-list-container">\n          <li>\n            <h3>Coșul meu</h3>\n            <div id="prt">🏷️Preț</div>\n          </li>\n          ${0===t.length?'<div class="h2">Coșul este gol😔</div>':t.map((e=>`\n            <li>\n              <div class="cart-image">\n                <img src="/src/img/${e.image}.jpeg" alt="${e.name}" />\n              </div>\n              <div class="cart-name">\n                <div>\n                  <a class="text-decoration-none text-dark" href="/#/product/${e.product}">\n                    ${e.name}\n                  </a>\n                </div>\n                <div>\n                📦Cantitate: \n                  <select class="qty-select" id="${e.product}">\n                  ${[...Array(e.countInStock).keys()].map((t=>e.qty===t+1?`<option selected value="${t+1}">${t+1}</option>`:`<option value="${t+1}">${t+1}</option>`))}</select>\n                  <button type="button" class="delete-button btn bg-gradient btn-danger text-white" id="${e.product}">\n                  🗑️Șterge\n                  </button>\n                </div>\n              </div>\n              <div class="cart-price">\n                ${e.price}lei\n              </div>\n            </li>\n            `)).join("\n")} \n        </ul>\n      </div>\n      <a type="button" id='backtoshop' href="/" class="btn bg-gradient btn-danger mb-5 text-white position-absolute top-0 start-50 translate-middle-x"><i class="fas fa-arrow-circle-left p-1"></i>Inapoi<i class="fas fa-store p-1"></i></a>\n      <div class="cart-action mt-5 shadow-lg p-4 mb-5 bg-transparent bg-gradient rounded">\n          <h3>\n          📋Total (${t.reduce(((e,t)=>e+t.qty),0)} produse)\n             :\n             ${t.reduce(((e,t)=>e+t.price*t.qty),0)}lei\n          </h3>\n          ${localStorage.getItem("userInfo")?'<button\n                type="button"\n                id="checkout-button"\n                onClick="window.close();window.open(\'/#/shipping\')"\n                class="primary fw btn bg-gradient btn-danger text-white"\n              >\n                Comandă\n              </button>':'<button\n                type="button"\n                id="checkout-button"\n                onClick="window.close();window.open(\'/#/signin\')"\n                class="primary fw btn bg-gradient  btn-danger text-white"\n              >\n                Comandă\n              </button>'}\n      </div>\n  \n</div>\n<div class="p-3"></div>\n\n    `}};var d=i;e.exports.default=d}));var d=f(a("54A3s"));a.register("4o9x2",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var n=a("gq2gT"),r=a("kt7Mb"),o=a("wCRaO");var s={after_render:()=>{const e=document.querySelector(".cart"),t=document.getElementById("signin-form");document.getElementById("reg").addEventListener("click",(function(){(document.location.hash="/register")&&window.location.reload()})),e.addEventListener("click",(function(){(document.location.hash="/cart")&&window.location.reload()})),t.addEventListener("submit",(async e=>{e.preventDefault(),o.showLoading();const t=await n.signin({email:document.getElementById("InputEmail").value,password:document.getElementById("InputPassword").value});o.hideLoading();const a=document.getElementById("InputEmail").value;""===document.getElementById("InputPassword").value?o.showMessage("⚠️Introduceți o parolă!"):""===a&&o.showMessage("⚠️Introduceți un e-mail!"),t.error?alert("Invalid"):(r.setuserInfo(t),o.redirectUser(),o.showMessage("✔️Autentificarea a reușit!"))}))},render:()=>(r.getUserInfo().name&&o.redirectUser(),'\n   <div class=\'container container-signin shadow-lg p-5 mb-5 bg-transparent bg-gradient rounded position-relative \'>\n   <h6 class=\'text-muted\'>👋🏻Pentru a putea achziționa un produs este necesară autentificarea</h6>\n    <form id=\'signin-form\'>\n      <div class="mb-3">\n        <label for="InputEmail" class="form-label">E-mail:</label>\n        <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp">\n      </div>\n      <div class="mb-3">\n          <label for="InputPassword" class="form-label">Parolă:</label>\n          <input type="password" class="form-control" id="InputPassword">\n      </div>\n      \n      <button type="submit" class="btn btn-danger  bg-gradient mb-3">Conectează-te</button>\n      \n    </form>\n    <a href="/#/signin" id=\'reg\' class="link-danger">😜Nu ai cont? Înregistrează-te aici!</a>\n   </div> \n   <div class="p-3"></div>\n    ')};e.exports.default=s}));var l=f(a("4o9x2"));a.register("5NDkX",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var n=a("kt7Mb");var r={render:()=>{const{id:e,name:t}=n.getUserInfo();return`\n    ${t?`<a href="/#/profile/${e}" onClick="window.close();window.open('/#/profile/${e}')" id='singin'>\n    <button\n     type="button"\n     class="btn btn-transparent pe-4"\n     data-bs-toggle="modal"\n     data-bs-target="#login"\n     >\n         <span id="cont">${t}</span><i class="fas fa-user ps-1 me-auto"></i>\n     </button>  \n </a>`:'<a href="/#/signin" onClick="window.close();window.open(\'/#/signin\')" id=\'singin\'>\n <button\n  type="button"\n  class="btn btn-transparent pe-4"\n  data-bs-toggle="modal"\n  data-bs-target="#login"\n  >\n      <span id="cont">Contul tău</span><i class="fas fa-sign-in-alt ps-1 me-auto"></i>\n  </button>  \n</a>'}           \n    `},after_render:()=>{}};e.exports.default=r}));var c=f(a("5NDkX"));a.register("cUQTD",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var n=a("gq2gT"),r=a("kt7Mb"),o=a("wCRaO");var s={after_render:()=>{const e=document.querySelector(".cart"),t=document.getElementById("register-form");e.addEventListener("click",(function(){(document.location.hash="/cart")&&window.location.reload()})),t.addEventListener("submit",(async e=>{e.preventDefault(),o.showLoading();const t=await n.register({name:document.getElementById("InputName").value,email:document.getElementById("InputEmail").value,password:document.getElementById("InputPassword").value});o.hideLoading();const a=document.getElementById("InputEmail").value,s=document.getElementById("InputPassword").value,i=document.getElementById("InputName").value;t.error?alert("Invalid"):(o.showMessage("✔️Inregistrarea a reușit!"),r.setuserInfo(t),""===s?o.showMessage("⚠️Introduceți o parolă!"):""===a?o.showMessage("⚠️Introduceți un e-mail!"):""===i&&o.showMessage("⚠️Introduceți un nume!"),o.redirectUser())}))},render:()=>(r.getUserInfo().name&&o.redirectUser(),'\n   <div class=\'container container-register shadow-lg p-5 mb-5 bg-transparent bg-gradient rounded position-relative \'> \n    <form id=\'register-form\'>\n    <div class="mb-3">\n        <label for="InputName" class="form-label">Nume:</label>\n        <input type="name" class="form-control" id="InputName">\n      </div>\n      <div class="mb-3>\n        <label for="InputEmail" class="form-label">E-mail:</label>\n        <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp">\n      </div>\n      <div class="mb-3">\n          <label for="InputPassword" class="form-label">Parolă:</label>\n          <input type="password" class="form-control" id="InputPassword">\n      </div>\n      <div class="mb-3">\n          <label for="repassword" class="form-label">Confirmare parolă:</label>\n          <input type="password" class="form-control" id="repassword">\n      </div>\n      \n      <button type="submit"  class="btn btn-danger bg-gradient mb-3">Înregistrează-te</button>\n    </form>\n    <a href="/#/signin"  onClick="window.close();window.open(\'/#/signin\')" class="link-danger pointer">👉Ai cont deja? Intră aici!</a>\n   </div> \n    ')};e.exports.default=s}));var u=f(a("cUQTD"));a.register("eWwgV",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var n=a("gq2gT"),r=a("kt7Mb"),o=a("wCRaO");var s={after_render:()=>{const e=document.getElementById("signout"),t=document.querySelector(".cart"),a=document.getElementById("profile-form");e.addEventListener("click",(function(){(document.location.hash="/")&&(window.location.reload(),r.clearUser())})),t.addEventListener("click",(function(){(document.location.hash="/cart")&&window.location.reload()})),a.addEventListener("submit",(async e=>{e.preventDefault(),o.showLoading();const t=await n.update({name:String(document.getElementById("InputName").value),email:String(document.getElementById("InputEmail").value),password:String(document.getElementById("InputPassword").value)});o.hideLoading(),t.error?alert(t.error):(r.setuserInfo(t),document.location.hash="/signin",o.redirectUser(),showMessage("✔️Schimbarea a fost efectuata!"))}))},render:()=>{const{name:e,email:t}=r.getUserInfo();return e||(document.location.hash="/"),`\n   <div class='container container-register shadow-lg p-5 mb-5 bg-transparent bg-gradient rounded position-relative '> \n   <h6 class='text-muted'>👋🏻Aici poți schimba numele, e-mailul sau parola.</h6>\n    <form id='profile-form'>\n    <div class="mb-3">\n        <label for="InputName" class="form-label">Nume:</label>\n        <input type="name" class="form-control" value="${e}" id="InputName">\n      </div>\n      <div class="mb-3>\n        <label for="InputEmail" class="form-label">Email:</label>\n        <input type="email" class="form-control" id="InputEmail" value="${t}" aria-describedby="emailHelp">\n      </div>\n      <div class="mb-3">\n          <label for="InputPassword" class="form-label">Parolă:</label>\n          <input type="password" class="form-control" id="InputPassword">\n      </div>\n      \n      <button type="submit" class="btn btn-danger bg-danger bg-gradient mb-3">Schimbă</button>\n      <button type="button"  id='signout' class="btn btn-danger bg-danger bg-gradient mb-3">Deloghează-te</button>\n    </form>\n\n   </div> \n   <div class="p-3"></div>\n    `}};e.exports.default=s}));var p=f(a("eWwgV"));a.register("l4nI5",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var n,r=(n=a("5oRL9"))&&n.__esModule?n:{default:n},o=a("kt7Mb");var s={after_render:()=>{const e=document.querySelector(".cart"),t=document.getElementById("shipping-form");e.addEventListener("click",(function(){(document.location.hash="/cart")&&window.location.reload()})),t.addEventListener("submit",(async e=>{e.preventDefault(),o.setShipping({adress:document.getElementById("adress").value,city:document.getElementById("city").value,postalCode:document.getElementById("postalcode").value,country:document.getElementById("country").value}),document.location.hash="/shipping"})),console.log(document.getElementById("adress").value)},render:()=>{const{name:e}=o.getUserInfo();e||(document.location.hash="/");const{adress:t,city:n,postalCode:a,country:s}=o.getShipping();return`\n    ${r.default.render({step1:!0,step2:!0})}\n   <div class='container container-shipping shadow-lg p-5 mb-5 bg-transparent bg-gradient rounded position-relative '> \n    <form id='shipping-form'>\n    <div class="mb-3">\n        <label for="adress" class="form-label">Adresă:</label>\n        <input type="text" class="form-control" value="${t}" id="adress">\n      </div>\n      <div class="mb-3">\n        <label for="country" class="form-label">Județ:</label>\n        <input type="country" class="form-control" value="${s}" id="country">\n      </div>\n      <div class="mb-3">\n        <label for="city" class="form-label">Oraș:</label>\n        <input type="text" class="form-control" value="${n}" id="city">\n      </div>\n      <div class="mb-3">\n      <label for="postalcode" class="form-label">Codul poștal:</label>\n      <input type="text" class="form-control" value="${a}" id="postalcode">\n    </div>\n     <button type="submit" onClick="window.close();window.open('/#/payment')" class="btn btn-danger  bg-gradient">Continuă</button>\n    </form>\n\n   </div>\n    <div class="p-3"></div>\n    `}};e.exports.default=s})),a.register("5oRL9",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var n={render:e=>`\n        <div class="container-fluid checkout-steps ">\n          <div class="${e.step1?"active":""}">Logare</div>\n          <div class="${e.step2?"active":""}">Info</div>\n          <div class="${e.step3?"active":""}">Plată</div>\n          <div class="${e.step4?"active":""}">Comandă</div>\n        </div>\n        `};e.exports.default=n}));var m=f(a("l4nI5"));a.register("9nb2b",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var n,r=(n=a("5oRL9"))&&n.__esModule?n:{default:n},o=a("kt7Mb");var s={after_render:()=>{const e=document.querySelector(".cart"),t=document.getElementById("payment-form");e.addEventListener("click",(function(){(document.location.hash="/cart")&&window.location.reload()})),t.addEventListener("submit",(async e=>{e.preventDefault();const t=document.querySelector("input[name='payment-method:checked']").value;o.setPayment({paymentMethod:t}),document.location.hash="/placeorder"}))},render:()=>{const{name:e}=o.getUserInfo();return e||(document.location.hash="/"),`\n    ${r.default.render({step1:!0,step2:!0,step3:!0})}\n   <div class='container container-payment shadow-lg mt-4 p-5 mb-3 bg-transparent bg-gradient rounded position-relative  '> \n    <form id='payment-form'>\n    <ul class="form-items">\n    <li>\n      <div>\n        <input type="radio"\n        name="payment-method"\n        id="card"\n        value="Card"\n        checked />\n        <label for="card" >💳Card</label>\n       </div> \n    </li>\n    <li>\n    <div>\n      <input type="radio"\n      name="payment-method"\n      id="cash"\n      value="Cash"\n       />\n      <label for="cash" >💶Plata la ramburs</label>\n     </div> \n  </li> \n  </ul>\n       <button type="submit"  onClick="window.close();window.open('/#/order')" class="btn btn-danger  bg-gradient">Continuă</button>\n    </form>\n\n   </div> \n    `}};e.exports.default=s}));var g=f(a("9nb2b"));a.register("gipdj",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var n,r=a("kt7Mb"),o=(n=a("5oRL9"))&&n.__esModule?n:{default:n},s=a("wCRaO"),i=a("gq2gT");const d=()=>{const e=r.getCartItems();0===e.length&&(document.location.hash="/cart");const t=r.getShipping();t.adress||(document.location="/shipping");const n=r.getPayment();n.paymentMethod||(document.location.hash="/payment");const a=e.reduce(((e,t)=>e+t.price*t.qty),0),o=a>100?0:10,s=Math.round(.15*a*100)/100;return{orderItems:e,shipping:t,payment:n,shippingPrice:o,taxPrice:s,itemsPrice:a,totalPrice:a+o+s}};var l={after_render:async()=>{document.getElementById("placeorder-button").addEventListener("click",(async()=>{const e=d();console.log(e),s.showLoading();const t=await i.createOrder(e);s.hideLoading(),t.error?s.showMessage(t.error):r.cleanCart()}))},render:()=>{const{orderItems:e,shipping:t,payment:n,itemsPrice:a,shippingPrice:r,taxPrice:s,totalPrice:i}=d();return`\n    <div>\n      ${o.default.render({step1:!0,step2:!0,step3:!0,step4:!0})}\n      <div class="order shadow-lg p-4 mb-5 bg-transparent bg-gradient rounded">\n        <div class="order-info container">\n          <div >\n            <h2>Adresa de plată</h2>\n            <div>\n            ${String(t.adress)}, ${t.city}, ${t.postalCode}, \n            ${t.country}\n            </div>\n          </div>\n          <div>\n            <h2>Metoda de plată</h2>\n            <div class="h4">\n              ${n.paymentMethod}\n            </div>\n          </div>\n          <div>\n            <ul class="cart-list-container ">\n              <li>\n                <h2>Coșul tău</h2>\n                <div id="prt">🏷️Preț</div>\n              </li>\n              ${e.map((e=>`\n                <li>\n                  <div class="cart-image">\n                    <img src="./src/img/${e.image}.jpeg" alt="${e.tag}" />\n                  </div>\n                  <div class="cart-name">\n                    <div>\n                      <a class="text-decoration-none text-dark h3" href="/#/product/${e.product}">${e.name} </a>\n                    </div>\n                    <div> Cantitate: ${e.qty} </div>\n                  </div>\n                  <div class="cart-price"> ${e.price}lei</div>\n                </li>\n                `)).join("\n")}\n            </ul>\n          </div>\n        </div>\n        <div class="order-action">\n           <ul class="position-relative">\n                <li>\n                  <h2>Sumar comandă</h2>\n                 </li>\n                 <li><div>🧾Produse</div><div>${a}lei</div></li>\n                 <li><div>🚚Taxă curier</div><div>${r}lei</div></li>\n                 <li class="total text-dark"><div>Total</div><div>${i}lei</div></li> \n                 <li>\n                 <button id="placeorder-button" class="primary fw btn btn-danger  bg-gradient position-absolute top-100 start-50 translate-middle">\n                 Plasează comanda\n                 </button>\n        </div>\n      </div>\n    </div>\n    <div class="p-3"></div>\n    `}};e.exports.default=l}));var v=f(a("gipdj"));function f(e){return e&&e.__esModule?e:{default:e}}const b={"/":r.default,"/product/:id":o.default,"/cart/:id":d.default,"/cart":d.default,"/signin":l.default,"/register":u.default,"/profile/:id":p.default,"/shipping":m.default,"/payment":g.default,"/order":v.default},h=async()=>{s.showLoading();const e=s.parseRequestUrl(),t=(e.resource?`/${e.resource}`:"/")+(e.id?"/:id":"")+(e.verb?`/${e.verb}`:""),n=b[t]?b[t]:i.default,a=document.getElementById("main-container"),r=document.getElementById("singin");await c.default.after_render(),r.innerHTML=await c.default.render(),a.innerHTML=await n.render(),n.after_render&&await n.after_render(),s.hideLoading()};window.addEventListener("load",h),window.addEventListener("haschange",h);
//# sourceMappingURL=index.fbef935a.js.map
