function checkForm() {
   // TODO: Perform input validation
   
   document.getElementById("formErrors").innerHTML = "";
   var inputs = document.getElementsByTagName("input");
   for (var i = 0; i < inputs.length; i++) {
      inputs[i].classList.remove("error");}
   

      // Retrieve user inputs
   var fullName = document.getElementById("fullName").value.trim();
   var email = document.getElementById("email").value.trim();
   var password = document.getElementById("password").value.trim();
   var passwordConfirm = document.getElementById("passwordConfirm").value.trim();


   var errors = [];

   // Perform input validation
   if (fullName.length === 0) {
      errors.push("Missing full name.");
      document.getElementById("fullName").classList.add("error");
   }

   var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
   if (!emailRegex.test(email)) {
      errors.push("Invalid or missing email address.");
      document.getElementById("email").classList.add("error");
   }

   if (password.length < 10 || password.length > 20) {
      errors.push("Password must be between 10 and 20 characters.");
      document.getElementById("password").classList.add("error");
   }

   var lowercaseRegex = /[a-z]/;
   if (!lowercaseRegex.test(password)) {
      errors.push("Password must contain at least one lowercase character.");
      document.getElementById("password").classList.add("error");
   }

   var uppercaseRegex = /[A-Z]/;
   if (!uppercaseRegex.test(password)) {
      errors.push("Password must contain at least one uppercase character.");
      document.getElementById("password").classList.add("error");
   }

   var digitRegex = /[0-9]/;
   if (!digitRegex.test(password)) {
      errors.push("Password must contain at least one digit.");
      document.getElementById("password").classList.add("error");
   }


   if (password !== passwordConfirm) {
      errors.push("Password and confirmation password don't match.");
      document.getElementById("password").classList.add("error");
      document.getElementById("passwordConfirm").classList.add("error");
   }

   // Display error messages or hide the formErrors div
   var formErrors = document.getElementById("formErrors");
   if (errors.length > 0) {
      formErrors.innerHTML = "";
      for (var j = 0; j < errors.length; j++) {
         var errorMessage = document.createElement("li");
         errorMessage.textContent = errors[j];
         formErrors.appendChild(errorMessage);
      }
      formErrors.classList.remove("hide");
   } else {
      formErrors.classList.add("hide");
   }


}

document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});