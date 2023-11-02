function saveName() {
    var name = document.getElementById('name').value;
    // Assuming you have a function saveNameToDatabase() to save the name to the database
    // For simplicity, I'll assume it returns true if the save is successful, and false otherwise.
    if (saveNameToDatabase(name)) {
        console.log('Saved name: ' + name);
        document.getElementById('success-message').innerText = 'User has been created successfully!';
    } else {
        console.log('Error saving name: ' + name);
        document.getElementById('success-message').innerText = 'Failed to create user. Please try again.';
    }
}

function deleteName() {
    var confirmation = confirm('Are you sure you want to delete this customer?');
    if (confirmation) {
        document.getElementById('success-message').innerText = 'Customer has been deleted successfully!';
        // Assuming you have a function deleteNameFromDatabase() to delete the name from the database
        // deleteNameFromDatabase(name);
    } else {
        document.getElementById('success-message').innerText = 'Deletion cancelled.';
    }
}

function goToForm() {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('form-content').style.display = 'block';
}

function editName(name) {
    // Here you can handle editing the name; you can pre-fill the form fields with the selected name's data
    // For simplicity, let's just print the name to the console
    console.log('Editing name: ' + name);
    alert('You are about to edit the client information');
}
function formatPhoneNumber(inputElement) {
    var phoneNumber = inputElement.value;
    var phoneNumberUtil = i18n.phonenumbers.PhoneNumberUtil.getInstance();
    var defaultCountryCode = 'RW';

    try {
    var phoneNumberObj = phoneNumberUtil.parse(phoneNumber, 'RW'); // Assuming default country is the United States (you can change it as needed)
    var formattedNumber = phoneNumberUtil.format(phoneNumberObj, i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL);
    inputElement.setCustomValidity(''); // Clear any previous validation error
    inputElement.value = formattedNumber;
    } catch (error) {
    inputElement.setCustomValidity('Invalid phone number');
    }
}
function formatDate(inputElement){
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    var day = currentDate.getDate().toString().padStart(2, '0');
    var formattedDate = year + '-' + month + '-' + day;
    document.getElementById('date').value = formattedDate;
}

