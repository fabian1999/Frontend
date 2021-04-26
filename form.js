function deleteUser(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

function readURL(input, id) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $("#image" + id).attr("src", e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
  }
}

function deleteUser(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

function formatDate(userDate) {
  var d = new Date(userDate);

  const monthNames = [
    "Ianuarie",
    "Februarie",
    "Martie",
    "Aprilie",
    "Mai",
    "Iunie",
    "Iulie",
    "August",
    "Septembrie",
    "Octombrie",
    "Noiembrie",
    "Decembrie",
  ];

  return d.getDate() + " " + monthNames[d.getMonth()] + " " + d.getFullYear();
}

function addFields() {
  // Number of inputs to create
  var lastName = document.getElementById("lastName").value;
  var firstName = document.getElementById("firstName").value;
  var email = document.getElementById("email").value;
  var sex = document.getElementById("dropdown").value;
  var file = document.getElementById("myfile");
  var date = document.getElementById("start").value;

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

    var id = document.getElementById("table").getElementsByTagName("tr").length;

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
      "</td><td><img id='image" +
      id +
      "' style='width: 20px; height: 20px' src='#'></img></td><td><button onClick='deleteUser(this)'>X</button></td></tr>";
  }

  readURL(file, id);
}

function filterFunction() {
  filter = $("#filterSex").val();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");

  input = document.getElementById("myInput");
  filterInput = input.value.toUpperCase();

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    td0 = tr[i].getElementsByTagName("td")[0];
    if (td && td0) {
      txtValue = td.textContent || td.innerText;
      txtValue0 = td0.textContent || td0.innerText;
      if (txtValue.indexOf(filter) > -1 && txtValue0.toUpperCase().indexOf(filterInput) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function sortTableByDate() {

  var sortAttribute = document.getElementById("sortDateButton").getAttribute("sort");
  if(sortAttribute == "up") document.getElementById("sortDateButton").setAttribute("sort", "down");
  else document.getElementById("sortDateButton").setAttribute("sort", "up");
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("table");
  switching = true;
  while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
          shouldSwitch = false;
          x = new Date(rows[i].getElementsByTagName("td")[4].innerText);
          y = new Date(rows[i + 1].getElementsByTagName("td")[4].innerText);
          if(sortAttribute == "up") {
              if (x < y) {
                  shouldSwitch = true;
                  break;
              }
          } else if(sortAttribute == "down") {
              if (x > y) {
                  shouldSwitch = true;
                  break;
              }
          }
      }
      if (shouldSwitch) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
      }
  }
}
