function myFunction(){
	let myDropdown = document.getElementById("myDropdown");
	myDropdown.classList.toggle("hide")
}
function myFunction1(){
	let cDropdown = document.querySelector("#cDropdown");
	cDropdown.classList.toggle("hide")
}
function myFunction3(){
	let img = document.querySelector(".cross");
	let burger = document.querySelector(".burger");
	img.classList.toggle("hide");
	burger.classList.toggle("hide");
}
function myFunction4(){
	let side =document.getElementById("side");
	side.style.display="none";
}
function myFunction5(){
	let side =document.getElementById("side");
	side.style.display="block";
}