function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $("#blah").attr("src", e.target.result);
    };

    reader.readAsDataURL(input.files[0]); // convert to base64 string
  }
}

function deleteUser(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

function addFields() {
  // Number of inputs to create
  var lastName = document.getElementById("lastName").value;
  var firstName = document.getElementById("firstName").value;
  var email = document.getElementById("email").value;
  var sex = document.getElementById("dropdown").value;
  var file = document.getElementById("myfile").value;
  var date = document.getElementById("start").value;

  readURL(file);

  if (
    lastName == "" ||
    firstName == "" ||
    email == "" ||
    sex == "" ||
    date == ""
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
      "</td><td><img id='blah' src='#'></img></td><button onClick='deleteUser(this)'>X</button></td></tr>";
  }
}
