
const submitBtn = document.querySelector('.submit-btn');
const popup = document.querySelector('.popup');
const okBtn = popup.querySelector('button');

// Function to open the popup
function openPopup() {
    popup.style.display = 'block';
}

// Function to close the popup
function closePopup() {
    popup.style.display = 'none';
}

// Event listener for the submit button
submitBtn.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission (if applicable)
    openPopup();
});

// Event listener for the OK button in the popup
okBtn.addEventListener('click', closePopup);
