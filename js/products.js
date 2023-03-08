const totaitems = document.getElementById("totalitems");
const cartitemel = document.querySelector("#buyItems");
const subtotal = document.getElementById("sum-prices");
const productslist = document.getElementById("product123");

const products = [
  {
    id: 1,
    size: "",
    title: "itadori",
    price: 55,
    instock: 5,
    img: "/img/t-shirt/goku black.png",
    blue: "/img/t-shirt/goku blue.png",
    red: "/img/t-shirt/goku red.png",
    productsize: ["S", "L", "M", ""],
    catagory: "naruto",
    color: ["#000000", "#000080", "#6c0a1d"],
  },
  {
    id: 2,
    size: "",
    title: "naruto",
    price: 35,
    instock: 9,
    img: "/img/t-shirt/2.png",
    blue: "/img/t-shirt/284136159_1175569153204431_8788827963221405785_n.png",
    red: "/img/t-shirt/10.png",
    productsize: ["S", "L", "M", "XL"],
    catagory: "naruto",
    color: ["red", "#blue"],
  },
  {
    id: 3,
    title: "luffy",
    price: 70,
    instock: 5,
    img: "/img/t-shirt/10.png",
    blue: "/img/t-shirt/283433834_509077364284040_2207046840645701390_n.png",
    red: "",
    size: "",
    productsize: ["S", "L", "", "XL"],
    catagory: "naruto",
    color: ["black", "white", "red"],
  },
  {
    id: 4,

    title: "zoro",
    price: 35,
    instock: 5,

    img: "/img/t-shirt/282053248_734567301059857_1498013077858499460_n.png",
    blue: "/img/t-shirt/284333649_397024012355878_1761539358732041269_n.png",
    red: "",
    productsize: ["S", "L", "M", "XL"],
    catagory: "naruto",
    size: "",
    color: ["red", "blue"],
  },
  {
    id: 5,
    title: "namiqdqsd",
    price: 30,
    instock: 7,
    size: "",
    img: "/img/t-shirt/4.png",
    blue: "/img/t-shirt/30.png",
    red: "",
    productsize: ["S", "L", "M", ""],
    catagory: "itachi",
    color: ["white", "black"],
  },
  {
    id: 6,
    title: "kilwaaqzeazeaze",
    price: 35,
    instock: 5,
    size: "",
    img: "/img/t-shirt/284333649_397024012355878_1761539358732041269_n.png",
    blue: "/img/t-shirt/8.png",
    red: "",
    productsize: ["S", "L", "M", "XL"],
    catagory: "itachi",
    color: ["white", "black"],
  },
  {
    id: 7,
    title: "gon",
    price: 35,
    instock: 5,
    size: "",
    img: "/img/t-shirt/282064951_573112734134766_5135043592274129304_n.png",
    blue: "/img/t-shirt/30.png",
    red: "",
    productsize: ["S", "L", "", "XL"],
    catagory: "black clover",
    color: ["red", "blue"],
  },
  {
    id: 8,
    title: "kilwa",
    price: 32,
    instock: 7,
    size: "",
    img: "/img/t-shirt/9.png",
    blue: "",
    red: "/img/t-shirt/6.png",
    productsize: ["S", "L", "M", "XL"],
    catagory: "one piece",
    color: ["red", "blue"],
  },
  {
    id: 9,
    title: "kilwa",
    price: 32,
    instock: 7,
    size: "",
    img: "/img/t-shirt/Valhalla Tokyo Revengers Hoodie - White2 _ XXL.jpg",
    blue: "",
    red: "/img/t-shirt/6.png",
    productsize: ["S", "L", "M", "XL"],
    catagory: "itachi",
    color: ["red", "blue"],
  },
  {
    id: 10,
    title: "kilwa",
    price: 32,
    instock: 7,
    size: "",
    img: "/img/t-shirt/hoodie/Hisoka Hoodie - Hunter X Hunter - Black _ M.jpg",
    blue: "",
    red: "/img/t-shirt/Darling In The Franxx Zero Two Unisex Hoodie - gary _ XL.jpg",
    productsize: ["S", "L", "M", "XL"],
    catagory: "one piece",
    color: ["red", "blue"],
  },
  {
    id: 11,
    title: "kilwa",
    price: 32,
    instock: 7,
    size: "",
    img: "/img/t-shirt/Himiko Toga My Hero Academia Anime_Manga Graphic Hoodie - Yellow _ S.jpg",
    blue: "",
    red: "/img/t-shirt/6.png",
    productsize: ["S", "L", "M", "XL"],
    catagory: "black clover",
    color: ["red", "blue"],
  },
  {
    id: 12,
    title: "kilwa",
    price: 32,
    instock: 7,
    size: "",
    img: "/img/t-shirt/Darling In The Franxx Zero Two Unisex Hoodie - gary _ XL.jpg",
    blue: "",
    red: "/img/t-shirt/Darling In The Franxx Zero Two Unisex Hoodie - gary _ XL.jpg",
    productsize: ["S", "L", "M", "XL"],
    catagory: "black clover",
    color: ["red", "blue"],
  },
  {
    id: 13,
    title: "kilwa",
    price: 32,
    instock: 7,
    size: "",
    img: "/img/t-shirt/Anime My Hero Academia Hoodie Shoto Todoroki Pullover Sweatshirts Boku No Hero S.jpg",
    blue: "",
    red: "/img/t-shirt/hoodie/Anime Hoodies, Cosplay Hoodies, Japanese Cartoon Manga Hoodies.jpg",
    productsize: ["S", "L", "M", "XL"],
    catagory: "black clover",
    color: ["red", "blue"],
  },
  {
    id: 14,
    title: "kilwa",
    price: 32,
    instock: 7,
    size: "",
    img: "/img/t-shirt/hoodie/Attack on Titan Hoodie Levi Ackerman - same picture 5 _ S.jpg",
    blue: "",
    red: "/img/t-shirt/hoodie/Attack on Titan Hoodie Levi Ackerman - same picture 5 _ S.jpg",
    productsize: ["S", "L", "M", "XL"],
    catagory: "one piece",
    color: ["red", "blue"],
  },
  {
    id: 15,
    title: "kilwa",
    price: 32,
    instock: 7,
    size: "",
    img: "/img/t-shirt/narutoppae.jpg",
    blue: "",
    red: "/img/t-shirt/hoodie/Cosplay School Anime Denim Jacket Uchiha Sasuke Jeans Sweatshirt Men And Women Autumn Hooded Coats Costumes _ CosplayWare _ Up to 75% Off _ Free Shipping.jpg",
    productsize: ["S", "L", "M", "XL"],
    catagory: "one piece",
    color: ["red", "blue"],
  },
  {
    id: 16,
    title: "kilwa",
    price: 32,
    instock: 7,
    size: "",
    img: "/img/t-shirt/hoodie/Tokyo Revengers Sano Manjirou Hoodie - Black _ XL.jpg",
    blue: "",
    red: "/img/t-shirt/hoodie/Tokyo Revengers Sano Manjirou Hoodie - Black _ XL.jpg",
    productsize: ["S", "L", "M", "XL"],
    catagory: "naruto",
    color: ["red", "blue"],
  },
];

