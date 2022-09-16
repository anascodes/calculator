let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});

// const display = document.getElementById("display");
// const clear = document.getElementById("C-button");
// const division = document.getElementById("/-button");
// const multiply = document.getElementById("multiy-button");
// const del = document.getElementById("#bk-button");
// const seven = document.getElementById("7-button");
// const eight = document.getElementById("8-button");
// const nine = document.getElementById("9-button");
// const minus = document.getElementById("#mis-button");
// const four = document.getElementById("4-button");
// const five = document.getElementById("5-button");
// const six = document.getElementById("6-button");
// const plus = document.getElementById("getElementById#ps-button");
// const one = document.getElementById("1-button");
// const two = document.getElementById("2-button");
// const three = document.getElementById("3-button");
// const dot = document.getElementById("t-button");
// const op = document.getElementById("opp-button");
// const zero = document.getElementById("0-button");
// const cl = document.getElementById("equal");


// one.addEventListener("click", () => display.innerHTML += 1)
// two.addEventListener("click", () => display.innerHTML += 2);
// three.addEventListener("click", () => display.innerHTML += 3);
// four.addEventListener("click", () => display.innerHTML += 4);
// five.addEventListener("click", () => display.innerHTML += 5);
// six.addEventListener("click", () => display.innerHTML += 6);
// seven.addEventListener("click", () => display.innerHTML += 7);
// eight.addEventListener("click", () => display.innerHTML += 8);
// nine.addEventListener("click", () => display.innerHTML += 9);
// zero.addEventListener("click", () => display.innerHTML += 0);
// clear.addEventListener("click", () => display.innerHTML = null);


// function expression(){
//     var num1 = display.innerHTML;
//     if (multiply.addEventListener("click",() => {display.innerHTML = null})) {
//     }
// }

// expression()
// document.addEventListener("click", function(event) {

//     // Put the button into a variable
//     var buttons = document.querySelector(".button");
    
//     // Wait for user to click the button
//     buttons.addEventListener( "click", function() {
    
//       // Put the selected value into a variable
//       var  ;
      
//       // The "Switch" statement.
//       switch ( myColor ) {
      
//       case "Blue":
//         alert("Just like the sky!");
//         break;
  
//       case "Red":
//         alert("Quite daring!");
//         break;
  
//       case "Green":
//         alert("Like... grass?");
//         break;
        
//       }
//     }, false);
//   });


// let display = document.getElementById("C-button");


// display.addEventListener("click", disp);

// function disp() {
//     alert("asdf")
// }

// const num = parseInt("23");
// console.log(typeof num)