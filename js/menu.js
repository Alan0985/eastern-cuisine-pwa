//Sticky Tag Starts Here
window.onscroll = function() {
  stickyTag();
};

const myTab = document.getElementById("myTab");
const sticky = myTab.offsetTop;

function stickyTag() {
  if (window.pageYOffset >= sticky) {
    myTab.classList.add("sticky");
  } else {
    myTab.classList.remove("sticky");
  }
}

//Dynamically Load the Pick Up meal items
$(function() {
  //Load the spinner
  $("#pickUpMeals").empty();
  $("#pickUpMeals").append('<div class="loader"></div>');

  $.ajax({
    type: "GET",
    url: "https://www.sweetasnz.ml/ec/json/pickUpMenu.json",
    // url: "http://127.0.0.1:5500/json/pickUpMenu.json",
    dataType: "json",
    success: function(response) {
      $("#pickUpMeals").empty();

      $.each(response, function(key, value) {
        $("#pickUpMeals").append(
          "<div>" +
            '<div class="menubar" id="menubarPickUp' +
            value.menuListName +
            '">' +
            '<a data-toggle="collapse" data-target="#collapsePickUp' +
            value.menuListName +
            '">' +
            value.menuListName +
            "</a>" +
            "</div>" +
            '<div class="row collapse" id="collapsePickUp' +
            value.menuListName +
            '">' +
            "</div>" +
            "</div>"
        );

        $.each(value.dishItems, function(key, singleItem) {
          $("#collapsePickUp" + value.menuListName).append(
            '<div id="' +
              singleItem.dishID +
              "_p" +
              '" class="col col-12 col-sm-6 col-xl-3">' +
              '<div class="row item">' +
              '<div class="col col-4" data-toggle="modal" data-target="#' +
              singleItem.dishID +
              '_p_Modal">' +
              '<img src="./img/300/' +
              singleItem.dishID +
              '_300.jpg" alt="' +
              singleItem.dishTitle +
              '" />' +
              "</div>" +
              '<div class="col col-8">' +
              '<div class="row dishText" data-toggle="modal" data-target="#' +
              singleItem.dishID +
              '_p_Modal">' +
              '<p id="' +
              singleItem.dishID +
              "_p_dishTitle" +
              '" class="dishTitle">' +
              singleItem.dishTitle +
              "</p>" +
              '<p class="dishDetail">' +
              singleItem.dishDetail +
              "</p>" +
              "</div>" +
              '<div class="row pricePlus">' +
              '<div class="col col-6">' +
              '<p class="dishPrice">$' +
              singleItem.dishPrice.toFixed(2) +
              "</p>" +
              "</div>" +
              '<div class="col col-6">' +
              '<i id="plus_' +
              singleItem.dishID +
              '" class="fas fa-plus" onClick="checkDish(\'' +
              singleItem.dishID +
              "', '" +
              singleItem.dishTitle +
              "', '" +
              singleItem.dishPrice.toFixed(2) +
              "')\"></i>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>"
          );
        });
      });
    }
  });
});

//Save the order detail to localStorage on click
function checkDish(dishID, dishTitle, dishPrice) {
  localStorage.setItem(dishID, [dishID, dishTitle, dishPrice]);
  if ($("#plus_" + dishID).hasClass("fa-plus")) {
    $("#plus_" + dishID)
      .fadeOut(100, function() {
        $("#plus_" + dishID)
          .removeClass("fa-plus")
          .addClass("fa-check-square");
      })
      .fadeIn(100);
  } else {
    $("#plus_" + dishID)
      .fadeOut(100, function() {
        $("#plus_" + dishID)
          .removeClass("fa-check-square")
          .addClass("fa-plus");
      })
      .fadeIn(100);
    localStorage.removeItem(dishID);
  }
}

//Dynamically Load the Pick Up Dish Modal Content
$(function() {
  $.ajax({
    type: "GET",
    url: "https://www.sweetasnz.ml/ec/json/pickUpMenu.json",
    // url: "http://127.0.0.1:5500/json/pickUpMenu.json",
    dataType: "json",
    success: function(response) {
      $.each(response, function(key, value) {
        $.each(value.dishItems, function(key, singleItem) {
          $("#" + singleItem.dishID + "_Modal").click(
            $("#dishModalWrapper").append(
              '<div class="modal dishModal fade" id="' +
                singleItem.dishID +
                "_p_Modal" +
                '" tabindex="-1" role="dialog" aria-labelledby="dishModalTitle" aria-hidden="true">' +
                '<div class="modal-dialog modal-dialog-centered" role="document">' +
                '<div class="modal-content dishModalContent">' +
                '<div class="dishModalHeader text-center">' +
                '<h5 id="dishModalTitle">' +
                singleItem.dishTitle +
                "</h5>" +
                "</div>" +
                '<div class="dishModalImage">' +
                '<img src="./img/768/' +
                singleItem.dishID +
                '_768.jpg" alt="' +
                singleItem.dishTitle +
                '" />' +
                "</div>" +
                '<div class="dishModalBody">' +
                '<div class="row dishFullDetail">' +
                "<p>" +
                singleItem.dishFullDetail +
                "</p>" +
                "</div>" +
                "</div>" +
                '<div class="row dishModalFooter">' +
                '<div class="col col-12 text-center">' +
                '<button type="button" class="dishModalBtn" data-dismiss="modal">Close</button>' +
                // '<button type="button" class="dishModalBtn" id="dishModalBtnDone">Done</button>' +
                "</div>" +
                "</div>" +
                "</div>" +
                "</div>" +
                "</div>"
            )
          );
        });
      });
    }
  });
});

