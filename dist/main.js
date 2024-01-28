"use strict";
console.log("Starting");
const checkRxJsButton = document.getElementById("CheckRxJs");
if (checkRxJsButton) {
    checkRxJsButton.addEventListener("click", () => {
        alert("CheckRxJs Clicked!");
    });
}
