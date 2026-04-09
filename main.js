const elList = document.querySelector(".list-items");
const elCart = document.querySelector(".cart-items");
const elTotal = document.querySelector(".total-price");
const products = [
  { id: 1, name: "Apple", price: 5000 },
  { id: 2, name: "Banana", price: 8000 },
  { id: 3, name: "Pomegranate", price: 12000 },
];
let cart = [];
function renderCards() {
  elList.innerHTML = "";
  products.forEach((element) => {
    elList.innerHTML += `
        <li>
            <h5>${element.name}</h5>
            <p>${element.price} sum</p>
            <button class="add" onclick="addToCart(${element.id})">Add</button>
        </li>
        `;
  });
}
function addToCart(id) {
  const product = products.filter((element) => element.id === id);
  cart.push(product[0]);
  renderCart();
}
function renderCart() {
  elCart.innerHTML = "";
  if (cart.length === 0) {
    elTotal.textContent = "Total: 0 sum";
    return;
  }
  cart.forEach((element, index) => {
    elCart.innerHTML += `
        <li>
            <h5>${element.name}</h5>
            <p>${element.price} sum</p>
            <button class="delete" onclick="deleteItem(${index})">Delete</button>
        </li>
        `;
  });
  getTotalPrice();
}
function deleteItem(index) {
  cart = cart.filter((element, i) => i !== index);
  renderCart();
}
function getTotalPrice() {
  let total = 0;
  cart.forEach((element) => {
    total += element.price;
  });
  elTotal.textContent = "Total: " + total + " sum";
}

renderCards();
