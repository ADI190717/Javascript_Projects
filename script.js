// For Problem 1: The Power Scouter
document.getElementById("btn").onclick = function() {
    document.getElementById("heading").innerText = "Power Level: OVER 9000!";
}
// For Problem 2: The Name Fusion
document.getElementById("fuse-btn").onclick = function(){
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let fused = firstName + " " + lastName;
    document.getElementById("fused-name").innerText = fused;
}
// For Problem 3: The Gravity Chamber Control
let gravity = 10;
// Increase Gravity
document.getElementById("increasedGravity").onclick = function(){
    gravity *= 2;
    document.getElementById("currentGravity").innerText = `Current Gravity: ${gravity}x`;
}
// Decrease Gravity
document.getElementById("decreasedGravity").onclick = function(){
    gravity /= 2;
    document.getElementById("currentGravity").innerText = `Current Gravity: ${gravity}x`;
}

// Problem 4: The Solar Flare Technique
document.getElementById("solarflare-btn").onclick = function(){
    document.getElementById("sf").style.backgroundColor = "yellow";
    document.getElementById('solarFlair').style.display = 'none';  
}
// Problem 5: The Final Flash Charge Meter
let powerLevel = 0;
const powerBar = document.getElementById("power-bar");
const chargeBtn = document.getElementById("ff");
chargeBtn.onclick = function() {
    if (powerLevel < 100) {
        powerLevel += 10;
        powerBar.style.width = powerLevel + "%";
    }
};