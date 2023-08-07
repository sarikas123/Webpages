const addToCartButton = document.getElementById("addToCartButton");
addToCartButton.addEventListener("click", addToCart);

function addToCart() {
    alert("Item has been added to the cart!");
}
function toggleUnderline(element) {
    element.classList.toggle("clicked");
  }