//Dynamically Load the Dine In meal items
$(function() {
  //Load the spinner
  $("#dineInMeals").empty();
  $("#dineInMeals").append('<div class="loader"></div>');

  $.ajax({
    type: "GET",
    url: "https://www.sweetasnz.ml/ec/json/dineInMenu.json",
    // url: "http://127.0.0.1:5500/json/dineInMenu.json",
    dataType: "json",
    success: function(response) {
      $("#dineInMeals").empty();

      $.each(response, function(key, value) {
        $("#dineInMeals").append(
          "<div>" +
            '<div class="menubar" id="menubarDineIn' +
            value.menuListName +
            '" data-toggle="collapse" data-target="#collapseDineIn' +
            value.menuListName +
            '">' +
            value.menuListName +
            "</div>" +
            '<div class="row collapse" id="collapseDineIn' +
            value.menuListName +
            '">' +
            "</div>" +
            "</div>"
        );

        $.each(value.dishItems, function(key, singleItem) {
          $("#collapseDineIn" + value.menuListName).append(
            '<div id="' +
              singleItem.dishID +
              "_d" +
              '" class="col col-12 col-sm-6 col-xl-3">' +
              '<div class="row item" data-toggle="modal" data-target="#' +
              singleItem.dishID +
              '_d_Modal">' +
              '<div class="col col-4">' +
              '<img src="./img/300/' +
              singleItem.dishID +
              '_300.jpg" alt="' +
              singleItem.dishTitle +
              '" />' +
              "</div>" +
              '<div class="col col-8">' +
              '<div class="row dishText">' +
              '<p class="dishTitle">' +
              singleItem.dishTitle +
              "</p>" +
              '<p class="dishDetail">' +
              singleItem.dishDetail +
              "</p>" +
              "</div>" +
              '<div class="row pricePlus">' +
              '<div class="col col-12">' +
              '<p class="dishPrice">$' +
              singleItem.dishPrice.toFixed(2) +
              "</p>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>"
          );
        });
      });
    }
  });
});

//Dynamically Load the Dine In Dish Modal Content
$(function() {
  $.ajax({
    type: "GET",
    url: "https://www.sweetasnz.ml/ec/json/dineInMenu.json",
    // url: "http://127.0.0.1:5500/json/dineInMenu.json",
    dataType: "json",
    success: function(response) {
      $.each(response, function(key, value) {
        $.each(value.dishItems, function(key, singleItem) {
          $("#" + singleItem.dishID + "_Modal").click(
            $("#dishModalWrapper").append(
              '<div class="modal dishModal fade" id="' +
                singleItem.dishID +
                "_d_Modal" +
                '" tabindex="-1" role="dialog" aria-labelledby="dishModalTitle" aria-hidden="true">' +
                '<div class="modal-dialog modal-dialog-centered" role="document">' +
                '<div class="modal-content dishModalContent">' +
                '<div class="dishModalHeader text-center">' +
                '<h5 id="dishModalTitle">' +
                singleItem.dishTitle +
                "</h5>" +
                "</div>" +
                '<div class="dishModalImage">' +
                '<img src="./img/768/' +
                singleItem.dishID +
                '_768.jpg" alt="' +
                singleItem.dishTitle +
                '" />' +
                "</div>" +
                '<div class="dishModalBody">' +
                '<div class="row dishFullDetail">' +
                "<p>" +
                singleItem.dishFullDetail +
                "</p>" +
                "</div>" +
                "</div>" +
                '<div class="row dishModalFooter">' +
                '<div class="col col-12 text-center">' +
                '<button type="button" class="dishModalBtn" data-dismiss="modal">Close</button>' +
                "</div>" +
                "</div>" +
                "</div>" +
                "</div>" +
                "</div>"
            )
          );
        });
      });
    }
  });
});
