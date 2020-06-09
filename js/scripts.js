$(document).ready(function() {
  $("form#stress-test").submit(function (event) {
    event.preventDefault();

    let stressSignsCount = 0;
    let healthSymptomsCount = 0;
    let copingCount = 0;

    $("input:checkbox[name=stress-signs]:checked").each(function () {
      stressSignsCount++;
    });
    $("input:checkbox[name=health-symptoms]:checked").each(function() {
      healthSymptomsCount++;
    });
    $("input:checkbox[name=coping]:checked").each(function() {
      copingCount++;
    });

    if (stressSignsCount >= 2) {
      if (healthSymptomsCount >= 2) {
        $("div.response").text("You are really unhealthy! Seek immediate assistance!");
      } else {
        $("div.response").text("You are stressed, but not in immediate danger!");
      }
    } else {
      $("div.response").text("You're killin' it Slayer!");
    }
    $("div.response").show();
  });
});