const season ={
  SUMMER:"summer",
  WINTER:"winter",
  SPRING: "spring",
  AUTUMN: "autumn"
}

function getSeasonMessage(season) {
  switch (season) {
    //case "summer": console.log("SunnyTime");break;    
    case season.SUMMER: console.log("SunnyTime");break; 

    case "winter":console.log("SnowyTime");break;
    case "Spring":console.log("SpringTime");break;
    case "autumn":console.log("autumnTime");break;
  }
}
getSeasonMessage(season.SUMMER);

