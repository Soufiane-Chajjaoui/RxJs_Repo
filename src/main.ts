console.log("Starting");

// Use "as HTMLButtonElement" to cast the result to HTMLButtonElement
const checkRxJsButton = document.getElementById("CheckRxJs") as HTMLButtonElement | null;

// Check if the element is not null before assigning the event handler
if (checkRxJsButton) {
  checkRxJsButton.addEventListener("click", ()=>{
    alert("CheckRxJs Clicked!");
  })
}
