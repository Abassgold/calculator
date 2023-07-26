function addNumber(number) {
   display.value += number;
}
function format() {
  display.value = "";
}
function calc(){
    var result = eval(display.value);
    display.value = result;
}