//call function with value
// val= press value
function btnClick(val) {
    console.log(val)
    //get value & push value of display
    // += dispaly value+ get val
    document.getElementById("screen").value += val
}
//clear value
function clr() {
    document.getElementById("screen").value = ""
}
function eqlClick() {
    //get display value
    var text = document.getElementById("screen").value
    //eval = all display value and operations
    var result = eval(text)
    //update display value 
    document.getElementById("screen").value = result
    console.log(result)
}