function calculate() {

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;

    let result;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerText = "Enter numbers";
        return;
    }

    switch (operator) {

        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":
            if (num2 === 0) {
                result = "Cannot divide by 0";
            } else {
                result = num1 / num2;
            }
            break;

        default:
            result = "Invalid operator";
    }

    document.getElementById("result").innerText = result;
}


function clearCalculator() {

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("operator").value = "+";
    document.getElementById("result").innerText = "0";

}