$(document).ready(function() {
  $("form#techCareer").submit(function(event){  
    event.preventDefault();
    const techtype = $("input:radio[name=techtype]:checked").val();
    const language = $("input:radio[name=language]:checked").val();
    const location = $("input:radio[name=location]:checked").val();
    const music = $("input:radio[name=music]:checked").val();
    const pet = $("input:radio[name=pet]:checked").val();
    
    
    $("#output").text(result);
    });
  });