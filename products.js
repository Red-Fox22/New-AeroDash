const container = document.querySelector('footer .container');

const planes = [
  plane1 = {
    name: 'Airbus',
    price: 1100,
    img: './assets/ap-1.webp',
  },

  plane2 = {
    name: 'Boeing',
    price: 3200,
    img: './assets/ap-2.webp',
  },

  plane3 = {
    name: 'Cessna C.',
    price: 5500,
    img: './assets/ap-3.webp',
  },

  plane4 = {
    name: 'Cessna',
    price: 6000,
    img: './assets/ap-4.webp',
  },

  plane5 = {
    name: 'Fighter',
    price: 11000,
    img: './assets/ap-5.webp',
  },
];

for (const plane of planes) {
  container.innerHTML += `
    <div class="spawn">
     <img src=${plane.img} class="hover" alt="${plane.name}">
     <h2>${plane.name}</h2>
     <button>
       ${plane.price}
       <img src="./assets/icon.png" />
     </button>
    </div>
  `;
}