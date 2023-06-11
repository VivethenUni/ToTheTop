// Validates booking page login info to make sure nothing is left blank
function validate() {
    var nameIn = document.getElementById('name');
    var emailIn = document.getElementById('email');

    if (nameIn.value.trim() === "") {
        alert("Please enter your name");
        return false;
    }

    var emailPat = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
      if (!emailPat.test(emailIn.value)) {
        alert('Please enter a valid email address.');
        errorElement.innerText = messages.join(', ');
        return false;
      }

}