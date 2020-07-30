var countdown = document.getElementById('countdown');


//any content inside html element store in inner html

console.log(countdown.innerHTML);
 //WE USE SRC FOR IMG
//inner html give whatever content is inside html

var initial = countdown.innerHTML;

// it print 200 on screen - countdown.innerHTML = 200;



setInterval(function(){

countdown.innerHTML = initial-1;
if(initial ==1){
	var yo = document.getElementById('happy').innerHTML="HAPPY FRIENDSHIPDAY MERCY :)"
}


if(initial>1){initial -= 1;}

},1000  );