var claim1 = {
	patientName: "John Doe",
	visitType: "Specialist",
	visitCost: 1100
}

var claim2 = {
	patientName: "Jane Doe",
	visitType: "Optical",
	visitCost: 100
}

var claim3 = {
	patientName: "Joe Johnson",
	visitType: "Emergency",
	visitCost: 31000
}

var claim4 = {
	patientName: "Sharon Smith",
	visitType: "Emergency",
	visitCost: 1300
}

var claim5 = {
	patientName: "Steve Wright",
	visitType: "Primary Care",
	visitCost: 770
}

var initialList = [claim1, claim2, claim3, claim4, claim5]


function claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}

//step 1 use the constructor function to create 5 more claim#s, then push those onto the initialList;
var claim6 = new claim("Lauren Beatty", "Primary Care", 50000);
var claim7 = new claim("Tony Thomann", "Primary Care", 300);
var claim8 = new claim("Hal Beatty", "Specialist", 3000);
var claim9 = new claim("Fritz Thomann", "Emergency", 40000);
var claim10 = new claim("Victory Carl", "Specialist", 300);


//step 2: push the new claims onto initialList
initialList.push(claim6, claim7, claim8, claim9, claim10);


/*You will need to create two functions, one will determine what percentage (per rules below) will be covered 
and another will determine what that amount will be (per the visitCost value). Within your cost determining method, 
console out a message in the format ('Paid out $______ for _______') where the second statement is the patient name.
After that is complete, console out the entire amount paid out.
Numbers should be rounded to the nearest whole number!*/

//function to determine percent covered
var specialtyPercent= 0;

function percentCovered(specialty) {
	
	switch(specialty){
	    case "Optical":
	      specialtyPercent = 0;
	      break;
	    case "Specialist":
	      specialtyPercent = 0.1;
	      break;
	    case "Emergency":
	      specialtyPercent = 1.0;
	      break;
	    case "Primary Care":
	      specialtyPercent = 0.5;
	      break;
  	}
  	return specialtyPercent;
 }


//function to determine amount covered--takes in an object and produces a string 
//amount covered should be parseInt(specialtyPercent * visitCost)
//also adds amountPaidOut key/value to each object in initialList

function amountCovered(personObj) {	
	personObj.amountPaidOut = Math.round(percentCovered(personObj.visitType) * personObj.visitCost);
	return("Paid out $" + personObj.amountPaidOut +  " for " + personObj.patientName + ".");
}


//function to determine total amount paid out
var totalPaidOut= 0;

function totalPaid(array) {
	for(var i = 0; i<array.length; i++){
		totalPaidOut = totalPaidOut + array[i].amountPaidOut;
	}
return totalPaidOut;
}

//loop through initialList, and console.log amountCovered for each patient.
for(var i = 0; i < initialList.length; i++) {
	console.log(amountCovered(initialList[i]));
}
console.log("The total amount our company paid out is $" + totalPaid(initialList) + ".");
