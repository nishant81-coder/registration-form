const form = document.getElementById("form");

const passwordInput = document.getElementById("password");
const strength = document.getElementById("strength");

passwordInput.addEventListener("input", () => {

let pass=passwordInput.value;

if(pass.length<6){
strength.innerText="Weak Password";
}
else if(pass.length<10){
strength.innerText="Medium Password";
}
else{
strength.innerText="Strong Password";
}

});

function togglePassword(){

if(passwordInput.type==="password"){
passwordInput.type="text";
}
else{
passwordInput.type="password";
}

}

form.addEventListener("submit", function(e){

e.preventDefault();

let data={
name:document.getElementById("name").value,
email:document.getElementById("email").value,
phone:document.getElementById("phone").value,
password:passwordInput.value
};

let submissions=JSON.parse(localStorage.getItem("submissions")) || [];

submissions.push(data);

localStorage.setItem("submissions", JSON.stringify(submissions));

alert("Registration Saved");

});
