var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
const radiusMain = 200;
context.translate(canvas.height / 2, canvas.width / 2);

setInterval(drawClock, 1000);
function drawClock(){
    context.save();
    drawMain(context);
    drawTime(context, radiusMain);
    context.restore();
}

function drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    console.log("horas: ", hour);
    console.log("minutos: ", minute);
    console.log("second: ", second);

    hour = hour + (minute/60);
    minute = minute*0.2;
    second = second*0.2;

    drawCircle(ctx, hour, radius*0.5, "#86C88A");
    drawCircle(ctx, minute-hour, radius*0.25, "#ECD671");
    drawCircle(ctx, second-minute, radius*0.07, "white");  
}


function drawCircle(ctx, time, radius, color){
    ctx.beginPath();
    ang = time * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.5-20); 
    ctx.arc(0, 0, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = color;
    ctx.fill();  
}

function drawMain(ctx){
    ctx.beginPath();
    ctx.arc(0, 0, radiusMain, 0, 2 * Math.PI, false);
    ctx.fillStyle = "#70B2D2";
    ctx.fill();

}



