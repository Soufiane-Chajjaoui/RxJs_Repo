import { interval } from "rxjs";

console.log("Starting Rxjs");

// Use "as HTMLButtonElement" to cast the result to HTMLButtonElement
const checkRxJsButton = document.getElementById("CheckRxJs") as HTMLButtonElement | null;

// Check if the element is not null before assigning the event handler
if (checkRxJsButton) {
  checkRxJsButton.addEventListener("click", ()=>{
    alert("CheckRxJs Clicked!");
  })
}

interval(1000).subscribe({
  next : (val) => {
    console.log(val)
  }
})
