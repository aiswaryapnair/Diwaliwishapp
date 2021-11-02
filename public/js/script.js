   
function validateEmail()
{

let email= document.getElementById("email");
let error= document.getElementById("error");


// let regexp =  /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/
let regexp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
if(regexp.test(email.value))
{

  error.innerHTML="Valid";
  // error.style.color="green";
  error.innerHTML="";
  email.style.border="";
  return true;
}
else if (email.value.length == 0) {
  error.innerHTML="";
  email.style.border="";

return;
}
else
{

  error.innerHTML=" Not a valid Email address!";
  error.style.color="red";
  email.style.border=" solid 2px red";
  return false;
}
}