window.addEventListener("DOMContentLoaded", () => {
  const catagorycontainer = document.getElementById("btncatagory");
  catagorycontainer.innerHTML = `<h3>Catagorys</h3>`;
  let catagorybt = [...new Set(products.map((item) => item.catagory))];

  const cotogrybtn = catagorybt
    .map((btn) => {
      return `<button id="filterbtn" class="gorybtn"  data-id="${btn}">${btn}</button>`;
    })
    .join("");

  catagorycontainer.innerHTML += cotogrybtn;

  renderProdcuts(products);
  pagination();
  const btncatagorys = document.querySelectorAll("#filterbtn");
  btncatagorys.forEach((btnc) => {
    btnc.addEventListener("click", () => {
      const catagory = btnc.dataset.id;
      const menucatagory = products.filter(function (item) {
        if (item.catagory === catagory) {
          return item;
        }
      });
      if (catagory === "all") {
        renderProdcuts(products);
      } else {
        renderProdcuts(menucatagory);
      }
    });
  });
  btncatagorys.forEach((event) => {
    event.addEventListener("click", (e) => {
      btncatagorys.forEach(function (event) {
        event.classList.remove("whitebg");
      });
      event.classList.add("whitebg");
    });
  });
});

function pagination() {
  const paginationbut = document
    .getElementById("pagination")
    .querySelectorAll("button");
  let currentPage = 1;
  paginationbut[0].classList.add("bluebg");

  paginationbut.forEach((e) => {
    e.addEventListener("click", () => {
      paginationbut.forEach((e) => {
        e.classList.remove("bluebg");
      });

      e.classList.add("bluebg");
      currentPage = e.textContent;
      const displaypages = getCurrentPageItems();
      renderProdcuts(displaypages);
    });
  });

  const ITEMS_PER_PAGE = 8;

  function getCurrentPageItems() {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    return products.slice(startIndex, endIndex);
  }
}

