const navLinks = document.querySelectorAll('nav a');


navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      if(event.target.textContent == "HOME"){
        location.href = "/main";   
      }
      if(event.target.textContent == "VEHICLE"){
        location.href = "/vehicles";        
      }
      if(event.target.textContent == "EMPLOYEES"){
        location.href = "/employees";        
      }
    });
  });