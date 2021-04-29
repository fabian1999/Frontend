var employeesList = [];

jQuery(document).ready(function ($) {
  $.ajax({
    method: "GET",
    url: "https://localhost:5001/employee/Employee",
    success: function (data) {
      employeesList = data;
      console.log(employeesList);
      loadEmployees(employeesList);
    },
    error: function (data) {
      alert(`Failed to load employees list.`);
    },
  });
});

function loadEmployees(employeesList) {
  for (index = 0; index < employeesList.length; index++) {
    appendRow(employeesList[index]);
  }
}

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

function validateInput(newEmployee) {
  if (
    !newEmployee.firstName ||
    !newEmployee.lastName ||
    !newEmployee.email ||
    !newEmployee.birthdate
  ) {
    return false;
  }
  return true;
}

function appendRow(employee) {
  let employeesTable = document.querySelector("table");
  var id = employeesTable.getElementsByTagName("tr").length;
  console.log(employee);

  employeesTable.innerHTML +=
    "<tr><td>" +
    employee.lastName +
    "</td><td>" +
    employee.firstName +
    "</td><td>" +
    employee.email +
    "</td><td>" +
    employee.gender +
    "</td><td>" +
    employee.birthdate +
    "</td><td><img id='image" +
    id +
    "' style='width: 20px; height: 20px' src='#'></img></td><td><button onClick='deleteUser(this)'>X</button></td></tr>";

  //readURL(employee.file, id);
}

function addFields() {
  // Number of inputs to create
  var newEmployee = new Object();
  newEmployee.lastName = document.getElementById("lastName").value;
  newEmployee.firstName = document.getElementById("firstName").value;
  newEmployee.email = document.getElementById("email").value;
  newEmployee.gender = document.getElementById("dropdown").value;
  //newEmployee.file = document.getElementById("myfile");
  newEmployee.birthdate = document.getElementById("start").value;

  if (!validateInput(newEmployee)) {
    alert("Fields are required.");
  } 

  employeesList.push(newEmployee);

  $.ajax({
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify(newEmployee),
    url: "https://localhost:5001/employee/Employee",
    success: function (data) {
      appendRow(data);
    },
    error: function (data) {
      alert(`Failed to load employees list.`);
    },
  });
}

function filterFunction() {
  filter = $("#filtergender").val();
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
      if (
        txtValue.indexOf(filter) > -1 &&
        txtValue0.toUpperCase().indexOf(filterInput) > -1
      ) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function sortTableByDate() {
  var sortAttribute = document
    .getElementById("sortDateButton")
    .getAttribute("sort");
  if (sortAttribute == "up")
    document.getElementById("sortDateButton").setAttribute("sort", "down");
  else document.getElementById("sortDateButton").setAttribute("sort", "up");
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("table");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = new Date(rows[i].getElementsByTagName("td")[4].innerText);
      y = new Date(rows[i + 1].getElementsByTagName("td")[4].innerText);
      if (sortAttribute == "up") {
        if (x < y) {
          shouldSwitch = true;
          break;
        }
      } else if (sortAttribute == "down") {
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
