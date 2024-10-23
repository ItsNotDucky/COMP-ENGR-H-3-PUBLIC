window.addEventListener("load", addlistener);
var studentname, studentid, courseamount, coursename, courseteacher, coursegrade, tempamount, tempid, gpa, totalaverage, lettergrade;
function addlistener() {
	totalgrade = null;
	tempamount = 0;
	document.getElementById("lblhidden1").style.visibility = "hidden";
	document.getElementById("lblhidden2").style.visibility = "hidden";
	document.getElementById("lblhidden3").style.visibility = "hidden";
	document.getElementById("txtcoursename").style.visibility = "hidden";
	document.getElementById("txtcourseteacher").style.visibility = "hidden";
	document.getElementById("txtcoursegrade").style.visibility = "hidden";
	document.getElementById("btnsubmit2").style.visibility = "hidden";
	document.getElementById("parhidden").style.visibility = "hidden";
	document.getElementById("txtcoursename").disabled = true;
	document.getElementById("txtcourseteacher").disabled = true;
	document.getElementById("txtcoursegrade").disabled = true;
	document.getElementById("btnsubmit2").disabled = true;
	document.getElementById("btnsubmit1").addEventListener("click", studentinfo);
	document.getElementById("btnsubmit2").addEventListener("click", courseinfo);
	document.getElementById("txtstudentname").focus();
}
function studentinfo() {
	studentname = document.getElementById("txtstudentname").value;
	studentid = document.getElementById("txtstudentid").value;
	courseamount = document.getElementById("txtcourseamount").value;
	if (studentname && studentid && courseamount) {
		if (studentid.length == 9) {
			switch (courseamount) {
				case "1": courseamount = 1; coursecheck(); break; 
				case "2": courseamount = 2; coursecheck(); break; 
				case "3": courseamount = 3; coursecheck(); break; 
				case "4": courseamount = 4; coursecheck(); break; 
				case "5": courseamount = 5; coursecheck(); break; 
				case "6": courseamount = 6; coursecheck(); break; 
				case "7": courseamount = 7; coursecheck(); break; 
				case "8": courseamount = 8; coursecheck(); break; 
				case "9": courseamount = 9; coursecheck(); break; 
				case "10": courseamount = 10; coursecheck(); break;
                default:
                    alert("Invalid course amount");
                    document.getElementById("txtcourseamount").value = null;
                    document.getElementById("txtcourseamount").focus();
                    break;
            }
		} else {
			alert("Student ID must be 9 digits");
			document.getElementById("txtstudentid").focus();
		}
	} else {
		alert("Please fill info boxes");
		if (!studentname) {
			document.getElementById("txtstudentname").focus();
		} else if (!studentid) {
			document.getElementById("txtstudentid").focus();
		} else if (!courseamount) {
			document.getElementById("txtcourseamount").focus();
		}
	}
}
function coursecheck() {
	document.getElementById("lbloutputname").textContent = "Student Name: " + studentname;
	document.getElementById("lbloutputid").textContent = "Student ID: " + studentid;
	document.getElementById("lblhidden1").style.visibility = "visible";
	document.getElementById("lblhidden2").style.visibility = "visible";
	document.getElementById("lblhidden3").style.visibility = "visible";
	document.getElementById("txtcoursename").style.visibility = "visible";
	document.getElementById("txtcourseteacher").style.visibility = "visible";
	document.getElementById("txtcoursegrade").style.visibility = "visible";
	document.getElementById("btnsubmit2").style.visibility = "visible";
	document.getElementById("txtcoursename").disabled = false;
	document.getElementById("txtcourseteacher").disabled = false;
	document.getElementById("txtcoursegrade").disabled = false;
	document.getElementById("btnsubmit2").disabled = false;
	document.getElementById("txtstudentname").disabled = true;
	document.getElementById("txtstudentid").disabled = true;
	document.getElementById("txtcourseamount").disabled = true;
	document.getElementById("btnsubmit1").disabled = true;
	document.getElementById("txtcoursename").focus()
}
function courseinfo() {
	if (tempamount < courseamount) {
		tempamount += 1
		coursename = document.getElementById("txtcoursename").value;
		courseteacher = document.getElementById("txtcourseteacher").value;
		coursegrade = document.getElementById("txtcoursegrade").value;
		coursegrade = parseFloat(coursegrade)
		if (coursename && courseteacher && coursegrade) {
			if (coursegrade <= 100 && coursegrade >= 0) {
				totalgrade += coursegrade
				tempid = "lbloutput" + tempamount
				document.getElementById(tempid).textContent = "Course Name: " + coursename;
				document.getElementById(tempid).textContent += " | Teacher: " + courseteacher;
				document.getElementById(tempid).textContent += " | Average: " + coursegrade;
				courseoutputinfo()
			} else {
				alert("Invalid grade input")
				document.getElementById("txtcoursegrade").value = null;
				document.getElementById("txtcoursegrade").focus();
			}
		} else {
			alert("Please fill info boxes");
			if (!coursename) {
				document.getElementById("txtcoursename").focus();
			} else if (!courseteacher) {
				document.getElementById("txtcourseteacher").focus();
			} else if (!coursegrade) {
				document.getElementById("txtcoursegrade").focus();
			}
		}
	}
}
function courseoutputinfo() {
    if (tempamount == courseamount) {
        totalaverage = totalgrade / courseamount;
        document.getElementById("lbloutputgrades").textContent = "Overall Average: " + totalaverage + "%";
        gpa = (totalaverage / 100) * 4.0;
        document.getElementById("lbloutputgrades").textContent += " | GPA: " + gpa;
        if (totalaverage >= 90) {
            lettergrade = "A";
        } else if (totalaverage >= 80) {
            lettergrade = "B";
        } else if (totalaverage >= 70) {
            lettergrade = "C";
        } else if (totalaverage >= 60) {
            lettergrade = "D";
        } else {
            lettergrade = "F";
        }
        document.getElementById("lbloutputgrades").textContent += " | Letter Grade: " + lettergrade;
        document.getElementById("txtcoursename").disabled = true;
        document.getElementById("txtcourseteacher").disabled = true;
        document.getElementById("txtcoursegrade").disabled = true;
        document.getElementById("btnsubmit2").disabled = true;
        document.getElementById("parhidden").style.visibility = "visible";
    } else {
        document.getElementById("txtcoursename").value = null;
        document.getElementById("txtcourseteacher").value = null;
        document.getElementById("txtcoursegrade").value = null;
        document.getElementById("txtcoursename").focus();
    }
}