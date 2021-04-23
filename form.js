function addFields(){
    // Number of inputs to create
    var lastName = document.getElementById("lastName").value;
    var firstName = document.getElementById("firstName").value;
    var email = document.getElementById("email").value;
    var date = document.getElementById("start").value;
    // Container <div> where dynamic content will be placed
    var list = document.getElementsByClassName("list");

    document.getElementById("table").insertRow(-1).innerHTML = '<tr><td>'+lastName+'</td><td>'+firstName+'</td><td>'+email+'</td><td>Sex</td><td>'+date+'</td></tr>';
}