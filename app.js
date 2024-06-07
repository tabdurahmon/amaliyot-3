const temp = document.querySelector("template");
const ul = document.querySelector("ul");

const updateUI = (products) => {
  ul.innerHTML = "";
  products.forEach((product) => {
    const clone = temp.content.cloneNode(true);

    const h3 = clone.querySelector("h3");
    const h4 = clone.querySelector("h4");
    const link = clone.querySelector("a");

    h3.textContent = `Title: ${product.title}`;
    h4.textContent = `Price: $${product.price}`;
    link.setAttribute("href", `about.html?id=${product.id}`);
    ul.appendChild(clone);
  });
};

const getData = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data.products;
};

const loading = async () => {
  const products = await getData();
  updateUI(products);
};

document.addEventListener("DOMContentLoaded", loading);
