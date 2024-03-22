const products = document.querySelectorAll(".container div");
const products_btn = document.querySelectorAll(".container div button");
const products_img = document.querySelectorAll(".container div img.hover");
const storeMoney = localStorage.getItem("money") || 0;

const updateMoney = () => {
  document.querySelector("header").innerHTML = `
    ${storeMoney.toString().padStart(5, "0")}
    <img src="./assets/icon.png" />
  `;
}

updateMoney();

const checkMoney = () => {
  products.forEach((product, i) => {
    if (planes[i].price > localStorage.getItem("money") && !localStorage.getItem(i)) {
      product.style.filter = 'brightness(.7) grayscale(1)';
      products_btn[i].disabled = true;
      products_btn[i].style.cursor = 'not-allowed';
      products_img[i].removeAttribute("class");
    }
  });
}

checkMoney();

products.forEach((product, i) => {
  if (localStorage.getItem(i)) {
    products_btn[i].innerHTML = 'Select';
  }
});

products_btn.forEach((btn, i) => {
  const src = `.${products_img[i].src.split("AeroDash")[1]}`;

  btn.addEventListener("click", () => {
    const check = () => {
      products_btn.forEach((btn) => {
        if (btn.innerHTML === '✓') {
          if (localStorage.getItem(i)) {
            btn.innerHTML = 'Select';
          }
        }
      });

      if (btn.innerHTML === 'Select') {
        products_btn.forEach((btn) => {
          if (btn.innerHTML === '✓') {
            btn.innerHTML = 'Select';
          }
        });
        btn.innerHTML = '✓';
        localStorage.removeItem("plane");
      }

      if (localStorage.getItem(i) && localStorage.getItem("plane") === src) {
        btn.innerHTML = 'Select';
        localStorage.removeItem("plane");
      } else if (localStorage.getItem(i)) {
        localStorage.setItem("plane", src);
        btn.innerHTML = '✓';
      }
    }

    if (planes[i].price <= localStorage.getItem("money")) {
      localStorage.setItem(i, true);
      localStorage.setItem("money", Number(localStorage.getItem("money") - planes[i].price));
    }

    check();
    checkMoney();
    updateMoney();
  });

  if (localStorage.getItem("plane") === src) {
    btn.innerHTML = '✓';
  }
});