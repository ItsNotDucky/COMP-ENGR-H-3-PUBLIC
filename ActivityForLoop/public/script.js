window.addEventListener("load",addlistener);
var selected, amount, total, count, input;
function addlistener() {
	selected = true
	total = 0
	count = 0
	document.getElementById("lbloutput").style.visibility = "hidden";
	document.getElementById("btnsubmit").addEventListener("click", operation);
}
function inputclear() {
	document.getElementById("txtinput").value = null;
	document.getElementById("txtinput").focus();
}
function operation() {
	if (selected) {
		gradeamount();
	} else {
		gradegpascale();
	}
}
function gradeamount() {
	amount = parseFloat(document.getElementById("txtinput").value);
	if (amount % 1 == 0 && amount > -1) {
		if (amount == 0) {
			alert("Cant have 0 grades");
			document.getElementById("txtinput").focus();
		} else {
			document.getElementById("lblprompt").textContent = "Grade Number";
			inputclear();
			selected = false;
		}
	} else {
		alert("Invalid grade amount");
		inputclear();
	}
}
function gradegpascale() {
	grade = parseFloat(document.getElementById("txtinput").value);
	if (grade <= 100 && grade >= 0) {
		for (let i = count; i < amount; i++) {
			total += grade;
			grade = 0;
		}
		count += 1
		inputclear();
		if (count == amount) {
			document.getElementById("btnsubmit").disabled = true;
			document.getElementById("txtinput").disabled = true;
			document.getElementById("lbloutput").style.visibility = "visible";
			let average = total / amount;
			document.getElementById("lbloutput").textContent += calculate(average);
		}
	} else {
		alert("Invalid grade");
		inputclear();
	}
}
function calculate(value) {
	switch (true) {
		case value >= 90:
			return 4;
		case value >= 80:
			return 3;
		case value >= 70:
			return 2;
		case value >= 60:
			return 1;
		default:
			return 0;
	}
}