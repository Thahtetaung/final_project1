    function initialize() {
        new Effect.BlindDown('product-box', { duration: 2});
    }

    function feature(){
        new Effect.Squish("feature" , {duration: 2})
    }
    function buynow(productid){
        new Effect.DropOut(productid , {duration : 2})
    }

function submitForm() {
    
  var firstName = document.getElementById('first_name');
  var lastName = document.getElementById('last_name');
  var email = document.getElementById('email');
  var phoneNumber = document.getElementById('phone_number');
  var hasError = false;

  if (firstName.value === "") {
    new Effect.Shake(firstName);
    firstName.style.border = "2px solid red"
    hasError = true;
  }
  if (lastName.value === "") {
    new Effect.Shake(lastName);
    lastName.style.border = "2px solid red"
    hasError = true;
  }
  if (email.value === "") {
    new Effect.Shake(email);
    email.style.border = "2px solid red"
    hasError = true;
  }
  if (phoneNumber.value === "") {
    new Effect.Shake(phoneNumber);
    phoneNumber.style.border = "2px solid red"
    hasError = true;
  }
  return false;

}