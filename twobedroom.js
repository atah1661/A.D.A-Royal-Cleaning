document.getElementById("para13.5", "para14", "para15", "para16", "para17", "para18", "para19", "para20","para21,", "para22", "para23", "para24", "para25", "twobathroom", "twobathrooms", "2ndbathroom", "6bedroomheight").onclick = function() {  
    twobedroom()  
    };  
    function twobedroom() {  
    //this is the first bathroom for 2 bedrooms//
    document.getElementById("para14").innerHTML = "One-Time Service: $99.00"; 
    document.getElementById("para15").innerHTML = "Every 4 Weeks (10% Off) - $89.00  "; 
    document.getElementById("para13.5").innerHTML = "2 Bedrooms "; 
    document.getElementById("para16").innerHTML = "Every 2 Weeks (15% Off)- $84.00"; 
    document.getElementById("para17").innerHTML = "Weekly (20% Off)- $79.00"; 
    //this is bathroom #2 for 2 bedrooms//
    document.getElementById("para18").innerHTML = " One-Time Service: $119.00 "; 
    document.getElementById("para19").innerHTML = "Every 4 Weeks (10% Off) - $107.00 "; 
    document.getElementById("para20").innerHTML = "Every 2 Week (15% Off) - $101.00"; 
    document.getElementById("para21").innerHTML = "Weekly (20% Off) - $95.00";   
    //this is bathroom #3 for 2 bedrooms//
    document.getElementById("para22").innerHTML = " One-Time Service: $139.00"; 
    document.getElementById("para23").innerHTML = "Every 4 Weeks (10% Off) - $125.00"; 
    document.getElementById("para24").innerHTML = "Every 2 Week (15% Off) - $118.00"; 
    document.getElementById("para25").innerHTML = "Weekly (20% Off) - $111.00 "; 
    document.getElementById("para13.5").style.color = "white";  
    document.getElementById("twobathroom").style.color = "white"; 
    document.getElementById("2ndbathroom").style.color = "white";
    document.getElementById("twobathrooms").style.color = "white"; 
    document.getElementById("para13.5").style.backgroundColor = "#89bc0f";  
    document.getElementById("para14").style.backgroundColor = "#89bc0f";  
    document.getElementById("para15").style.backgroundColor = "#89bc0f";  
    document.getElementById("para16").style.backgroundColor = "#89bc0f"; 
    document.getElementById("para17").style.backgroundColor = "#89bc0f";  
    document.getElementById("para18").style.backgroundColor = "#89bc0f";  
    document.getElementById("para19").style.backgroundColor = "#89bc0f";  
    document.getElementById("para20").style.backgroundColor = "#89bc0f"; 
    document.getElementById("para21").style.backgroundColor = "#89bc0f";   
    document.getElementById("para22").style.backgroundColor = "#89bc0f";   
    document.getElementById("para23").style.backgroundColor = "#89bc0f";   
    document.getElementById("para24").style.backgroundColor = "#89bc0f";   
    document.getElementById("para25").style.backgroundColor = "#89bc0f";   
    document.getElementById("para13.5").style.fontSize = "25px";  
    document.getElementById("para13.5").style.border = "0px solid red";
    document.getElementById("6bedroomheight").style.marginTop = "500px";  
    document.getElementById("2bedroomheight").style.height = "605px"; 
    document.getElementById("2bedroomheight").style.width = "300px";  
    document.getElementById("2bedroomheight").style.overflowY = "hidden";
     
    }  


    document.getElementById("2bedroomheight").onmouseleave = function() {  
        twobedroomheight()  
        };  
    
        function twobedroomheight() {    
    document.getElementById("para13.5").innerHTML = "2 Bedrooms "; 
    document.getElementById("para13.5").style.color = "white";  
    document.getElementById("2bedroomheight").style.height = "50px";
    document.getElementById("2bedroomheight").style.width = "300px";
    document.getElementById("2bedroomheight").style.overflowY = "hidden";
    document.getElementById("2bedroomheight").style.color = "white";
    document.getElementById("para13.5").style.backgroundColor = "black";
    document.getElementById("para13.5").style.backgroundColor = "black";  
    document.getElementById("para13.5").style.border = "0px solid red"; 
    document.getElementById("6bedroomheight").style.marginTop = "20px";

     
    }  


