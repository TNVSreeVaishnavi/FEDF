    
    const form = document.getElementById("myForm");
    const fullname = document.getElementById("fullname");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const phone = document.getElementById("phone");

    const fullnameError = document.getElementById("fullnameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const phoneError = document.getElementById("phoneError");
    const successMessage = document.getElementById("successMessage");

    // Email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Password regex (min 6 chars, one number, one special char)
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$/;
    // Phone regex (10 digits only)
    const phoneRegex = /^[0-9]{10}$/;

    function validateFullname() {
      if (fullname.value.trim() === "") {
        fullnameError.textContent = "Full Name is required";
        fullname.classList.add("invalid");
        fullname.classList.remove("valid");
        return false;
      }
      fullnameError.textContent = "";
      fullname.classList.add("valid");
      fullname.classList.remove("invalid");
      return true;
    }

    function validateEmail() {
      if (!emailRegex.test(email.value)) {
        emailError.textContent = "Invalid email format";
        email.classList.add("invalid");
        email.classList.remove("valid");
        return false;
      }
      emailError.textContent = "";
      email.classList.add("valid");
      email.classList.remove("invalid");
      return true;
    }

    function validatePassword() {
      if (!passwordRegex.test(password.value)) {
        passwordError.textContent = "Password must be 6+ chars, include number & special char";
        password.classList.add("invalid");
        password.classList.remove("valid");
        return false;
      }
      passwordError.textContent = "";
      password.classList.add("valid");
      password.classList.remove("invalid");
      return true;
    }

    function validatePhone() {
      if (!phoneRegex.test(phone.value)) {
        phoneError.textContent = "Phone must be 10 digits";
        phone.classList.add("invalid");
        phone.classList.remove("valid");
        return false;
      }
      phoneError.textContent = "";
      phone.classList.add("valid");
      phone.classList.remove("invalid");
      return true;
    }

    // Add event listeners
    fullname.addEventListener("input", validateFullname);
    email.addEventListener("input", validateEmail);
    password.addEventListener("input", validatePassword);
    phone.addEventListener("input", validatePhone);

    form.addEventListener("submit", function(e) {
      e.preventDefault(); // prevent form submission

      let isValid = validateFullname() & validateEmail() & validatePassword() & validatePhone();

      if (isValid) {
        successMessage.textContent = "Form submitted successfully!";
        form.reset();
        fullname.classList.remove("valid");
        email.classList.remove("valid");
        password.classList.remove("valid");
        phone.classList.remove("valid");
      } else {
        successMessage.textContent = "";
      }
    });
  