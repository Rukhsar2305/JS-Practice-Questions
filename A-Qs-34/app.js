const input = document.getElementById("nameInput");
const heading = document.getElementById("nameHeading");

input.addEventListener("input", function () {
    // Allow only letters (a-z, A-Z) and spaces
    const filteredValue = this.value.replace(/[^a-zA-Z ]/g, "");
    
    this.value = filteredValue;

    heading.textContent = filteredValue;
});