window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
  
  let canVote = document.getElementById("canVote");
    canVote.setAttribute("class", "hidden");
  let cantVote = document.getElementById("cantVote");
    cantVote.setAttribute("class", "hidden");

  const age = parseInt(document.querySelector("input#age").value);
  if (age >= 18) {
    canVote.removeAttribute("class");
  }
  else {
    cantVote.removeAttribute("class");
        }
      } 
    };
