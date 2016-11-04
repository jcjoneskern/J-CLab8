var groceryList = [];
additem.onclick = addToList;

function addToList() {
	var total = 0;
	var items = document.getElementById("newItem").value;
	var prices = parseFloat(document.getElementById("newPrice").value);

	if (isNaN(prices)) {
		document.getElementById("response").innerHTML = "Please enter a number for the price.";
	} else {

	groceryList.push(
		{name: items,
		price: prices});

	var addedItem = document.createElement("tr");
	addedItem.innerHTML = "<td>" + items + "</td><td>$" + prices.toFixed(2) +"</td>";
	document.getElementById("tabledata").appendChild(addedItem);

//total amount
	for(var i = 0; i < groceryList.length; i++) {
		total += groceryList[i].price;
	};
	document.getElementById("totalvalue").innerHTML = "$" + total.toFixed(2);

	document.getElementById("response").innerHTML = "";
	};
};