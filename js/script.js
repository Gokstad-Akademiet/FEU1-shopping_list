/* forEach */

/* const productInput = document.querySelector("#productInput");
const productSubmitBtn = document.querySelector("#productSubmit");
const productList = document.querySelector("#productList");
const removeFirstBtn = document.querySelector("#removeFirst");
const removeLastBtn = document.querySelector("#removeLast");
const removeRandomBtn = document.querySelector("#removeRandom");

let products = ["melk", "saft", "egg"];

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
	products.forEach((product) => {
		productList.innerHTML += `<li>${product}</li>`;
	});
}

function removeFirst() {
	products.shift();
	productList.innerHTML = "";
	products.forEach((product) => {
		productList.innerHTML += `<li>${product}</li>`;
	});
}

function removeLast() {
	products.pop();
	productList.innerHTML = "";
	products.forEach((product) => {
		productList.innerHTML += `<li>${product}</li>`;
	});
}

function removeRandom() {
	let x = Math.floor(Math.random() * products.length);
	products.splice(x - 1, 1);
	productList.innerHTML = "";
	products.forEach((product) => {
		productList.innerHTML += `<li>${product}</li>`;
	});
} */

/* array.map */

const productInput = document.querySelector("#productInput");
const productSubmitBtn = document.querySelector("#productSubmit");
const productList = document.querySelector("#productList");
const removeFirstBtn = document.querySelector("#removeFirst");
const removeLastBtn = document.querySelector("#removeLast");
const removeRandomBtn = document.querySelector("#removeRandom");

let products = ["melk", "saft", "egg"];

products.map((product) => {
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
	products.map((product) => {
		productList.innerHTML += `<li>${product}</li>`;
	});
}

function removeFirst() {
	products.shift();
	productList.innerHTML = "";
	products.map((product) => {
		productList.innerHTML += `<li>${product}</li>`;
	});
}

function removeLast() {
	products.pop();
	productList.innerHTML = "";
	products.map((product) => {
		productList.innerHTML += `<li>${product}</li>`;
	});
}

function removeRandom() {
	let x = Math.floor(Math.random() * products.length);
	products.splice(x - 1, 1);
	productList.innerHTML = "";
	products.map((product) => {
		productList.innerHTML += `<li>${product}</li>`;
	});
}
