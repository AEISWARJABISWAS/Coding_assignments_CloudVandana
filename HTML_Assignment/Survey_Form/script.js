function validateForm() {
  const firstName = document.querySelector('input[placeholder="Enter Your First name"]').value;
  const lastName = document.querySelector('input[placeholder="Enter Your Last name"]').value;
  const dob = document.querySelector('.dob').value;
  const country = document.querySelector('#country').value;
  const genderElements = document.querySelectorAll('input[type="checkbox"].gender:checked');
  const profession = document.querySelector('input[placeholder="Enter Your Profession"]').value;
  const email = document.querySelector('input[placeholder="Enter Your Email ID"]').value;
  const mobileNumber = document.querySelector('input[placeholder="Enter Your Mobile No."]').value;

  if (firstName === "" || lastName === "" || dob === "" || country === "select" || genderElements.length === 0 || profession === "" || email === "" || mobileNumber === "") {
    alert("Please fill in all the required fields.");
    return false; 
  }

  return true;
}


function displayFormData() {
  const firstName = document.querySelector('input[placeholder="Enter Your First name"]').value;
  const lastName = document.querySelector('input[placeholder="Enter Your Last name"]').value;
  const dob = document.querySelector('.dob').value;
  const country = document.querySelector('#country').value;
  const genderElements = document.querySelectorAll('input[type="checkbox"].gender:checked');
  const selectedGenders = Array.from(genderElements).map(function (element) {
    return element.nextSibling.textContent;
  }).join(', ');
  const profession = document.querySelector('input[placeholder="Enter Your Profession"]').value;
  const email = document.querySelector('input[placeholder="Enter Your Email ID"]').value;
  const mobileNumber = document.querySelector('input[placeholder="Enter Your Mobile No."]').value;

  const popupContent = `
      First Name: ${firstName}
      Last Name: ${lastName}
      Date of Birth: ${dob}
      Country: ${country}
      Gender: ${selectedGenders}
      Profession: ${profession}
      Email: ${email}
      Mobile Number: ${mobileNumber}
    `;

  alert(popupContent); 
}


function resetForm() {
  document.querySelector('form').reset();
}


const submitButton = document.querySelector('.button');

submitButton.addEventListener('click', function (event) {
  event.preventDefault(); 
  if (validateForm()) {
    displayFormData(); 
    resetForm(); 
  }
});

