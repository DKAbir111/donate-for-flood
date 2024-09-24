console.log("Response from app.js");

// History button functioinality
document.getElementById("history-button").addEventListener("click", function () {
    showSection("history-section", "history-button");
})

// Donation button functionality
document.getElementById("donation-button").addEventListener("click", function () {
    showSection("donation-section", "donation-button");
})


//Update current value, Destination value and make a history about it
// Noakhali
document.getElementById("noakhali-button").addEventListener("click", function () {
    updateValue("noakhali-input", "noakhali-value", "noakhali-button");


})

// Feni
document.getElementById("feni-button").addEventListener("click", function () {
    updateValue("feni-input", "feni-value", "feni-button");

})

// Quota
document.getElementById("quota-button").addEventListener("click", function () {
    updateValue("quota-input", "quota-value", "quota-button");

})

// toggle-page
document.getElementById("go-blog").addEventListener("click", function () {
    window.location.href = "./blog.html";
})

