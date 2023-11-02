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
function checkPaymentPeriod() {
    var paymentPeriod = document.getElementById('period').value;
    if (paymentPeriod === 'other') {
        var confirmation = confirm("Charges may be added from 50% to 70% of the normal price. Do you want to proceed?");
        if (confirmation) {
            alert("You have chosen the 'Other' payment period. Additional charges may apply.");
        }
        else {
            if(paymentPeriod === '30 Days'){
                var confirmation = confirm (' You made your choose on 30 days payment where you be paying the price on the market');
            }
            if(paymentPeriod === 'Daily'){
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

// Sample data store (can be replaced with a database implementation)
// const users = [];

// function displayUsers() {
//     const userListDiv = document.getElementById("user-list");
//     userListDiv.innerHTML = ""; // Clear existing content

//     users.forEach(user => {
//         const userDiv = document.createElement("div");
//         userDiv.innerHTML = `<button onclick="displayUserInfo(${user.id})">${user.name}</button>`;
//         userListDiv.appendChild(userDiv);
//     });
// }

// function displayUserInfo(userId) {
//     const user = users.find(u => u.id === userId);
//     const userInfoDiv = document.getElementById("user-info");
//     userInfoDiv.innerHTML = `
//         <h2>${user.name}</h2>
//         <button onclick="openUpdateForm(${user.id})">Update</button>
//         <label>Quantity in kgs: <input type="number" id="quantity"></label>
//         <label>Balance: $<span id="balance">${user.balance}</span></label>
//         <button onclick="markAsPaid(${user.id})">Mark as Paid</button>
//     `;

//     // Countdown timer logic (replace the deadline with your actual date and time)
//     const deadline = new Date("2023-12-31 23:59:59").getTime();
//     const countdownInterval = setInterval(() => {
//         const now = new Date().getTime();
//         const timeRemaining = deadline - now;
//         if (timeRemaining <= 0) {
//             clearInterval(countdownInterval);
//             userInfoDiv.innerHTML += "<p>Loan has expired!</p>";
//         } else {
//             const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
//             const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//             const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
//             const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
//             userInfoDiv.innerHTML += `<p>Time remaining: ${days}d ${hours}h ${minutes}m ${seconds}s</p>`;
//         }
//     }, 1000);
// }

// function openCreateUserForm() {
//     const createUserForm = document.getElementById("create-user-form");
//     createUserForm.innerHTML = `
//         <label>Name: <input type="text" id="new-user-name"></label>
//         <button onclick="createUser()">Create</button>
//     `;
//     createUserForm.classList.remove("hidden");
// }

// function createUser() {
//     const newName = document.getElementById("new-user-name").value;
//     const newUser = {
//         id: users.length + 1,
//         name: newName,
//         balance: 0
//     };
//     users.push(newUser);
//     displayUsers();
//     document.getElementById("create-user-form").classList.add("hidden");
// }

// function openUpdateForm(userId) {
//     const user = users.find(u => u.id === userId);
//     // Implement update logic based on user id
//     // ...
// }

// function markAsPaid(userId) {
//     const user = users.find(u => u.id === userId);
//     // Implement mark as paid logic based on user id
//     // ...
// }

// // Sample data initialization
// users.push({ id: 1, name: "User 1", balance: 100 });
// users.push({ id: 2, name: "User 2", balance: 200 });

// // Initial display
// displayUsers();



