//Save input values to array
function saveToarray() {
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	var inputsValue = [];
	inputsValue.push(username,password);
	console.log(inputsValue);
}
// check validate input field empty or not
function validationFields(formid) {
  let check = true;
  let input = document.getElementById(`${formid}`);
  var inputValue = input.querySelectorAll("input");
  for (let index = 0; index < inputValue.length; index++) {
    const element = inputValue[index].value;
    if (element == "") {
      inputValue[index].classList.add("error");
      check = false;
    }
  }
  return check;
}
function login(){
	var formid = document.getElementById('login-Form').value;
	var checkBox = document.getElementById('rememberMe').checked;
	if (validationFields(formid)) {
		saveToarray();
		if (checkBox == false) {
			alert("You are login without Remember me")
		}
		else{
			alert("you are login with Remember me");
		}
	}
	else{
		document.getElementById("error-alert").style.display = "block";
	}
}
//function to clear input field
function clearInput(){
	var username = document.getElementById('username');
	var password = document.getElementById('password');
	username.value = "";
	password.value = "";
}
//function to close error pop up
function closeError() {
  document.getElementById("error-alert").style.display = "none";
}
