//Global Variables
var globalRoomPrice;
var globalDateDiff;
var globalStayPrice;
var globalSubtotal;
var globalTotalPrice;

//Functions
function roomPricing()
{
	//Room Price
	var select = document.getElementById('roomBox');
	var option = select.options[select.selectedIndex];
	document.getElementById('priceBox1').value = option.value;
	globalRoomPrice = option.value;
	valiDate();
}

function daysBetween()
{
	//Dates Difference
	var date1 = new Date(document.getElementById('checkInBox').value);
	var date2 = new Date(document.getElementById('checkOutBox').value);
	var diffTime = Math.abs(date2 - date1);
	globalDateDiff = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	document.getElementById('durationBox1').value = globalDateDiff;
	valiMeal();
}

function memberDiscount()
{
	//Membership Price
	calculate();
	if (document.getElementById('Ymember').checked = true)
	{
		globalSubtotal = globalStayPrice * (90 / 100);
		globalTotalPrice = globalSubtotal.toFixed(2);
		document.getElementById('totalPriceBox').value = globalTotalPrice;
	}
}

function nonMember()
{
	//Non-members Price
	calculate();
	if (document.getElementById('Nmember').checked = true)
	{
		globalSubtotal = globalStayPrice * 1;
		globalTotalPrice = globalSubtotal.toFixed(2);
		document.getElementById('totalPriceBox').value = globalTotalPrice;
	}
}

//Sub Functions for processing and calculation
function calculate()
{
	roomPricing(globalRoomPrice);
	daysBetween(globalDateDiff);
	globalStayPrice = document.getElementById('priceBox1').value * document.getElementById('durationBox1').value;
}

//Validation Functions for conditional selections
function valiDate()
{
	if (globalRoomPrice != 0.00)
	{
		document.getElementById('checkInBox').disabled = false;
		document.getElementById('checkOutBox').disabled = false;
	}

	else
	{
		document.getElementById('checkInBox').disabled = true;
		document.getElementById('checkOutBox').disabled = true;
	}
}

function valiMeal()
{
	if (globalDateDiff != 0)
	{
		document.getElementById('food1').disabled = false;
		document.getElementById('food2').disabled = false;
		document.getElementById('food3').disabled = false;
	}

	else
	{
		document.getElementById('food1').disabled = true;
		document.getElementById('food2').disabled = true;
		document.getElementById('food3').disabled = true;
	}
}

function valiMember()
{
	if (document.getElementById('food1').checked = true)
	{
		document.getElementById('Ymember').disabled = false;
		document.getElementById('Nmember').disabled = false;
	}

	else if (document.getElementById('food2').checked = true)
	{
		document.getElementById('Ymember').disabled = false;
		document.getElementById('Nmember').disabled = false;
	}

	else if (document.getElementById('food3').checked = true)
	{
		document.getElementById('Ymember').disabled = false;
		document.getElementById('Nmember').disabled = false;
	}

	else
	{
		document.getElementById('Ymember').disabled = true;
		document.getElementById('Nmember').disabled = true;
	}
}


function valiForm() 
{
    if (document.bform.checkValidity())
    {
        alert("Booking was sucessful! We look forward to seeing you here.");
    }
}