var target;
var todds1;
var todds2;
var bet1;
var bet2;
var profit;

function targetinputfunc(input)
{
    target = input.value;
    
	document.getElementById("targetoutput").innerHTML = target * 0.90;
}
function todds1func(input)
{
    todds1 = input.value;
    bet1 = target / todds1
    document.getElementById("tbet1").innerHTML = bet1;
    profit = ((((bet1 * todds1) + (bet2 * todds2))) / 2) - ((bet1 + bet2) * 0.90)
    document.getElementById("toutcomeprof").innerHTML = profit;
}
function todds2func(input)
{
    todds2 = input.value;
    bet2 = target / todds2
    document.getElementById("tbet2").innerHTML = bet2;
    profit = ((bet1 * todds1) + (bet2 * todds2)) - ((bet1 + bet2) * 0.90)
    document.getElementById("toutcomeprof").innerHTML = profit;
}


