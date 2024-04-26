    function submitForm(event) {
        event.preventDefault(); 
      
        var password = generateRandomPassword();

        document.querySelector("#password").value = password;

        alert("Randomly Generated Password: " + password);

    }
    document.getElementById("loginForm").addEventListener("submit", submitForm);

    function generateRandomPassword() {
        var password = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
        for (var i = 0; i < 10; i++) {
            password += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return password;
    } 
