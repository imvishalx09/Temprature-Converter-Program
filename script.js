const textBox = document.getElementById("textBox");
const toFarenheit = document.getElementById("toFarenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");

function convert() {
    let temp = Number(textBox.value);
    if (isNaN(temp)) {
        result.textContent = "Please enter a valid number";
        return;
    }

    if (toFarenheit.checked) {
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    } else if (toCelcius.checked) {
        temp = (temp - 32) * 5 / 9;
        result.textContent = temp.toFixed(1) + "°C";
    } else {
        result.textContent = "Please select a unit";
    }
}
