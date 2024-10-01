window.addEventListener("load",addlistener);
var selectedvalue, outputnum, tempnum, operation, glenum, lastoperation, overwrite;

function addlistener()
{
	overwrite = false;
	outputnum = null;
	tempnum = null;
	lastoperation = null;
	glenum = null;
	operation = null;
	document.getElementById("txtnumdisplay").disabled = true;
	document.getElementById("txtoutputdisplay").disabled = true;
	document.getElementById("btndecimal").addEventListener("click", numdecimal);
	document.getElementById("btn0").addEventListener("click", num0);
	document.getElementById("btn1").addEventListener("click", num1);
	document.getElementById("btn2").addEventListener("click", num2);
	document.getElementById("btn3").addEventListener("click", num3);
	document.getElementById("btn4").addEventListener("click", num4);
	document.getElementById("btn5").addEventListener("click", num5);
	document.getElementById("btn6").addEventListener("click", num6);
	document.getElementById("btn7").addEventListener("click", num7);
	document.getElementById("btn8").addEventListener("click", num8);
	document.getElementById("btn9").addEventListener("click", num9);
	document.getElementById("btnpi").addEventListener("click", numpi);
	document.getElementById("btnclear").addEventListener("click", clear);
	document.getElementById("btnadd").addEventListener("click", addition);
	document.getElementById("btnsubtract").addEventListener("click", subtraction);
	document.getElementById("btnmultiply").addEventListener("click", multiplication);
	document.getElementById("btndivide").addEventListener("click", division);
	document.getElementById("btnpercent").addEventListener("click", percent);
	document.getElementById("btnsquare").addEventListener("click", square);
	document.getElementById("btnradians").addEventListener("click", radians);
	document.getElementById("btndegrees").addEventListener("click", degrees);
	document.getElementById("btnflip").addEventListener("click", flip);
	document.getElementById("btngle").addEventListener("click", gle);
	document.getElementById("btnenter").addEventListener("click", enter);
	document.getElementById("btnnaturallog").addEventListener("click", naturallog);
	document.getElementById("btnlog").addEventListener("click", log);
	document.getElementById("btnpower").addEventListener("click", power);
	document.getElementById("btnsin").addEventListener("click", sin);
	document.getElementById("btncos").addEventListener("click", cos);
	document.getElementById("btntan").addEventListener("click", tan);
	document.getElementById("btnexp").addEventListener("click", exp);
	document.getElementById("btnsqrt").addEventListener("click", sqrt);
	document.getElementById("btnfactorial").addEventListener("click", factorial);
}
function num0() {selectedvalue = 0; numdisplaychange();}
function num1() {selectedvalue = 1; numdisplaychange();}
function num2() {selectedvalue = 2; numdisplaychange();}
function num3() {selectedvalue = 3; numdisplaychange();}
function num4() {selectedvalue = 4; numdisplaychange();}
function num5() {selectedvalue = 5; numdisplaychange();}
function num6() {selectedvalue = 6; numdisplaychange();}
function num7() {selectedvalue = 7; numdisplaychange();}
function num8() {selectedvalue = 8; numdisplaychange();}
function num9() {selectedvalue = 9; numdisplaychange();}
function numpi() {selectedvalue = 3.14; numdisplaychange();}
function numdecimal()
{
	if (document.getElementById("txtnumdisplay").value == "")
	{
		selectedvalue = "0.";
	}
	else
	{
		selectedvalue = ".";
	}
	numdisplaychange();
}
function checkvalue()
{
	numdisplay = document.getElementById("txtnumdisplay").value;
	if (numdisplay == "")
	{
		alert("Lil bro you goofy ahh is missing an input.");
		return false;
	}
	else
	{
		return true;
	}
}
function arithmeticoperation()
{
	switch (operation)
		{
			case "addition":
				outputnum = parseFloat(tempnum) + parseFloat(outputnum);
				break;
			case "subtraction":
				outputnum = parseFloat(tempnum) - parseFloat(outputnum);
				break;
			case "multiplication":
				outputnum = parseFloat(tempnum) * parseFloat(outputnum);
				break;
			case "division":
				outputnum = parseFloat(tempnum) / parseFloat(outputnum);
				break;
		}
}
function numdisplaychange()
{
	if (["sin", "cos", "tan", "enter", "radians", "degrees", "log", "naturallog", "sqrt", "exp", "flip", "factorial"].includes(operation))
	{
		document.getElementById("txtoutputdisplay").value = selectedvalue;
		operation = null;
	}
	if (overwrite == true)
	{
		document.getElementById("txtnumdisplay").value = selectedvalue;
		outputdisplaychange();
		overwrite = false;
	}
	else
	{
		document.getElementById("txtnumdisplay").value += selectedvalue;
		outputdisplaychange();
		overwrite = false;
	}
}
function outputdisplaychange()
{
	outputnum = document.getElementById("txtnumdisplay").value;
	if (operation == "enter")
	{
		operation = lastoperation;
	}
	arithmeticoperation()
	switch (operation)
	{
		case "percent":
			outputnum = (parseFloat(tempnum) * parseFloat(outputnum)) / 100;
			break;
		case "square":
			outputnum = parseFloat(tempnum) * parseFloat(tempnum);
			break;
		case "radians":
			outputnum = parseFloat(tempnum) * (3.14 / 100);
			break;
		case "degrees":
			outputnum = parseFloat(tempnum) * (100 / 3.14);
			break;
		case "flip":
			outputnum = parseFloat(tempnum) * -1;
			break;
		case "power":
			outputnum = Math.pow(parseFloat(tempnum), parseFloat(outputnum));
			break;
		case "naturallog":
			outputnum = Math.log(parseFloat(tempnum));
			break;
		case "log":
			outputnum = Math.log10(parseFloat(tempnum));
			break;
		case "sin":
			outputnum = Math.sin(parseFloat(tempnum));
			break;
		case "cos":
			outputnum = Math.cos(parseFloat(tempnum));
			break;
		case "tan":
			outputnum = Math.tan(parseFloat(tempnum));
			break;
		case "exp":
			outputnum = Math.exp(parseFloat(tempnum));
			break;
		case "sqrt":
			outputnum = Math.sqrt(parseFloat(tempnum));
			break;
		case "factorial":
			if (tempnum < 0 || !Number.isInteger(tempnum))
			{
				outputnum = 0;
			}
			else if (tempnum == 0 || tempnum == 1)
			{
				outputnum = 1;
			}
			else
			{
				outputnum = 1;
				for (let i = 2; i <= tempnum; i++)
				{
					outputnum *= i;
				}
			}
			break;
		case "gle":
			glenum = parseFloat(outputnum);
			if (tempnum > glenum)
			{
				outputnum = tempnum + " > " + glenum;
			}
			else if (tempnum < glenum)
			{
				outputnum = tempnum + " < " + glenum;
			}
			else
			{
				outputnum = tempnum + " = " + glenum;
			}
			break;
	}
	lastoperation = operation;
	document.getElementById("txtoutputdisplay").value = outputnum;
}
function tempnumstate(status)
{
	switch (status)
	{
		case "outputdisplay":
			tempnum = parseFloat(document.getElementById("txtoutputdisplay").value);
			overwrite = true;
			break;
		case "outputdisplay2":
			tempnumstate("outputdisplay");
			document.getElementById("txtnumdisplay").value = document.getElementById("txtoutputdisplay").value;
			outputdisplaychange();
			break;
	}
}
function clear()
{
	document.getElementById("txtnumdisplay").value = null;
	document.getElementById("txtoutputdisplay").value = null;
	overwrite = false;
	outputnum = null;
	tempnum = null;
	lastoperation = null;
	glenum = null;
	operation = null;
}
function enter()
{
	if (["gle", "percent", null].includes(operation) == false)
	{
		if (["square", "log", "naturallog", "exp", "sqrt"].includes(operation))
		{
			overwrite = true;
			selectedvalue = document.getElementById("txtoutputdisplay").value;
			numdisplaychange();
		}
		else if (operation == "sin" || operation == "cos" || operation == "tan")
		{
			tempnumstate("outputdisplay2");
		}
		if (["addition", "subtraction", "multiplication", "division"].includes(operation))
		{
			outputnum = document.getElementById("txtoutputdisplay").value;
			tempnum = document.getElementById("txtnumdisplay").value;
			arithmeticoperation();
			document.getElementById("txtoutputdisplay").value = outputnum;
			overwrite = true;
		}
		else if (checkvalue() == true)
		{
			operation = "enter";
			tempnumstate("outputdisplay2");
		}
	}
}
function gleselected()
{
	if (operation == "gle")
	{
		operation = null;
		outputdisplaychange();
	}
}
function addition() {gleselected(); if  (checkvalue() == true) {operation = "addition"; tempnumstate("outputdisplay");}}
function subtraction() {gleselected(); if (checkvalue() == true) {operation = "subtraction"; tempnumstate("outputdisplay");}}
function multiplication() {gleselected(); if (checkvalue() == true) {operation = "multiplication"; tempnumstate("outputdisplay");}}
function division() {gleselected(); if (checkvalue() == true) {operation = "division"; tempnumstate("outputdisplay");}}
function percent() {gleselected(); if (checkvalue() == true) {operation = "percent"; tempnumstate("outputdisplay");}}
function square() {gleselected(); if (checkvalue() == true) {operation = "square"; tempnumstate("outputdisplay2");}}
function radians() {gleselected(); if (checkvalue() == true) {operation = "radians"; tempnumstate("outputdisplay2");}}
function degrees() {gleselected(); if (checkvalue() == true) {operation = "degrees"; tempnumstate("outputdisplay2");}}
function flip() {gleselected(); if (checkvalue() == true) {operation = "flip"; tempnumstate("outputdisplay2");}}
function naturallog() {gleselected(); if (checkvalue() == true) {operation = "naturallog"; tempnumstate("outputdisplay2");}}
function log() {gleselected(); if (checkvalue() == true) {operation = "log"; tempnumstate("outputdisplay2");}}
function power() {gleselected(); if (checkvalue() == true) {operation = "power"; tempnumstate("outputdisplay2");}}
function sin() {gleselected(); if (checkvalue() == true) {operation = "sin"; tempnumstate("outputdisplay2");}}
function cos() {gleselected(); if (checkvalue() == true) {operation = "cos"; tempnumstate("outputdisplay2");}}
function tan() {gleselected(); if (checkvalue() == true) {operation = "tan"; tempnumstate("outputdisplay2");}}
function exp() {gleselected(); if (checkvalue() == true) {operation = "exp"; tempnumstate("outputdisplay2");}}
function sqrt() {gleselected(); if (checkvalue() == true) {operation = "sqrt"; tempnumstate("outputdisplay2");}}
function factorial() {gleselected(); if (checkvalue() == true) {operation = "factorial"; tempnumstate("outputdisplay2");}}
function gle()
{
	if (operation == "gle")
	{
		document.getElementById("txtoutputdisplay").value = document.getElementById("txtnumdisplay").value;
		operation = null;
		overwrite = false;
	}
	else
	{
		if (checkvalue() == true)
		{
			operation = "gle";
			tempnumstate("outputdisplay");
		}
	}
}
