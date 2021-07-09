canvas = document.getElementById("m_canva");
ctx = canvas.getContext("2d");
color = "aqua";

ctx.beginPath();
ctx.strokeStyle =color;
ctx.lineWidth=2;
ctx.arc(200,200,50,0,2*Math.PI);
ctx.stroke();
canvas.addEventListner("mousedown",my_mouse_d);
function my_mouse_d(e);
mouse_x = e.clientX - canvas.offsetLeft;
 mouse_y = e.clientY - canvas.offsetTop;
circle(mouse_x , mouse_y);
function circle(mouse_x,mouse_y)
{ctx.beginPath();
    ctx.strokeStyle =color;
    ctx.lineWidth=2;
    ctx.arc(mouse_x,mouse_y,50,0,2*Math.PI);
    ctx.stroke();}