var displayedImage = document.querySelector('.displayed-img');
   
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');

var overlay = document.querySelector('.overlay');

function changeImage(id)
{
  
    if (id=="pic1")
      {
        document.getElementById("changeimg").src = "images/pic1.jpg";
        
     //   console.log( document.getElementById("changeimg").src);
   
      }
 
    else if(id=="pic2")
         {
            document.getElementById("changeimg").src ="images/pic2.jpg";
                      
         }
    
    else if(id=="pic3")
         {
            document.getElementById("changeimg").src ="images/pic3.jpg";
     
             
         }     
       
    else if(id=="pic4")
         {
            document.getElementById("changeimg").src ="images/pic4.jpg";
     
             
    
         }

    else if(id=="pic5")
         {
            document.getElementById("changeimg").src ="images/pic5.jpg";
     
                
         }     
}


/* Wiring up the Darken/Lighten button */

btn.onclick = function() {
    var btnClass = btn.getAttribute('class'); 
    if(btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  }