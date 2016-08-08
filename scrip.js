var battle = [];
var air = [];
var cruiser = [];
var dest1 = [];
var dest2 = [];
var sub = [];
var ur3;

function navFunction(imgid)
{
var lightbox = lity();
ur1 = "#";
ur2 = "div";
ur3 = ur1 + imgid + ur2;
lightbox(ur3);
}
function myFunction(imgid)
{
document.getElementById(imgid).src="images/buttonmiss.png";
var lightbox = lity();
ur1 = "#";
ur2 = "div";
ur3 = ur1 + imgid + ur2;
lightbox(ur3);
}
function subFunction(imgid)
{
document.getElementById(imgid).src="images/buttonhit.png";
var lightbox = lity();
ur1 = "#";
ur2 = "div";
ur3 = ur1 + imgid + ur2;
lightbox(ur3);
if(sub.indexOf(imgid) == -1)
{
	sub.push(imgid);
	$(ur3).append('<div id="sunk"></div>');
}
}
function airFunction(imgid)
{
document.getElementById(imgid).src="images/buttonhit.png";
var lightbox = lity();
ur1 = "#";
ur2 = "div";
ur3 = ur1 + imgid + ur2;
lightbox(ur3);
if(air.indexOf(imgid) == -1)
{
	air.push(imgid);
	if(air.length > 4)
{
	$(ur3).append('<div id="sunk"></div>');
}
else{
	$(ur3).append('<div id="hit"></div>');
}
}

}
function battleFunction(imgid)
{
document.getElementById(imgid).src="images/buttonhit.png";
var lightbox = lity();
ur1 = "#";
ur2 = "div";
ur3 = ur1 + imgid + ur2;
lightbox(ur3);
if(battle.indexOf(imgid) == -1)
{
	battle.push(imgid);
	if(battle.length > 3)
{
	$(ur3).append('<div id="sunk"></div>');
}
else{
	$(ur3).append('<div id="hit"></div>');
}
}
}
function cruiserFunction(imgid)
{
document.getElementById(imgid).src="images/buttonhit.png";
var lightbox = lity();
ur1 = "#";
ur2 = "div";
ur3 = ur1 + imgid + ur2;
lightbox(ur3);
if(cruiser.indexOf(imgid) == -1)
{
	cruiser.push(imgid);
	if(cruiser.length > 2)
{
	$(ur3).append('<div id="sunk"></div>');
}
else{
	$(ur3).append('<div id="hit"></div>');
}
}
}
function dest1Function(imgid)
{
document.getElementById(imgid).src="images/buttonhit.png";
var lightbox = lity();
ur1 = "#";
ur2 = "div";
ur3 = ur1 + imgid + ur2;
lightbox(ur3);
if(dest1.indexOf(imgid) == -1)
{
	dest1.push(imgid);
	if(dest1.length > 1)
{
	$(ur3).append('<div id="sunk"></div>');
}
else{
	$(ur3).append('<div id="hit"></div>');
}
}
}
function dest2Function(imgid)
{
document.getElementById(imgid).src="images/buttonhit.png";
var lightbox = lity();
ur1 = "#";
ur2 = "div";
ur3 = ur1 + imgid + ur2;
lightbox(ur3);
if(dest2.indexOf(imgid) == -1)
{
	dest2.push(imgid);
	if(dest2.length > 1)
{
	$(ur3).append('<div id="sunk"></div>');
}
else{
	$(ur3).append('<div id="hit"></div>');
}
}
}

