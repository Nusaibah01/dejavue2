// Area of triangle
function calculateArea(){
let base = +(document.getElementById('base').value)
let height = +(document.getElementById('height').value)
let area = (base * height) / 2

document.getElementById('output').innerText = area 
}
