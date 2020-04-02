const deadline = new Date("nov 3, 2020 06:00:00").getTime(); 
  
function addZero (n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

const x = setInterval(function() { 
  
const now = new Date().getTime(); 
const t = deadline - now; 
const days = Math.floor(t / (1000 * 60 * 60 * 24)); 
const hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
const seconds = Math.floor((t % (1000 * 60)) / 1000);


document.getElementById("day").innerHTML =days ; 
document.getElementById("hour").innerHTML = addZero(hours); 
document.getElementById("minute").innerHTML = addZero(minutes);  
document.getElementById("second").innerHTML =addZero(seconds);  
if (t < 0) { 
        clearInterval(x); 
        document.getElementById("demo").innerHTML = "TIME UP"; 
        document.getElementById("day").innerHTML ='0'; 
        document.getElementById("hour").innerHTML ='0'; 
        document.getElementById("minute").innerHTML ='0' ;  
        document.getElementById("second").innerHTML = '0'; } 
}, 1000); 