function renderProdcuts(menuitems) {
  let displaymenu = menuitems.map((product) => {
    return `
    
	  <article class="shop-item">
		  <div class="shop-item-image">
			  <img class="shop-item-image item-photo"  id="${product.id}" src="${product.img}">
			  <div class="info" id="informa">
				  <h8>The Description</h8>
				  <ul>
					  <li><strong>Taille : </strong>S M L XL</li>
					  <li><strong>Color : </strong><div class="icon-circle " onclick="checkId('white',this)" style="background-color:${product.color[0]} ;" ></div><div  onclick="checkId('blue',this)" class="icon-circle "  style="background-color:${product.color[1]} ;" >
					  </div>
						  <div class="icon-circle" onclick="checkId('red',this)" style="background-color:${product.color[2]} ;" ></div>
					  </li>
					  <li><strong>Cutton : </strong>100%</li>
					  <li><strong> livraison rapide sous 48-72 H</strong></li>
					  <li><strong> livraison gratuite en Tunisie à partir de 50 dinars d'achats*</strong></li>
				  </ul>
			  </div>
		  </div>
		  <span class="shop-item-title">${product.title}</span>
		  <div class="shop-item-details">
			  <div class="star">
				  <i class="bi bi-star-fill"></i>
				  <i class="bi bi-star-fill"></i>
				  <i class="bi bi-star-fill"></i>
				  <i class="bi bi-star-fill"></i>
				  <i class="bi bi-star-fill"></i>
			  </div>
			  <div iid="descriptionproduct" >
				  <span class="shop-item-price">${product.price}DT</span>
				  <ul class="uld" id="${product.id}" >
				  <button onclick="taillet(this)" class="item-size">S</button>
				  <button onclick="taillet(this)" class="item-size" >M</button>
				  <button onclick="taillet(this)" class="item-size">L</button>
				  <button onclick="taillet(this)" class="item-size">XL</button>
				  </ul>
				  <button class=" btn btn-primary shop-item-button "  onclick="addToCart(${product.id})"    type="button">ADD TO CART</button>
				  </div>
				  </div>
	  </article>
		  `;
  });
  displaymenu = displaymenu.join("");
  productslist.innerHTML = displaymenu;
}

function taillet(elem) {
  var element = elem;
  const allbtn = element.parentElement.querySelectorAll("button");
  elem.classList.add("blackbg");
  allbtn.forEach((e) => {
    e.classList.remove("blackbg");
  });
  elem.classList.add("blackbg");
  products.forEach((item) => {
    if (element.parentElement.id == item.id) {
      if (item.productsize.includes(element.innerHTML)) {
        item.size = element.innerHTML;
      } else {
        element.classList.remove("blackbg");
        element.style.textDecoration = "line-through red 2px";
        element.innerHTML += `<p style="font-size: 20px;
					position: absolute;
					top: 10px;
					left:40px;
					color: red;">OUT OF STOCK</p>`;

        setTimeout(function () {
          element.parentNode.querySelector("p").remove();
          element.style.textDecoration = "none";
        }, 2000);
      }
    }
  });
}

function checkId(color, elem) {
  products.forEach((product) => {
    if (
      elem.parentNode.parentElement.parentElement.parentElement.querySelector(
        "img"
      ).id == product.id
    ) {
      if (color === "white" && product.img !== "") {
        elem.parentNode.parentElement.parentElement.parentElement.querySelector(
          "img"
        ).src = product.img;
      }

      if (color === "blue") {
        if (product.blue !== "") {
          elem.parentNode.parentElement.parentElement.parentElement.querySelector(
            "img"
          ).src = product.blue;
        } else {
          elem.innerHTML = `<p style="     
					display: flex;
					text-align: center;
					font-size: 20px;
					color: #ff3305;
					Z-index: 46;
					position: relative;
					left: 109px;
					top: -37px;

					
				">OUT OF STOCK</p>`;
        }
      }

      if (color === "red") {
        if (product.red !== "") {
          elem.parentNode.parentElement.parentElement.parentElement.querySelector(
            "img"
          ).src = product.red;
        } else {
          elem.innerHTML = `<p style="     display: flex;
					align-items: center;
					text-align: center;
					align-content: center;
					flex-wrap: nowrap;
					justify-content: center;
					font-size:25px;
					color:white;
					
				">X</p>`;
        }
      }
    }
  });
}

