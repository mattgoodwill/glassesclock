<script>

var lefteyeR = 120; // this is radius of cirle
var minuteR = 40; // this is radius of cirle

function expansion() { 
    var lefteye = document.getElementById("lefteye");
    var minute = document.getElementById("minute");
    var righteye = document.getElementById("righteye");
    var hours = document.getElementById("hours");

    var lefteyeCx = lefteye.getAttribute('cx');
    var lefteyeCy = lefteye.getAttribute('cy');
    var righteyeCx = righteye.getAttribute('cx');
    var righteyeCy = righteye.getAttribute('cy');

    var theTime = new Date();
    minuteR = theTime.getMinutes() / 59 * 100;
    hoursR = theTime.getHours() / 23 * 100;
  
    minute.setAttribute('transform', 'rotate(' + minuteR + ',' + lefteyeCx + ',' + lefteyeCy + ')');
    hours.setAttribute('transform', 'rotate(' + hoursR + ',' + righteyeCx + ',' + righteyeCy + ')');
}

setInterval(expansion, 10);

// left eyebrow - seconds below

var leftEyebrow = document.getElementById("LeftEyebrow");
  var rotatestring = "rotate(" + calcRotation(currentTime.getSeconds()) + "," + 480 + "," + 193 + ")";
  //console.log(rotatestring);
 
 LeftEyebrow.setAttribute('transform', rotatestring);

function calcRotation( secs )
{
  var offset = -45;
  
  var rotation = secs;
  
  if (secs > 29)
  {
    rotation = 60-secs;
  } 
  
  return rotation+offset; 
}

// right eyebrow - seconds below

var RightEyebrow = document.getElementById("RightEyebrow");
  var rotatestring = "rotate(" + calcRotation(currentTime.getSeconds()) + "," + 480 + "," + 193 + ")";
  //console.log(rotatestring);
 
 RightEyebrow.setAttribute('transform', rotatestring);

function calcRotation( secs )
{
  var offset = -45;
  
  var rotation = secs;
  
  if (secs > 29)
  {
    rotation = 60-secs;
  } 
  
  return rotation+offset; 
}

</script>