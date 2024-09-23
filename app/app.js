import * as MODEL from "../model/model.js";

var navigation = []

function addNavBar() {
  let nav = `<nav>`;
  $.each(navigation, (idx, navName)  => {
    nav += `<a href="#${navName.urlAddress}">${navName.name}</a>`;
  });
  nav += `</nav>`
  $("#navBar").html(nav);
}

function getData() {
  $.getJSON("data/data.json", function (data) {
    navigation = data.Navigation
    // console.log(data)

    addNavBar()
  }).fail(function (error) {
    console.log(error, `error ${error.statusText}`);
  })
}

function initListeners() {
  $("#search").on("click", (e) => {
    let usrLocation = $("#usrInput").val();
    MODEL.getLocation(usrLocation);

  });
}

$(document).ready(function () {
initListeners();
getData();
});