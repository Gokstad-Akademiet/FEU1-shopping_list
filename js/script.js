const productInput = document.querySelector("#productInput");
const productSubmitBtn = document.querySelector("#productSubmit");
const productList = document.querySelector("#productList");
const removeFirstBtn = document.querySelector("#removeFirst");
const removeLastBtn = document.querySelector("#removeLast");
const removeRandomBtn = document.querySelector("#removeRandom");

// let products = ["melk", "saft", "egg"];
let products = ["en", "to", "tre", "fire", "fem", "seks", "syv", "åtte", "ni", "ti"];

products.forEach((product) => {
	productList.innerHTML += `<li>${product}</li>`;
});

productSubmitBtn.addEventListener("click", addProduct);
removeFirstBtn.addEventListener("click", removeFirst);
removeLastBtn.addEventListener("click", removeLast);
removeRandomBtn.addEventListener("click", removeRandom);

function addProduct() {
	products.push(productInput.value);
	console.log(products);
	productList.innerHTML = "";
	for (let i = 0; i < products.length; i++) {
		productList.innerHTML += `<li>${products[i]}</li>`;
	}
}

function removeFirst() {
	products.shift();
	productList.innerHTML = "";
	for (let i = 0; i < products.length; i++) {
		productList.innerHTML += `<li>${products[i]}</li>`;
	}
}

function removeLast() {
	products.pop();
	productList.innerHTML = "";
	for (let i = 0; i < products.length; i++) {
		productList.innerHTML += `<li>${products[i]}</li>`;
	}
}

function removeRandom() {
	let x = Math.floor(Math.random() * products.length);
	console.log(products);
	console.log("det er " + products.length + " elementer, ta bort index " + x + " i listen");
	products.splice(x - 1, 1); // x-1 betyr at den skal ta bort elementet med index x og ikke på posisjon x
	productList.innerHTML = "";
	for (let i = 0; i < products.length; i++) {
		productList.innerHTML += `<li>${products[i]}</li>`;
	}
	console.log(products);
}
