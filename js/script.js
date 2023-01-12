const productInput = document.querySelector("#productInput");
const productSubmitBtn = document.querySelector("#productSubmit");
const productList = document.querySelector("#productList");
const removeFirstBtn = document.querySelector("#removeFirst");
const removeLastBtn = document.querySelector("#removeLast");
const removeRandomBtn = document.querySelector("#removeRandom");

let products = ["melk", "saft", "egg"];

productSubmitBtn.addEventListener("click", addProduct);

function showProducts() {
	productList.innerHTML = "";
	products.forEach((product, index) => {
		productList.innerHTML += `<li onclick="removeThis(${index})">${product}</li>`;
	});
}

showProducts();

function addProduct() {
	products.push(productInput.value);
	console.log(products);
	showProducts();
}

function removeThis(index) {
	//	console.log("remove", index);
	products.splice(index, 1);
	showProducts();
}
