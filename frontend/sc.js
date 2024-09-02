

var name_error = document.getElementById("name_error");
var phone_error = document.getElementById("phone_error");
var email_error = document.getElementById("email_error");
var massage_error = document.getElementById("massage_error");
var submit_error = document.getElementById("submit_error");
var submit = document.getElementById("name");


function validatename() {
    var user_name = document.getElementById("name").value;

    if (user_name.length == 0) {
        name_error.innerHTML = "Name is required";
        return false;
    }
    if (!user_name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)) {
        name_error.innerHTML = "Write full name";
        return false;
    }
    
    // if(!user_name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/))
    // {
    //     name_error.innerHTML="Write full name";
    //     return false;
    
    // }

    name_error.innerHTML = `<i class="bi bi-check-circle-fill"></i>`;
    return true;

}


function validatecontact() {
    var contact = document.getElementById("contact").value;
    if (contact.length == 0) {
        phone_error.innerHTML = "Phone is required";
        return false;
    }

    if (contact.length !== 10) {
        phone_error.innerHTML = "Phone should be 10 digits";
        return false;
    }
    if (!contact.match(/^[0-9]{10}$/)) {
        phone_error.innerHTML = 'Only digits please';
        return false;
    }


    phone_error.innerHTML = `<i class="bi bi-check-circle-fill"></i>`;
    return true;

}


function validateemail() {
    var email = document.getElementById("email").value;
    if (email.length == 0) {
        email_error.innerHTML = "Emai is required";
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        email_error.innerHTML = "Email invalid.";
        return false;
    }
    email_error.innerHTML = `<i class="bi bi-check-circle-fill"></i>`;
    return true;

}


function validatemassage() {
    var massage = document.getElementById("massage").value;
    var required = 30;
    var left = required - massage.length;
    if (left > 0) {
        massage_error.innerHTML = left + " more character required";
        return false;
    }
    massage_error.innerHTML = `<i class="bi bi-check-circle-fill"></i>`;
    return true;

}


var n=document.getElementById("name").value;

function validateform() {
    if (!validatename() || !validatecontact() || !validateemail() || !validatemassage()) {
        submit_error.innerHTML = "please fix error before submit";
        setTimeout(() => {
           submit_error.innerHTML = "";
        }, 3000);
        return false;

    }
    

    return true;
}







































































































// user_name.addEventListener("keyup",()=>{
//     if(user_name.value===""){
//         name_error.style.visibility="visible";
//         return false;
//     }else{
//         name_error.style.visibility="hidden";
//     }
// })

// contact.addEventListener("keyup",()=>{
//     if(contact.value===""){
//         phone_error.style.visibility="visible";
//         return false;
//     }else{
//         phone_error.style.visibility="hidden";
//     }
// })

// email.addEventListener("keyup",()=>{
//     if(email.value===""){
//         email_error.style.visibility="visible";
//         return false;
//     }else{
//         email_error.style.visibility="hidden";
//     }
// })

// massage.addEventListener("keyup",()=>{
//     if(massage.value===""){
//         massage_error.style.visibility="visible";
//         return false;
//     }else{
//         massage_error.style.visibility="hidden";
//     }
// })


// submit.addEventListener("click",()=>{
//     if(user_name.value===""|| contact.value==="" || email.value==="" || massage.value===""){
//         submit_error.innerHTML="plese fill required field";
//         return false;
//     }
// })


