const container = document.querySelector('footer .container');

const planes = [
    plane1 = {
        name: 'Airbus',
        price: 1000,
        img: './assets/ap-1.webp',
    },

    plane2 = {
        name: 'Boeing',
        price: 2000,
        img: './assets/ap-2.webp',
    },

    plane3 = {
        name: 'Cessna Centurion',
        price: 3000,
        img: './assets/ap-3.webp',
    },

    plane4 = {
        name: 'Cessna',
        price: 4000,
        img: './assets/ap-4.webp',
    },
];

planes.forEach((plane) => {
  container.innerHTML += `
    <div class="spawn">
     <img src=${plane.img} alt=${plane.name}>
     <h2>${plane.name}</h2>
     <button>
       ${plane.price}
       <img src="./assets/icon.png" />
     </button>
    </div>
  `;
});