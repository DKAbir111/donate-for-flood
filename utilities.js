// console.log("response from utilities.js");


function showSection(id, id2) {
    // Hide all
    document.getElementById("donation-section").classList.add("hidden");
    document.getElementById("history-section").classList.add("hidden");

    // remove desing from button
    document.getElementById("donation-button").classList.remove("bg-primary-color");
    document.getElementById("history-button").classList.remove("bg-primary-color");


    // Show desired section
    document.getElementById(id).classList.remove("hidden");
    // Add design to button
    document.getElementById(id2).classList.add("bg-primary-color");
}


// Update history
function updateHistory(id) {

    if (id === "noakhali-button") {
        const inputElement = document.getElementById("noakhali-input");
        const input = parseFloat(inputElement.value);
        if (!isNaN(input) && input > 0) {
            document.getElementById("history-section").innerHTML += `
     <div class="border rounded-lg p-7 flex flex-col gap-3">
                <h3 class="font-semibold">
                    ${input} Taka is Donated for flood affected-2024 at Noakhali, Bangladesh
                </h3>
                <p class="text-gray-color text-opacity-40 font-light text-sm">Date : ${new Date()}</p>
            </div>`
        }
    }
    else if (id === "feni-button") {
        const inputElement = document.getElementById("feni-input");
        const input = parseFloat(inputElement.value);
        if (!isNaN(input) && input > 0) {
            document.getElementById("history-section").innerHTML += `
     <div class="border rounded-lg p-7 flex flex-col gap-3">
                <h3 class="font-semibold">
                    ${input} Taka is Donated for Flood Relief in Feni,Bangladesh
                </h3>
                <p class="text-gray-color text-opacity-40 font-light text-sm">Date : ${new Date()}</p>
            </div>

    `}
    }

    else if (id === "quota-button") {
        const inputElement = document.getElementById("quota-input");
        const input = parseFloat(inputElement.value);
        if (!isNaN(input) && input > 0) {
            document.getElementById("history-section").innerHTML += `
        <div class="border rounded-lg p-7 flex flex-col gap-3">
                   <h3 class="font-semibold">
                       ${input} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh
                   </h3>
                   <p class="text-gray-color text-opacity-40 font-light text-sm">Date : ${new Date()}</p>
               </div>
   
       `
        }
    }
    return;
}


//Update current value and destination donation value
function updateValue(id, id2) {
    const modal = document.getElementById('my_modal_1');
    const input = parseFloat(document.getElementById(id).value);
    if (isNaN(input) || input <= 0) {
        alert("Please enter a valid positive number.");
        document.getElementById(id).value = '';
        return;
    }
    else {
        const destinationValue = parseFloat(document.getElementById(id2).innerText);
        const newDestinationValue = destinationValue + input;
        document.getElementById(id2).innerText = newDestinationValue;
        let currentValue = parseFloat(document.getElementById("current-value").innerText);
        currentValue = currentValue - input;
        document.getElementById("current-value").innerText = currentValue;
        modal.showModal();
        document.getElementById(id).value = '';
        return;
    }

}