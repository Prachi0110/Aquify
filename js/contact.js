function sendemail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "amanpalsambhalkha@gmail.com",
        Password : "F0F39932E50C0E8203AAE6F4DE41BC21DC3A",
        To : 'kavitaasha65@gmail.com',
        From : "amanpalsambhalkha@gmail.com",
        Subject : "This is the subject",
        Body : 
            "name: "+ document.getElementById("name").value + " <br> "+
            "email: "+ document.getElementById("email").value +" <br> "+
            "phone: "+ document.getElementById("phone").value +" <br> "+
            "location: "+ document.getElementById("location").value +" <br> "+
            "message: "+ document.getElementById("message").value
            
    }).then(
        message => alert(message)
    );
}