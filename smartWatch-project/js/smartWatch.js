function time(){
	var today=new Date();
	var time=today.toLocaleTimeString();
	var date=today.toLocaleDateString();
document.getElementById('showTime').innerHTML=time;
document.getElementById('showDate').innerHTML=date;
}
setInterval(time,1000);


var blackBnd=document.getElementById('blackBox');
var redBnd=document.getElementById('redBox');
var blueBnd=document.getElementById('blueBox');
var purpleBnd=document.getElementById('purpleBox');
var pinkBnd=document.getElementById('pinkBox');
var changeImg=document.getElementById('image');
blackBnd.onclick=function(){
	changeImg.src="images/blackBand.png";
}
redBnd.onclick=function(){
	changeImg.src="images/redBand.png";
}
blueBnd.onclick=function(){
	changeImg.src="images/blueBand.png";
}
purpleBnd.onclick=function(){
	changeImg.src="images/purpleBand.png";
}
pinkBnd.onclick=function(){
	changeImg.src="images/pinkBand.png";
}
var timeBtn=document.getElementById('timeBtn');
var heartBtn=document.getElementById('heartBtn');
var time=document.getElementById('showTime');
var date=document.getElementById('showDate');
var heartRate=document.getElementById('heartRate');
timeBtn.onclick=function(){
	
	if(time.classList.contains('hide') && date.classList.contains('hide'))
	{
		time.classList.remove('hide');
		date.classList.remove('hide');
		time.classList.add('show');
		date.classList.add('show');
		heart.classList.add('hide');
		heart.classList.remove('show');
		heartRate.classList.add('hide');
		heartRate.classList.remove('show');

	}
}
heartBtn.onclick=function(){
	if(time.classList.contains('show') && date.classList.contains('show'))
	{
		time.classList.remove('show');
		date.classList.remove('show');
		time.classList.add('hide');
		date.classList.add('hide');
		heart.classList.add('show');
		heart.classList.remove('hide');
		heartRate.classList.add('show');
		heartRate.classList.remove('hide');
	}
	var intervalId=setInterval(heartBeating,800);
}

function heartBeating(){
	var heartbeat=document.getElementById('heart');
	var newWidth=window.getComputedStyle(heartbeat).width;
	var initialWidth=parseInt(newWidth.substr(0,newWidth.length-2));
	if(initialWidth<53)
	{
		heartbeat.style.width=(initialWidth+2)+'px';
		console.log(heartbeat);
	}
	else if(initialWidth>52)
	{
		heartbeat.style.width=(initialWidth-2)+'px';
		console.log(heartbeat);
	}
}
