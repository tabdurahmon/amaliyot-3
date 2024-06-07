document.addEventListener("DOMContentLoaded", async () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const productId = urlParams.get("id");

  const getData = async (url) => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  };

  const updateUI = (product) => {
    const productDetails = document.getElementById("product-details");
    productDetails.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}" class="w-full h-64 object-cover rounded-t-lg">
            <div class="mt-4">
                <h2 class="text-3xl font-bold">${product.title}</h2>
                <p class="text-gray-600 mt-2">${product.description}</p>
                <p class="text-gray-800 font-semibold mt-4">$${product.price}</p>
                <p class="text-gray-800 font-semibold mt-2">Brand: ${product.brand}</p>
                <p class="text-gray-800 font-semibold mt-2">Category: ${product.category}</p>
                <p class="text-gray-800 font-semibold mt-2">Rating: ${product.rating}</p>
                <p class="text-gray-800 font-semibold mt-2">Stock: ${product.stock}</p>
            </div>
        `;
  };

  const API = "https://dummyjson.com/products";
  if (productId) {
    const productData = await getData(`${API}/${productId}`);
    updateUI(productData);
  }
});
