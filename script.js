function showErr(elemId, message) {
  document.getElementById(elemId).innerHTML = message;
}

var form = document.getElementById("appForm");

function validation() {
  // form.addEventListener("submit", (e) => {
  //   e.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var address = document.getElementById("address").value;
  var city = document.getElementById("city").value;
  var gender = document.appForm.gender.value;
  var hobbies = [];
  var checkboxes = document.getElementsByName("hobbies");
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      hobbies.push(checkboxes[i].value);
    }
  }

  var nameErr =
    (emailErr =
    phoneErr =
    addressErr =
    cityErr =
    genderErr =
    hobbiesErr =
      true);

  if (name == "") {
    showErr("nameErr", "please enter a name");
  } else {
    showErr("nameErr", "");
    nameErr = false;
  }

  if (email == "") {
    showErr("emailErr", "please enter an email address");
  } else {
    showErr("emailErr", "");
    emailErr = false;
  }

  if (phone == "") {
    showErr("phoneErr", "please enter a phone number");
  } else {
    showErr("phoneErr", "");
    phoneErr = false;
  }

  if (address == "") {
    showErr("addressErr", "please enter a address");
  } else {
    showErr("addressErr", "");
    addressErr = false;
  }

  if (city == "--Select--") {
    showErr("cityErr", "please select a city");
  } else {
    showErr("cityErr", "");
    cityErr = false;
  }

  if (gender == "") {
    showErr("genderErr", "please select your gender");
  } else {
    showErr("genderErr", "");
    genderErr = false;
  }

  if (hobbies == "") {
    showErr("hobbiesErr", "please select your hobbies");
  } else {
    showErr("hobbiesErr", "");
    hobbiesErr = false;
  }

  if (
    nameErr ||
    emailErr ||
    phoneErr ||
    addressErr ||
    cityErr ||
    genderErr ||
    hobbiesErr == true
  ) {
    return false;
  } else {
    console.log(name, email, phone, address, city, gender, hobbies);
  }
  form.reset();
}
