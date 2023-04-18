const product = [
  {
    name: "Klavye",
    price: "1000",
  },
  {
    name: "Mouse",
    price: "900",
  },
  {
    name: "Laptop",
    price: "15000",
  },
  {
    name: "Kulaklık",
    price: "1200",
  },
  {
    name: "Hoparlör",
    price: "500",
  },
  {
    name: "Monitör",
    price: "1200",
  },
];

let productHTML = "";
let productDiv = document.querySelector(".product");
product.forEach((item) => {
  productHTML += `<div class="card my-2" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text">${item.price}</p>
      <button type="button" class="btn btn-primary">Sepete Ekle</button>
    </div>
  </div>`;
});
productDiv.insertAdjacentHTML("beforeend", productHTML);

let cartDiv = document.querySelector(".cart");
let addToCartButtons = document.querySelectorAll(".btn-primary");
addToCartButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    let productName = product[index].name;
    let productPrice = product[index].price;

    addToCart(productName, productPrice);
  });
});

function addToCart(name, price) {
  cartHTML = `<div class="card my-2" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">${price}</p>
  </div>
</div>`;
  cartDiv.insertAdjacentHTML("beforeend", cartHTML);
}

function search() {
  let inputText = document.querySelector("#search").value.toLowerCase();
  let cards = document.getElementsByClassName("card");
  let cardTitles = document.getElementsByClassName("card-title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < cards.length; i++) {
    a = cardTitles[i];
    if (a.innerHTML.toLowerCase().indexOf(inputText) > -1) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
}
