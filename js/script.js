const productList = document.querySelector("#productList");

let products = ["melk", "saft", "egg"];

console.log(products);

for (let i = 0; i < products.length; i++) {
	productList.innerHTML += `<li>${products[i]}</li>`;
}