let cart = JSON.parse(localStorage.getItem("CART")) || [];
updatecart();
// ADD TO CART
function addToCart(id) {
  // check if prodcut already exist in cart
  if (cart.some((item) => item.id === id)) {
    changenumberofunite("plus", id);
  } else {
    const item = products.find((product) => product.id === id);
    cart.push({
      ...item,
      numberofunits: 1,
    });
  }
  updatecart();
}

function updatecart() {
  rendercartitems();
  rendersubtotal();

  localStorage.setItem("CART", JSON.stringify(cart));
}

//calculate subtotal
function rendersubtotal() {
  let totalprice = 0,
    totaleitems = 0;
  cart.forEach((item) => {
    totalprice += item.price * item.numberofunits;
    totaleitems += item.numberofunits;
  });
  subtotal.innerHTML = `${totalprice}DT`;
  totaitems.innerHTML = totaleitems;
}

//render cart items

function rendercartitems() {
  cartitemel.innerHTML = ""; //clear cart element

  cart.forEach((item) => {
    cartitemel.innerHTML += `
		<li class="buyItem">
		<img  src="${item.img}">
		<div>
			<p>${item.title}</p>
			<p>${item.price}DT</h6>
			<p>${item.size}</p>
			<div>
				<button class="button-minus" onclick="changenumberofunite('minus',${item.id})" >-</button>
				<span class="countOfProduct">${item.numberofunits}</span>
				<button class="button-plus" onclick="changenumberofunite('plus',${item.id})" >+</button>
				<button id="removeitem" onclick="removeitemfromcart(${item.id})" >REMOVE</button>
				
			</div>
		</div></li>`;
  });
}

function changenumberofunite(action, id) {
  cart = cart.map((item) => {
    let numberofunits = item.numberofunits;
    if (item.id === id) {
      if (action === "minus" && numberofunits >= 1) {
        numberofunits--;
      } else if (action === "plus" && numberofunits < item.instock) {
        numberofunits++;
      }
    }
    return {
      ...item,
      numberofunits,
    };
  });
  updatecart();
}

function removeitemfromcart(id) {
  cart = cart.filter((item) => item.id !== id);
  updatecart();
}
let itemincart = document.getElementById("itemp");

let eaasbat = cart
  .map(
    (
      item
    ) => `<div class="itemlist"><span>${item.title}</span><img class="cart-item-image " src="${item.img}" alt=""><p class="prictex">${item.price}DT</p><p class="prictex">${item.numberofunits}</p><h5 style="position:relative;left:-73px;font-size:larger ;color:#000000bd;">${item.size}</h5>
	 </div>`
  )
  .join("");

itemincart.innerHTML = eaasbat;

let pricsqe = document.getElementById("sum-prices");

document.getElementById("fsum-prices").innerHTML = pricsqe.innerHTML;

var inputs, index;

inputs = document.getElementsByClassName("ppp");
let p = document.getElementsByClassName("lll");
const btn1 = document.getElementById("closi");
const el1 = document.getElementById("over");
const elm = document.getElementById("buyitem");
elm.addEventListener("click", () => {
  for (index = 0; index < inputs.length; index++) {
    let x = inputs;

    if (x[0].value == "") {
      p[0].style.display = "flex";
      setTimeout(function () {
        p[0].style.display = "none";
      }, 2700);
    }
    if (x[1].value == "") {
      p[1].style.display = "flex";
      setTimeout(function () {
        p[1].style.display = "none";
      }, 2700);
    }
    if (x[2].value == "") {
      p[2].style.display = "flex";
      setTimeout(function () {
        p[2].style.display = "none";
      }, 2700);
    }
    if (x[3].value == "") {
      p[3].style.display = "flex";
      setTimeout(function () {
        p[3].style.display = "none";
      }, 2700);
    }
    if (x[4].value == "") {
      p[4].style.display = "flex";

      setTimeout(function () {
        p[4].style.display = "none";
      }, 2700);
    } else if (/\w+@\w+\.(com|net)/gi.test(x[4].value)) {
      x[4].placeholder = "please enter valid email";
    } else if (
      x[0].value != "" &&
      x[1].value != "" &&
      x[2].value != "" &&
      x[3].value != "" &&
      x[4].value != ""
    ) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your Order has been Send it will call u soon",
        imageUrl: "/img/istockphoto-1063232648-612x612.jpg",
        imageWidth: 500,
        imageHeight: 350,
        imageAlt: "Custom image",
      });
    }
  }
});
btn1.addEventListener("click", () => {
  el1.style.display = "none";
});

window.onload = () => {
  inputs[0].focus();
};
