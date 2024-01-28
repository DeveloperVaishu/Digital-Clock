let hrs=document.getElementById("hours");
let min=document.getElementById("minute");
let sec=document.getElementById("second");

setInterval(clock,1000);
function clock(){
    let time=new Date();
    hrs.innerHTML=(time.getHours()<10?"0":"") + time.getHours();
    min.innerHTML=(time.getMinutes()<10?"0":"") + time.getMinutes();
    sec.innerHTML=(time.getSeconds()<10?"0":"") + time.getSeconds();
}