window.addEventListener("load", addListener)
var coursename, teachername, grade, numgrades= 0, avgrade, totalgrade= 0, report= "";
function addListener()
{
  document.getElementById("txtreport").disabled= "true";
  document.getElementById("btnsubmit").addEventListener("click",coursecheck)
}
function coursecheck()
{
  coursename = document.getElementById("txtcourse").value;
  teachername = document.getElementById("txtname").value;
  grade = document.getElementById("txtgrade").value;
  if(coursename==""||teachername==""||grade=="")
  {
    alert("Please enter all the information")
  }
  else
  {
    entercourse()
  }
}
function entercourse() 
{
  numgrades= numgrades + 1
  alert(numgrades)
  alert(totalgrade)
  alert(grade)
  totalgrade= parseInt(totalgrade)+ parseInt(grade)
  alert(totalgrade)
  avgrade= totalgrade/numgrades
  alert(avgrade)
  var msg= coursename + " " + teachername + " " + grade + avgrade
  report= report+ msg
  document.getElementById("txtreport").textContent = report;
}
  
