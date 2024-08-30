const inputValue = document.getElementById("user-input");

// Handle number clicks
document.querySelectorAll(".numbers").forEach(function (item) {
  item.addEventListener("click", function (e) {
    if (inputValue.innerText === "NaN" || inputValue.innerText === "0") {
      inputValue.innerText = "";
    }
    inputValue.innerText += e.target.innerHTML.trim();
  });
});

// Handle operation clicks
document.querySelectorAll(".operations").forEach(function (item) {
  item.addEventListener("click", function (e) {
    const operation = e.target.innerHTML.trim();
    const lastValue = inputValue.innerText.slice(-1);

    if (operation === "=") {
      try {
        inputValue.innerText = eval(inputValue.innerText); // Evaluate the expression
      } catch {
        inputValue.innerText = "Error"; // Catch any errors
      }
    } else if (operation === "AC") {
      inputValue.innerText = "0"; // Clear the display
    } else if (operation === "DEL") {
      inputValue.innerText = inputValue.innerText.slice(0, -1) || "0"; // Delete last character
    } else {
      if (!isNaN(lastValue) || operation === "-" || operation === "+") {
        inputValue.innerText += operation; // Append the operation
      }
    }
  });
});
