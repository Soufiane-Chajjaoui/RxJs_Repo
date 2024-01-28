"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
console.log("Starting Rxjs");
const checkRxJsButton = document.getElementById("CheckRxJs");
if (checkRxJsButton) {
    checkRxJsButton.addEventListener("click", () => {
        alert("CheckRxJs Clicked!");
    });
}
(0, rxjs_1.interval)(1000).subscribe({
    next: (val) => {
        console.log(val);
    }
});
