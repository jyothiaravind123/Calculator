let display = document.querySelector("#inputBox");
let buttons = document.querySelectorAll("button");

let buttonArray = Array.from(buttons); 
let string = '';


buttonArray.forEach(btn => {
    btn.addEventListener("click", (event) => {
        if (event.target.textContent === 'DEL') {
            string = string.slice(0, -1);
            display.value = string;
        } else if (event.target.textContent === 'AC') {
            string = '';
            display.value = string;
        } else if (event.target.textContent === '=') {
            string = eval(string)
            display.value = string
        } else {
            string += event.target.textContent;
            display.value = string;
        }
     })
 })

