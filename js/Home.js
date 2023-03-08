
const productshome= [
	{
		id: 1,
		size:"",
		title: "t-shirt itadori",
		price: 55,
		instock: 5,
		img: "/img/t-shirt/Black Clover Hoodie Asta.jpg",
		
		productsize: ["S", "L", "M", ""],
		catagory:"naruto",
		
	},
	{
		id: 2,
		size:"",
		title: "t-shirt itadori",
		price: 35,
		instock: 9,
		img: "/img/t-shirt/Sweat avec capuche mixte de Livai - Blanc _ M.jpg",
		
		productsize: ["S", "L", "M", "XL"],
		catagory:"naruto",
		
  },
  {
	id: 3,
	title: "t-shirt itadori",
	  price: 70,
	  instock: 5,
	  img: "/img/t-shirt/Valhalla Tokyo Revengers Hoodie - White2 _ XXL.jpg",
	
	
	  productsize: ["S", "L", "", "XL"],
	  catagory:"naruto",
  },
  {
    id: 4,
    
    title: "t-shirt itadori",
	  price: 35,
	  instock: 5,
	 
	  img: "/img/t-shirt/Himiko Toga My Hero Academia Anime_Manga Graphic Hoodie - Yellow _ S.jpg",
	  
	  productsize: ["S", "L", "M", "XL"],
	  catagory:"naruto",
	  size:"",
	},
	{
		id: 5,
		title: "t-shirt itadori",
		  price: 30,
		  instock: 7,
		  size:"",
		img: "/img/t-shirt/Japanese Anime Harajuku Asta Black Clover Vintage Graphic Hoodie - Pink _ L.jpg",
		
		productsize: ["S", "L", "M", ""],
		catagory:"itachi",
	},
	{
		id: 6,
		title: "t-shirt itadori",
		  price: 35,
		  instock: 5,
		  size:"",
		img: "/img/t-shirt/Japanese Harajuku Darling In The Franxx Zero Two Vintage Graphic Hoodie - Yellow _ L.jpg",
		
		productsize: ["S", "L", "M", "XL"],
		catagory:"itachi",
	},
	{
		id: 7,
		title: "t-shirt itadori",
		  price: 35,
		  instock: 5,
		  size:"",
		img: "/img/t-shirt/Jujutsu Kaisen Gojo Satoru Anime Pullover Hoodie Coat Casual Outerwear Tops.jpg",
	
		productsize: ["S", "L", "", "XL"],
		catagory:"itachi",
	  },
      {
		id: 8,
		title: "t-shirt itadori",
		  price: 32,
		  instock: 7,
		  size:"",
		  img: "/img/t-shirt/Pull Hunter x Hunter Kirua - Noir _ XL.jpg",
		  
		  productsize: ["S", "L", "M", "XL"],
		  catagory:"itachi",
	  },

];



const producthome = document.querySelector('#product12345');

function renderproducthome() {
	productshome.forEach((product) => {
		return  producthome.innerHTML+=`
	  <article class="shop-item">
		  <div class="shop-item-image">
			  <img class="shop-item-image item-photo"  id="${product.id}" src="${product.img}">
			  <div class="info" id="informa">
				  <h8>The Description</h8>
				  <ul>
					  <li><strong>Taille : </strong>S M L XL</li>
					  
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
			  <div id="descriptionproduct" >
				  <span class="shop-item-price">${product.price}DT</span>
			      <section class="countdown-container">
    
      <div class="days-container">
        <div class="days"></div>
        <div class="days-label">days</div>
      </div>
    
      <div class="hours-container">
        <div class="hours"></div>
        <div class="hours-label">hours</div>
      </div>
    
      <div class="minutes-container">
        <div class="minutes"></div>
        <div class="minutes-label">minutes</div>
      </div>
    
      <div class="seconds-container">
        <div class="seconds"></div>
        <div class="seconds-label">seconds</div>
      </div>
    
    </section>
				  
				  </div>
				  </div>
				 
	  </article>
		  `;

	})
	
}
renderproducthome();

const countDownClock = (number = 100, format = 'seconds') => {
  
  const d = document;
  const daysElement = d.querySelectorAll('.days');

  const hoursElement = d.querySelectorAll('.hours');
  const minutesElement = d.querySelectorAll('.minutes');
  const secondsElement = d.querySelectorAll('.seconds');
  let countdown;
  convertFormat(format);
  
  
  function convertFormat(format) {
    switch(format) {
      case 'seconds':
        return timer(number);
      case 'minutes':
        return timer(number * 60);
        case 'hours':
        return timer(number * 60 * 60);
      case 'days':
        return timer(number * 60 * 60 * 24);             
    }
  }

  function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;

    countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);

      if(secondsLeft <= 0) {
        clearInterval(countdown);
        return;
      };

      displayTimeLeft(secondsLeft);

    },1000);
  }

  function displayTimeLeft(seconds) {
    daysElement.forEach((d) => {
      d.textContent = Math.floor(seconds / 86400);
    })
    
    hoursElement.forEach((h) => {
      h.textContent = Math.floor((seconds % 86400) / 3600);
    })
    minutesElement.forEach((m) => {
      m.textContent = Math.floor((seconds % 86400) % 3600 / 60);
    })
    secondsElement.forEach((s) => {
      s.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
    })
  }
}


/*
  start countdown
  enter number and format
  days, hours, minutes or seconds
*/


window.addEventListener('DOMContentLoaded', () => {
	
	
  countDownClock(20, 'days')
  
	
	

})
