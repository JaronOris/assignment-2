export function getLocation(usrLocation) {
  let locationUrl = `http://api.weatherapi.com/v1/current.json?key=af5bceee5bae4f218bd215116242209&q=${usrLocation}`;

  $.getJSON(locationUrl, (data) => {
    console.log(data);

    //SEARCH FUNCTION I CAN'T GET TO WORK RIGHT
    // $.each(data, (idx, searchResult) => {
    //   $("#results").append(
    //     `<li> City: ${searchResult.name}, Region: ${searchResult.region}, Country: ${searchResult.country}</li>`
    //   )
    // })

    //FETCHES WEATHER IMAGE. THERE HAS TO BE A BETTER WAY TO DO THIS
    $.getJSON(locationUrl, (data) => {
      console.log(data);
      let current = data.current;
      let location = data.location;
      let condition = current.condition;
      let icon = `<img 
                    src="https:${condition.icon}"
                    alt ="${condition.text}"
                    />`;

      $("#results").html(location.name);
      $("#weatherText").html(condition.text)
      $("#weatherImg").html(icon);
    });
  }).fail((error) => {
    console.log("error", error.message);
  });
}