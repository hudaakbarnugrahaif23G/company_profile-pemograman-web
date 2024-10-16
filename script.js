// Function to open the modal and set the car name based on user selection
function openModal(carName) {
    document.getElementById("car").value = carName; // Set the car name in the form
    document.getElementById("orderModal").style.display = "block"; // Show the modal
}

// Function to close the modal
function closeModal() {
    document.getElementById("orderModal").style.display = "none"; // Hide the modal
}

// Handle form submission (you can send data to the server here)
document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const car = document.getElementById("car").value;
    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;
    const date = document.getElementById("date").value;

    // Process the order (e.g., send it to the server or display a confirmation message)
    alert(`Pesanan berhasil dilakukan untuk ${car} oleh ${name}. Kami akan menghubungi Anda di ${contact} pada tanggal ${date}.`);

    closeModal(); // Close the modal after submission
});
