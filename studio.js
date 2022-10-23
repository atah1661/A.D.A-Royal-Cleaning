document.getElementById("para", "para1", "para2", "para3", "para4", "studiobath", "4bedromheight").onclick = function() {  
    studio()  
    };  

    function studio() {  
    document.getElementById("para1").innerHTML = "One-Time Service: $79.00"; 
    document.getElementById("para2").innerHTML = "Every 4 Weeks (10% Off) - $71.00  "; 
    document.getElementById("para3").innerHTML = "Every 2 Weeks (15% Off) - $67.00 "; 
    document.getElementById("para4").innerHTML = "Weekly (20% Off)- $63.00"; 
    document.getElementById("para").style.color = "black";
    document.getElementById("studiobath").style.color = "white";  
    document.getElementById("para").style.backgroundColor = "#89bc0f";  
    document.getElementById("para1").style.backgroundColor = "#89bc0f";  
    document.getElementById("para2").style.backgroundColor = "#89bc0f";  
    document.getElementById("para3").style.backgroundColor = "#89bc0f"; 
    document.getElementById("para4").style.backgroundColor = "#89bc0f";   
    document.getElementById("para").style.fontSize = "25px";  
    document.getElementById("para").style.border = "0px solid red";  
    document.getElementById("4bedroomheight").style.marginTop = "150px"; 
    document.getElementById("studioheight").style.height = "240px"; 
    document.getElementById("studioheight").style.width = "300px"; 
    document.getElementById("studioheight").style.overflowY = "hidden";
    }  
    
    document.getElementById("studioheight").onmouseleave = function() {  
        studioheight()  
        };  
    
        function studioheight() {    
    document.getElementById("para").innerHTML = "Studio" ; 
    document.getElementById("para").style.color = "white";  
    document.getElementById("studioheight").style.height = "50px";
    document.getElementById("studioheight").style.width = "300px";
    document.getElementById("studioheight").style.overflowY = "hidden";
    document.getElementById("studioheight").style.color = "white";
    document.getElementById("para").style.backgroundColor = "black";
    document.getElementById("para").style.backgroundColor = "black";  
    document.getElementById("para").style.border = "0px solid red"; 

     
    }  

