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
        
      } else {

      }
    } else {

    }

    console.log(`Stress Signs Count: ${stressSignsCount}`);
    console.log(`Health Symptoms Count ${healthSymptomsCount}`);
    console.log(`Coping Count: ${copingCount}`);
  });
});