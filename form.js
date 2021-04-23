function addFields() {
  // Number of inputs to create
  var lastName = document.getElementById("lastName").value;
  var firstName = document.getElementById("firstName").value;
  var email = document.getElementById("email").value;
  var sex = document.getElementById("dropdown").value;
  var date = document.getElementById("start").value;

  if (
    (lastName == "" || firstName == "" || email == "" || sex == "" || date == "")
  ) {
    alert("Fields are required.");
  } else {
    var list = document.getElementsByClassName("list");

    document.getElementById("table").insertRow(-1).innerHTML =
      "<tr><td>" +
      lastName +
      "</td><td>" +
      firstName +
      "</td><td>" +
      email +
      "</td><td>" +
      sex +
      "</td><td>" +
      date +
      "</td></tr>";
  }
}
