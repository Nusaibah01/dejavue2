// 
function converTodays() {
    let age = +(document.getElementById('age').value)
    
    let days = age * 365

// Display
document.getElementById('output').innerText = age + "years old" + "=" + days + "days"
}

 // Functionality
// function converToSeconds(){
//     let minutes = +(document.getElementById('input').value);
//     let seconds = minutes * 60
    
 // Display
//     document.getElementById('answer').innerText = minutes + "minute(s) is =" + seconds + "seconds(s)"
    
//     }