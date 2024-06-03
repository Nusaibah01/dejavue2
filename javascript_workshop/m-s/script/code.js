// Functionality
function converToSeconds(){
let minutes = +(document.getElementById('input').value);
let seconds = minutes * 60

// Display
document.getElementById('answer').innerText = minutes + "minute(s) is equal to " + seconds + "seconds(s)"

}
