let numbers = [];

function insertNumber() {

    let input = document.getElementById("numberInput");
    let value = parseInt(input.value);

    if (value > 0) {

        numbers.push(value);
        displayNumbers();
    }

    input.value = "";
}

function displayNumbers() {

    let list = document.getElementById("numberList");
    list.innerHTML = "";

    numbers.forEach((num, index) => {

        let type = num % 2 === 0 ? "EVEN" : "ODD";
        let color = num % 2 === 0 ? "even" : "odd";

        let li = document.createElement("li");

        li.innerHTML = `
${num} <span class="${color}">${type}</span>
<button onclick="removeNumber(${index})">Remove</button>
<button onclick="editNumber(${index})">Edit</button>
`;

        list.appendChild(li);

    });
}

function removeNumber(index) {

    numbers.splice(index, 1);
    displayNumbers();

}

function editNumber(index) {

    let newValue = prompt("Enter new value:");

    if (newValue > 0) {

        numbers[index] = parseInt(newValue);
        displayNumbers();

    }
}

function getTotal() {

    if (numbers.length === 0) {
        document.getElementById("total").innerText = "0";
        return;
    }

    let total = numbers.reduce((a, b) => a + b, 0);

    document.getElementById("total").innerText = total;

}

function identifyHL() {

    if (numbers.length === 0) {
        document.getElementById("highest").innerText = "";
        document.getElementById("lowest").innerText = "";
        return;
    }

    let highest = Math.max(...numbers);
    let lowest = Math.min(...numbers);

    document.getElementById("highest").innerText = highest;
    document.getElementById("lowest").innerText = lowest;

}

function sortNumbers(type) {

    if (type === "asc") {
        numbers.sort((a, b) => a - b);
    }

    if (type === "desc") {
        numbers.sort((a, b) => b - a);
    }

    displayNumbers();

}

function clearItems() {

    numbers = [];
    displayNumbers();
    document.getElementById("total").innerText = "0";
    document.getElementById("highest").innerText = "";
    document.getElementById("lowest").innerText = "";

}

function clearEntry() {

    document.getElementById("numberInput").value = "";

}