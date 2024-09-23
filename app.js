console.log("Response from app.js");

// History button functioinality
document.getElementById("history-button").addEventListener("click", function () {
    showSection("history-section", "history-button");
})

// Donation button functionality
document.getElementById("donation-button").addEventListener("click", function () {
    showSection("donation-section", "donation-button");
})




// Noakhali
document.getElementById("noakhali-button").addEventListener("click", function () {
    updateHistory("noakhali-button");
    updateValue("noakhali-input", "noakhali-value");


})

// Feni
document.getElementById("feni-button").addEventListener("click", function () {
    updateHistory("feni-button");
    updateValue("feni-input", "feni-value");


})

// Quota
document.getElementById("quota-button").addEventListener("click", function () {
    updateHistory("quota-button");
    updateValue("quota-input", "quota-value");


})

function showModal() {
    const inputElement = document.getElementById("quota-input");
    const input = parseFloat(inputElement.value);
}