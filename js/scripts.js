$(document).ready(function() {
  $("form#techCareer").submit(function(event){  
    event.preventDefault();
    const techType = $("input:radio[name=techType]:checked").val();
    const language = $("input:radio[name=language]:checked").val();
    const location = $("input:radio[name=location]:checked").val();
    const music = $("input:radio[name=music]:checked").val();
    const pet = $("input:radio[name=pet]:checked").val();
    
    if(techType === language && language === location) {
      $(".match").text(techType);
      $("result").show();
    } else if (language === location && location === music) {
      $(".match").text(language);
      $("result").show();
    } else if (location === music && location === pet) {
      $(".match").text(location);
    } else {
      $(".match").text("python");
      $("result").show();
    }

      if (techType === "Ruby") {
        $("#rubyResult").show();
      }
    });
  });