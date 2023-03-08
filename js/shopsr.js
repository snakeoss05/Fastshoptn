const navbtn = document.getElementById("navbar-toggler");
const navbarlist = document.getElementById("sidebar");
navbtn.addEventListener("click", () => navbarlist.classList.toggle("show"));

function openabout() {
  const open = document.getElementById("about");
  open.style.display = "flex";
}
function closeabout() {
  const close = document.getElementById("about");
  close.style.display = "none";
}

function closeCart() {
  const cart = document.querySelector(".producstOnCart");
  cart.classList.toggle("hide");
  document.querySelector("body").classList.toggle("stopScrolling");
}

const openShopCart = document.querySelector(".shoppingCartButton");
openShopCart.addEventListener("click", () => {
  const cart = document.querySelector(".producstOnCart");
  cart.classList.toggle("hide");
  document.querySelector("body").classList.toggle("stopScrolling");
});

const closeShopCart = document.querySelector("#closeButton");
const overlay = document.querySelector(".overlay");

let btn = document.getElementById("scrolltotop");
window.onscroll = function () {
  if (window.scrollY >= 1000) {
    btn.style.display = "inline-block";
  } else {
    btn.style.display = "none";
  }
};
btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

let activ = document.querySelectorAll("ul li");
activ.forEach(function (ele) {
  ele.onclick = function () {
    activ.forEach(function (ele) {
      ele.classList.remove("active");
    });
    ele.classList.add("active");
  };
});

let navbar1 = document.getElementById("header12");
window.addEventListener("scroll", function () {
  if (window.scrollY < 570) {
    navbar1.style.background = "none";
    navbar1.style.boxShadow = "none";
  } else {
    navbar1.style.background = "rgb(246 246 248 / 66%)";
    navbar1.style.boxShadow = "0px 5px 15px #44414179";
  }
});

function searchfilter() {
  const searchinput = document.querySelector("#search-input");
  const productList = document.querySelector("#product-list-search");

  // <div class="productsearch"><img class="imgsearch" src="product.img"><p></p><p></p></div>
  searchinput.addEventListener("input", (event) => {
    const searchterm = event.target.value.toLowerCase();
    const value = event.target.value;
    const filteredProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(searchterm);
    });

    productList.innerHTML = "";

    if (value == "") {
      productList.style.display = "none";
    }

    if (value != "") {
      productList.style.display = "flex";
      filteredProducts.forEach((product) => {
        productList.innerHTML += `<li><img class="imgsearch" src="${product.img}"><p>${product.title}</p><p>${product.price}DT</p></li>`;
      });
    }
  });
}
searchfilter();
const toggleBtn = document.querySelector(".navbar-toggle");
const navLinks = document.querySelector(".navbar-nav");

toggleBtn.addEventListener("click", function () {
  navLinks.classList.toggle("show");
  toggleBtn.classList.toggle("collapsed");
});
