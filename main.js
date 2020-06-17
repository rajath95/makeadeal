window.onload=init;

function init()
{
  var image_one=document.getElementById("1");
  var image_two=document.getElementById("2");
  var image_three=document.getElementById("3");

image_one.onmousemove=imagepreview;
image_two.onmousemove=imagepreview;
image_three.onmousemove=imagepreview;

}


function imagepreview(event)
{
 image=event.target;
 image.src="hover.jpg";
}
