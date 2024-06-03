// 
function converTodays() {
    let age = +(document.getElementById('age').value)
    
    let days = age * 365

// Display
document.getElementById('output').innerText = age + "years old" + "=" + days + "days"
}

