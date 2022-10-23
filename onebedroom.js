//This is 1 Bedroom and two baths//
document.getElementById("para5.5", "para6", "para7", "para8", "para9", "onebath", "twobath", "5bedroomheight").onclick = function() {  
    onebedroom()  
    };  

    function onebedroom() {  
    document.getElementById("para6").innerHTML = "One-Time Service: $89.00"; 
    document.getElementById("para7").innerHTML = "Every 4 Weeks (10% Off) - $80.00  "; 
    document.getElementById("para5.5").innerHTML = "1 Bedroom "; 
    document.getElementById("para8").innerHTML = "Weekly (20% Off)- $76.00"; 
    document.getElementById("para9").innerHTML = "Weekly (20% Off)- $71.00"; 
    document.getElementById("para10").innerHTML = "One-Time Service: $109.00"; 
    document.getElementById("para11").innerHTML = "Every 4 Weeks (10% Off) - $98.00  "; 
    document.getElementById("para12").innerHTML = "One-Time Service: $93.00"; 
    document.getElementById("para13").innerHTML = "Every 4 Weeks (10% Off) - $87.00  "; 
    document.getElementById("para5.5").style.color = "black";
    document.getElementById("onebath").style.color = "white";
    document.getElementById("twobath").style.color = "white";  
    document.getElementById("para5.5").style.backgroundColor = "#89bc0f";  
    document.getElementById("para6").style.backgroundColor = "#89bc0f";  
    document.getElementById("para7").style.backgroundColor = "#89bc0f";  
    document.getElementById("para8").style.backgroundColor = "#89bc0f"; 
    document.getElementById("para9").style.backgroundColor = "#89bc0f";  
    document.getElementById("para10").style.backgroundColor = "#89bc0f";  
    document.getElementById("para11").style.backgroundColor = "#89bc0f";  
    document.getElementById("para12").style.backgroundColor = "#89bc0f"; 
    document.getElementById("para13").style.backgroundColor = "#89bc0f";   
    document.getElementById("para5.5").style.fontSize = "25px";  
    document.getElementById("para5.5").style.border = "0px solid red";  
    document.getElementById("5bedroomheight").style.marginTop = "200px"; 
     
    }  

    //Height of 1bedroom after 1 Bedroom is clicked//
    document.getElementById("1bedroomheight").onclick = function() {  
        onebedroomheight()  
        };  
    
        function onebedroomheight() { 
        document.getElementById("1bedroomheight").style.height = "450px"; 
        document.getElementById("1bedroomheight").style.width = "300px";  
        document.getElementById("para6").innerHTML = "One-Time Service: $79.00  "; 
        document.getElementById("para7").innerHTML = "Every 4 Weeks (10% Off) - $71.00"; 
        document.getElementById("para8").innerHTML = "Every 2 Week (15% Off) - $67.00 "; 
        document.getElementById("para9").innerHTML = "Weekly (20% Off)- $71.00"; 
        //The part underneath is the second bathroom's service for 1 bedroom//
        document.getElementById("para10").innerHTML = "One-Time Service: $109.00"; 
        document.getElementById("para11").innerHTML = "Every 4 Weeks (10% Off) - $98.00  "; 
        document.getElementById("para12").innerHTML = "One-Time Service: $93.00"; 
        document.getElementById("para13").innerHTML = "Every 4 Weeks (10% Off) - $87.00  "; 
        document.getElementById("para5.5").style.color = "black";  
        document.getElementById("onebath").style.color = "white";
        document.getElementById("twobath").style.color = "white";  
        document.getElementById("para5.5").style.backgroundColor = "#89bc0f";  
        document.getElementById("para6").style.backgroundColor = "#89bc0f";  
        document.getElementById("para7").style.backgroundColor = "#89bc0f";  
        document.getElementById("para8").style.backgroundColor = "#89bc0f";  
        document.getElementById("para9").style.backgroundColor = "#89bc0f";   
        document.getElementById("para10").style.backgroundColor = "#89bc0f";  
        document.getElementById("para11").style.backgroundColor = "#89bc0f";  
        document.getElementById("para12").style.backgroundColor = "#89bc0f"; 
        document.getElementById("para13").style.backgroundColor = "#89bc0f";   
        document.getElementById("para5.5").style.fontSize = "25px";  
        document.getElementById("para5.5").style.border = "0px solid red";  
        document.getElementById("5bedroomheight").style.marginTop = "360px"; 

        }