function saveName() 
{
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

// function deleteName() 
// {
//     var confirmation = confirm('Are you sure you want to delete this customer?');
//     if (confirmation) {
//         document.getElementById('success-message').innerText = 'Customer has been deleted successfully!';
//         // Assuming you have a function deleteNameFromDatabase() to delete the name from the database
//         // deleteNameFromDatabase(name);
//     } else {
//         document.getElementById('success-message').innerText = 'Deletion cancelled.';
//     }
// }

function goToForm() 
{
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('form-content').style.display = 'block';
}

function editName(name) 
{
    // Here you can handle editing the name; you can pre-fill the form fields with the selected name's data
    // For simplicity, let's just print the name to the console
    console.log('Editing name: ' + name);
    alert('You are about to edit the client information');
}
function formatPhoneNumber(inputElement) {
    var phoneNumber = inputElement.value;
    var phoneNumberUtil = i18n.phonenumbers.PhoneNumberUtil.getInstance();
    var defaultCountryCode = 'RW'; // Set the country code for Rwanda

    try {
        var phoneNumberObj = phoneNumberUtil.parse(phoneNumber, defaultCountryCode);
        var formattedNumber = phoneNumberUtil.format(phoneNumberObj, i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL);
        inputElement.setCustomValidity(''); // Clear any previous validation error
        inputElement.value = formattedNumber;
    } catch (error) {
        inputElement.setCustomValidity('Invalid phone number');
    }
}

function formatDate(inputElement)
{
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    var day = currentDate.getDate().toString().padStart(2, '0');
    var formattedDate = year + '-' + month + '-' + day;
    document.getElementById('date').value = formattedDate;
}
function checkPaymentPeriod() 
{
    var paymentPeriod = document.getElementById('period').value;
    if (paymentPeriod === 'other') {
        var confirmation = confirm("Charges may be added from 50% to 70% of the normal price. Do you want to proceed?");
        if (confirmation) {
            alert("You have chosen the 'Other' payment period. Additional charges may apply.");
        }
        else {
            if(paymentPeriod === '30 Days')
            {
                var confirmation = confirm (' You made your choose on 30 days payment where you be paying the price on the market');
            }
            if(paymentPeriod === 'Daily')
            {
                var confirmation = confirm ('After choosing Daily payment you may receive daily discount ');
            
            }
            // Reset the dropdown to the default option if the user cancels
            document.getElementById('period').value = '';
        }
    }
}
function displayUserInfo(user) {
    var userDetailsDiv = document.getElementById("user-details");
    userDetailsDiv.innerHTML = ""; // Clear existing content

    var nameParagraph = document.createElement("p");
    nameParagraph.textContent = "Name: " + user.name;
    userDetailsDiv.appendChild(nameParagraph);

    var commercialNameParagraph = document.createElement("p");
    commercialNameParagraph.textContent = "Commercial Name: " + user.commercialName;
    userDetailsDiv.appendChild(commercialNameParagraph);

    var phoneNumberParagraph = document.createElement("p");
    phoneNumberParagraph.textContent = "Phone Number: " + user.phoneNumber;
    userDetailsDiv.appendChild(phoneNumberParagraph);

    var paymentPeriodParagraph = document.createElement("p");
    paymentPeriodParagraph.textContent = "Payment Period: " + user.paymentPeriod;
    userDetailsDiv.appendChild(paymentPeriodParagraph);

    var dateParagraph = document.createElement("p");
    dateParagraph.textContent = "Date: " + user.date;
    userDetailsDiv.appendChild(dateParagraph);

    // Show the user-info section
    var userInfoDiv = document.getElementById("user-info");
    userInfoDiv.classList.remove("hidden");
}
function validateForm() {
    var name = document.getElementById('name').value;
    var commercialName = document.getElementById('commercial-name').value;
    var phone = document.getElementById('phone').value;
    var period = document.getElementById('period').value;

    if (name.trim() === '' || commercialName.trim() === '') {
        alert('Name and Commercial Name are required fields.');
        return false;
    }

    var phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    if (!phone.match(phonePattern)) {
        alert('Invalid phone number. Please enter a valid phone number in the format XXX-XXXX.');
        return false;
    }

    if (period === '') {
        alert('Please select a payment period.');
        return false;
    }

    // Add more validation logic if needed

    return true;
}
function fetchUserData() {
    // Assuming the backend endpoint to fetch user data is '/api/users'
    fetch('/api/users')
        .then(response => response.json())
        .then(data => {
            // Call a function to render the user data in the container
            renderUserData(data);
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
}

function renderUserData(userData) {
    var userContainer = document.getElementById('user-container');
    userContainer.innerHTML = ''; // Clear existing content

    // Iterate over the user data and create HTML elements to display it
    userData.forEach(user => {
        var userDiv = document.createElement('div');
        userDiv.className = 'user-entry';
        userDiv.textContent = `Name: ${user.name}, Commercial Name: ${user.commercialName}, Phone: ${user.phone}, Payment Period: ${user.paymentPeriod}, Date: ${user.date}`;

        userContainer.appendChild(userDiv);
    });
}
function saveName() {
    var name = document.getElementById('name').value;
    var commercialName = document.getElementById('commercial-name').value;
    var phone = document.getElementById('phone').value;
    var period = document.getElementById('period').value;
    var date = document.getElementById('date').value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "save_user.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Handle the response from the server if needed
            console.log(xhr.responseText);
        }
    };
    var data = "name=" + name + "&commercial_name=" + commercialName + "&phone=" + phone + "&period=" + period + "&date=" + date;
    xhr.send(data);
}

